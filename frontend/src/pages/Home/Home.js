import { useState, useEffect } from 'react';
import className from 'classnames/bind';
import axios from 'axios';
import styles from './Home.module.scss';
import Cookies from 'js-cookie';
import { Link, useNavigate, useParams } from 'react-router-dom';
import Contact from '~/components/Contact/Contact';

const cx = className.bind(styles);

const Home = () => {
    const { slug } = useParams();
    const [password, setPassword] = useState('');
    const [dataEmail, setDataEmail] = useState();
    const [resetSuccess, setResetSuccess] = useState(false);
    const [timeLeft, setTimeLeft] = useState(5);

    const navigate = useNavigate();

    useEffect(() => {
        if (resetSuccess) {
            const timer = timeLeft > 0 && setInterval(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearInterval(timer);
        }
    }, [timeLeft, navigate, resetSuccess]);

    if (timeLeft === 0) navigate(`/login`);

    const handleSubmit = () => {
        const token = Cookies.get('token');
        const api = axios.create({
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`,
            },
        });

        api.post(`${process.env.REACT_APP_BASE_URL}/reset_password`, { password, token: slug })
            .then((res) => {
                if (res.status === 200) {
                    setResetSuccess(true);
                    setDataEmail(res.data.email);
                    setTimeLeft(5);
                }
            })
            .catch((error) => {
                const err = error.response.data.message;
                if (err === 'Invalid reset token') navigate('/forgot_password');
            });
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('container')}>
                <div className={cx('sidebar')}>
                    <div className={cx('search')}>
                        <input placeholder="Search..." type="text" />
                        <button>
                            <i className={cx('fas fa-search')}> </i>
                        </button>
                    </div>
                    <div className={cx('contacts')}>
                        <Contact/>
                    </div>
                    <div className={cx('logout')}>
                        <i className={cx('fas fa-sign-out-alt')}> </i>
                    </div>
                </div>
                <div className={cx('main')}>
                    <div className={cx('welcome')}>
                        Welcome
                        <span aria-label="wave" role="img">
                            {' '}
                            👋{' '}
                        </span>
                        John Doe
                        <span aria-label="snowflake" role="img">
                            {' '}
                            ❄️{' '}
                        </span>
                    </div>
                    <div className={cx('select-chat')}>Select a chat to start messaging</div>
                    <div className={cx('chat-icon')}>
                        <i className={cx('fas fa-comments')}> </i>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
