import React from "react";
import forgotStyles from './forgot-password.module.css';
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";

const ForgotPassword = () => {

    const [mailValue, setMailValue] = React.useState('');

    return (
        <div className={forgotStyles.loginBox}>
            <h1 className={`${forgotStyles.heading} text text_type_main-medium`}>Восстановление пароля</h1>
            <div className={forgotStyles.inutBox}>
                <EmailInput
                    placeholder={'Укажите E-mail'} onChange={e => setMailValue(e.target.value)}
                    value={mailValue} name={'name'} size={'default'} isIcon={false}
                />
            </div>
            <div className={forgotStyles.btnBox}>
                <Button htmlType="button" type="primary" size="large">Воссстановить</Button>
            </div>

            <div className={forgotStyles.txtBox}>
                <h2 className={`text text_type_main-small`}>Вспомнили пароль? <a className={forgotStyles.textLink}>Войти</a></h2>
            </div>
        </div>
    )
}

export default ForgotPassword;