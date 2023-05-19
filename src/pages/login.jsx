import React from "react";
import loginStyles from './login.module.css';
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";

const Login = () => {

    const [mailValue, setMailValue] = React.useState('');
    const inputRef = React.useRef(null);

    const [passValue, setPassValue] = React.useState('');

    return (
        <div className={loginStyles.loginBox}>
            <h1 className={`${loginStyles.heading} text text_type_main-medium`}>Вход</h1>
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
                <Button htmlType="button" type="primary" size="large">Войти</Button>
            </div>

            <div className={loginStyles.txtBox}> 
                <h2 className={`text text_type_main-small`}>Вы - новый пользователь? <Link className={loginStyles.textLink} to="/register">Зарегистрироваться</Link></h2>
                <h2 className={`text text_type_main-small`}>Забыли пароль? <Link className={loginStyles.textLink} to="/forgot-password">Восстановить пароль</Link></h2>
            </div>
        </div>
    )
}

export default Login;