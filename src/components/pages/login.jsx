import React from "react";
import loginStyles from './login.module.css';
import { Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

const Login = () => {

    const [mailValue, setMailValue] = React.useState('');
    const inputRef = React.useRef(null);

    const [passValue, setPassValue] = React.useState('');

    return (
        <div className={loginStyles.loginBox}>
            <h1 className={loginStyles.heading}>Вход</h1>
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
                <h2 className={loginStyles.text}>Вы - новый пользователь? <a className={loginStyles.textLink}>Зарегистрироваться</a></h2>
                <h2 className={loginStyles.text}>Забыли пароль? <a className={loginStyles.textLink}>Восстановить пароль</a></h2>
            </div>
        </div>
    )
}

export default Login;