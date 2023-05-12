import React from "react";
import regStyles from './register.module.css';
import { Input, Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";

const Register = () => {

    const [nameValue, setNameValue] = React.useState('');
    const [mailValue, setMailValue] = React.useState('');
    const [passValue, setPassValue] = React.useState('');

    return (
        <div className={regStyles.loginBox}>
            <h1 className={regStyles.heading}>Регистрация</h1>
            <div className={regStyles.inutBox}>
                <Input
                    type={'text'} placeholder={'Имя'}
                    onChange={e => setNameValue(e.target.value)}
                    value={nameValue} name={'name'} size={'default'}
                />
                <EmailInput
                    placeholder={'E-mail'} onChange={e => setMailValue(e.target.value)}
                    value={mailValue} name={'e-mail'} size={'default'} isIcon={false}
                />
                <PasswordInput
                    onChange={e => setPassValue(e.target.value)}
                    value={passValue} name={'password'} icon="ShowIcon"
                />
            </div>
            <div className={regStyles.btnBox}>
                <Button htmlType="button" type="primary" size="large">Зарегистрироваться</Button>
            </div>

            <div className={regStyles.txtBox}>
                <h2 className={regStyles.text}>Уже зарегистрированы? <a className={regStyles.textLink}>Войти</a></h2>
            </div>
        </div>
    )
}

export default Register;