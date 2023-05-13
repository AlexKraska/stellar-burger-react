import React from "react";
import resetStyles from './forgot-password.module.css';
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

const ResetPassword = () => {

    const [letterCodeValue, setletterCodeValue] = React.useState('');
    const [passValue, setPassValue] = React.useState('');

    return (
        <div className={resetStyles.loginBox}>
            <h1 className={`${resetStyles.heading} text text_type_main-medium`}>Восстановление пароля</h1>
            <div className={resetStyles.inutBox}>
                <PasswordInput
                    onChange={e => setPassValue(e.target.value)} placeholder={'Введите новый пароль'}
                    value={passValue} name={'password'} icon="ShowIcon"
                />
                <Input
                    type={'text'} placeholder={'Введите код из письма'}
                    onChange={e => setletterCodeValue(e.target.value)}
                    value={letterCodeValue} name={'letterCode'} size={'default'}
                />
            </div>
            <div className={resetStyles.btnBox}>
                <Button htmlType="button" type="primary" size="large">Сохранить</Button>
            </div>

            <div className={resetStyles.txtBox}>
                <h2 className={`text text_type_main-small`}>Вспомнили пароль? <a className={resetStyles.textLink}>Войти</a></h2>
            </div>
        </div>
    )
}

export default ResetPassword;