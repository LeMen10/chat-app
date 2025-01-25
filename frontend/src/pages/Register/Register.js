import { Fragment, useState } from 'react';
import className from 'classnames/bind';
import axios from 'axios';
import styles from './Register.module.scss';
import { useNavigate, Link } from 'react-router-dom';
import images from '~/assets/images/images';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = className.bind(styles);

function Register() {
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const [gender, setGender] = useState("");

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

    const navigate = useNavigate();

    const handleSubmit = () => {
        axios
            .post(`${process.env.REACT_APP_BASE_URL}/register`, {
                username,
                password,
                email,
            })
            .then(function (res) {
                if (res.status === 200) navigate('/login', { state: { from: 'register' } });
            })
            .catch(function (error) {
                const err = error.response.data.message;
                if (err === 'Missing inputs') {
                    toast.warn('Vui lòng nhập đủ thông tin 😘.', {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                }
                if (err === 'Account already exists') {
                    toast.warn('Username đã có người đăng ký 🥺.', {
                        position: 'top-right',
                        autoClose: 3000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: 'light',
                    });
                    setUserName('');
                }
            });
    };

    return (
        <Fragment>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className={cx('modal', 'js-modal-register')}>
                <div className={cx('modal__overlay')}>
                    <img style={{ width: '100%', height: '100%' }} src={images.f8Login} alt="" />
                </div>
                <div className={cx('modal__body')}>
                    <div className={cx('auth-form ')}>
                        <div className={cx('auth-form__container', 'js-modal-container')}>
                            <div className={cx('auth-form__header')}>
                                <h3 className={cx('auth-form__heading')}>Register</h3>
                                <Link to={'/login'} className={cx('auth-form__switch-btn', 'js-login ')}>
                                    Login
                                </Link>
                            </div>

                            <div className={cx('auth-form__form')}>
                                <div className={cx('auth-form__group')}>
                                    <div className={cx('with-46')}>
                                        <input
                                            type="text"
                                            autocomplete="off"
                                            name="username"
                                            placeholder="Fullname"
                                            className={cx('auth-form__input')}
                                            id="auth-form__username"
                                            value={username}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                        <div className={cx('error')}></div>
                                    </div>
                                    <div className={cx('with-46')}>
                                        <input
                                            type="text"
                                            autocomplete="off"
                                            name="username"
                                            placeholder="Username"
                                            className={cx('auth-form__input')}
                                            id="auth-form__username"
                                            value={username}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                        <div className={cx('error')}></div>
                                    </div>
                                </div>

                                <div className={cx('auth-form__group')}>
                                    <div className={cx('with-46')}>
                                        <input
                                            type="password"
                                            autocomplete="off"
                                            name="password"
                                            placeholder="Password"
                                            className={cx('auth-form__input')}
                                            id="auth-form__password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                        <div className={cx('error')}></div>
                                    </div>
                                    <div className={cx('with-46')}>
                                        <input
                                            type="password"
                                            name="Confirm password"
                                            placeholder="Confirm password"
                                            className={cx('auth-form__input')}
                                            id="auth-form__confirm-password"
                                        />
                                        <div className={cx('error')}></div>
                                    </div>
                                </div>

                                <div className={cx('auth-form__group')}>
                                    <div className={cx('with-46')}>
                                        <input
                                            type="text"
                                            autocomplete="off"
                                            name="email"
                                            placeholder="Email"
                                            className={cx('auth-form__input')}
                                            id="auth-form__email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <div className={cx('error')}></div>
                                    </div>
                                    <div className={cx('auth-form__sex-choice', 'with-46')}>
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="male"
                                                checked={gender === 'male'}
                                                onChange={handleGenderChange}
                                            />
                                            Male
                                        </label>
                                        <label>
                                            <input
                                                type="radio"
                                                name="gender"
                                                value="female"
                                                checked={gender === 'female'}
                                                onChange={handleGenderChange}
                                            />
                                            Female
                                        </label>
                                    </div>
                                </div>
                            </div>

                            <div className={cx('auth-form__aside')}>
                                <p className={cx('auth-form__policy-text')}>
                                    Bằng việc đăng ký, bạn đã đồng ý với Nest - Multipurpose eCommerce về
                                    <Link to={''} className={cx('auth-form__text-link')}>
                                        Điều khoản dịch vụ
                                    </Link>{' '}
                                    &
                                    <Link to={''} className={cx('auth-form__text-link')}>
                                        Chính sách bảo mật
                                    </Link>
                                </p>
                            </div>

                            <div className={cx('auth-form__control')}>
                                <Link
                                    to={'/'}
                                    className={cx('btn auth-form__control-back', 'btn--normal js-modal-close')}
                                >
                                    Cancel
                                </Link>
                                <button className={cx('btn btn--primary', 'view-cart')} onClick={handleSubmit}>
                                    OK
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
export default Register;
