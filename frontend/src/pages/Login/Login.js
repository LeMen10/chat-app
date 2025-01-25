import { Fragment, useState } from 'react';
import className from 'classnames/bind';
import axios from 'axios';
import styles from './Login.module.scss';
import { useNavigate, Link, useLocation } from 'react-router-dom';
import images from '~/assets/images/images';
import Cookies from 'js-cookie';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const cx = className.bind(styles);

function Login() {
    const location = useLocation();
    const [username, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const expires = new Date(Date.now() + 3 * 24 * 60 * 60 * 1000);
    const previousPage = location.state?.from;
    const navigate = useNavigate();

    const handleSubmit = () => {
        axios
            .post(`${process.env.REACT_APP_BASE_URL}/login`, {
                username,
                password,
            })
            .then(function (response) {
                Cookies.set('token', response.data.accessToken, { expires });
                if (previousPage === 'register') {
                    navigate(-3);
                } else {
                    navigate(-1);
                }
                // navigate('/');
            })
            .catch(function (error) {
                const err = error.response.data.message;
                if (err === 'Missing inputs') {
                    toast.warn('VVui lòng nhập đủ thông tin 😘.', {
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
                if (err === 'Invalid credentials') {
                    toast.warn('Không tìm thấy tài khoản của bạn 🥺. Có thể bạn đã nhập sai thông tin.', {
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
            });
    };

    return (
        <Fragment>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <div className={cx('modal', 'js-modal-login')}>
                <div className={cx('modal__overlay')}>
                    <img style={{ width: '100%', height: '100%' }} src={images.f8Login} alt="" />
                </div>
                <div className={cx('modal__body')}>
                    <div className={cx('auth-form')}>
                        <div className={cx('auth-form__container', 'js-modal-container-login')}>
                            <div className={cx('auth-form__header')}>
                                <h3 className={cx('auth-form__heading')}>Login</h3>
                                <Link to={'/register'} className={cx('auth-form__switch-btn', 'js-register')}>
                                    Register
                                </Link>
                            </div>

                            <div className={cx('auth-form__form')}>
                                <div className={cx('auth-form__group')}>
                                    <div className={cx('with-46')}>
                                        <input
                                            type="text"
                                            placeholder="Username"
                                            name="username"
                                            className={cx('auth-form__input')}
                                            id="auth-form__user-login"
                                            value={username}
                                            onChange={(e) => setUserName(e.target.value)}
                                        />
                                    </div>
                                    <div className={cx('with-46')}>
                                        <input
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            className={cx('auth-form__input')}
                                            id="auth-form__password-login"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className={cx('auth-form__aside')}>
                                <p className={cx('auth-form__help')}>
                                    <Link
                                        to={'/forgot_password'}
                                        className={cx('auth-form__help-link', 'auth-form__help-forgot')}
                                    >
                                        Forgot password?
                                    </Link>
                                    <span className={cx('auth-form__help-separate')}></span>
                                    <Link to={''} href="" className={cx('auth-form__help-link')}>
                                        Cần trợ giúp?
                                    </Link>
                                </p>
                            </div>

                            <div className={cx('auth-form__control')}>
                                <button
                                    value="login"
                                    className={cx('btn', 'btn--primary', 'view-cart')}
                                    onClick={handleSubmit}
                                >
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

export default Login;
