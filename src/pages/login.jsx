import React from "react";
import loginStyles from './login.module.css';
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { loginUser } from "../services/actions/userData";
import { Link, useNavigate, Navigate, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../services/actions/userData";

const Login = () => {

    const [mailValue, setMailValue] = React.useState('');
    const [passValue, setPassValue] = React.useState('');

    const loggedOrNot = (store) => store.userData.isLoggedIn;
    const isLoggedIn = useSelector(loggedOrNot);

    const dataOfUser = (state) => state.userData.userData;
    const userData = useSelector(dataOfUser);

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const handleLogin = (evt) => {
        evt.preventDefault();

        if (!mailValue || !passValue) { return; }
        dispatch(loginUser(mailValue, passValue));
        localStorage.setItem('mailValue', mailValue);

        setMailValue("");
        setPassValue("");
    };

    React.useEffect(() => {
        if (userData) {
            (location.state && location.state.previousLocation) ? navigate(location.state.previousLocation.pathname) : navigate('/');
        }
    }, [userData, navigate, location]);

    React.useEffect(() => {
        if (localStorage.refreshToken) {
            dispatch(setIsLoggedIn(true));
            // navigate(location.state.previousLocation);
        }
    }, []);

    return (
        <div className={loginStyles.loginBox}>
            <h1 className={`${loginStyles.heading} text text_type_main-medium`}>Вход</h1>
            <form onSubmit={handleLogin} className={loginStyles.form}>
                <div className={loginStyles.inutBox}>
                    <EmailInput
                        placeholder={'E-mail'} onChange={e => setMailValue(e.target.value)}
                        value={mailValue} name={'name'} size={'default'} isIcon={false}
                    />
                    <PasswordInput
                        onChange={e => setPassValue(e.target.value)}
                        value={passValue} name={'password'} icon="ShowIcon"
                    />
                </div>
                <div className={loginStyles.btnBox}>
                    <Button htmlType="submit" type="primary" size="large">Войти</Button>
                </div>
            </form>

            <div className={loginStyles.txtBox}>
                <h2 className={`text text_type_main-small`}>Вы - новый пользователь? <Link className={loginStyles.textLink} to="/register">Зарегистрироваться</Link></h2>
                <h2 className={`text text_type_main-small`}>Забыли пароль? <Link className={loginStyles.textLink} to="/forgot-password">Восстановить пароль</Link></h2>
            </div>
        </div>
    )
}

export default Login;