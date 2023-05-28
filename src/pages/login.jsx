import React from "react";
import loginStyles from './login.module.css';
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { loginUser } from "../services/actions/userData";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoggedIn } from "../services/actions/userData";

const Login = () => {

    const [mailValue, setMailValue] = React.useState('');
    const [passValue, setPassValue] = React.useState('');

    const isLoggedIn = useSelector(state => state.userData.isLoggedIn);
    const isLoginRequestFailed = useSelector(state => state.userData.loginRequestFailed);

    // const inputRef = React.useRef(null);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogin = (evt) => {
        evt.preventDefault();

        if (!mailValue || !passValue) { return; }
        dispatch(loginUser(mailValue, passValue));
        dispatch(setIsLoggedIn(true));
        setMailValue("");
        setPassValue("");
        navigate('/user-profile');
    }

    React.useEffect(() => {
        console.log(isLoggedIn)
    }, [isLoggedIn])

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