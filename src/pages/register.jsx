import React from "react";
import regStyles from './register.module.css';
import { Input, Button, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link } from "react-router-dom";
import { registerNewUser } from "../services/actions/userData.jsx";
import { useDispatch } from "react-redux";
import { useRef } from "react";

const Register = () => {

    const [nameValue, setNameValue] = React.useState('');
    const [mailValue, setMailValue] = React.useState('');
    const [passValue, setPassValue] = React.useState('');
    const dispatch = useDispatch();
    const inputRef = useRef(null);

    const handleRegisterNewUser = (evt) => {
        evt.preventDefault();

        if (!nameValue || !mailValue || !passValue) {
            return;
        }
        dispatch(registerNewUser(nameValue, mailValue, passValue));
        console.log('yeah baby');
    }

    return (
        <div className={regStyles.loginBox}>

            <h1 className={`${regStyles.heading} text text_type_main-medium`}>Регистрация</h1>
            <form className={regStyles.form}>
                <div className={regStyles.inutBox}>
                    <Input
                        type={'text'} placeholder={'Имя'}
                        onChange={(e) => setNameValue(e.target.value)}
                        value={nameValue} name={'name'} size={'default'}
                        ref={inputRef} errorText={"Ошибка в имени"}
                    />
                    <Input
                        placeholder={'E-mail'} onChange={(e) => setMailValue(e.target.value)}
                        value={mailValue} name={'e-mail'} size={'default'}
                        ref={inputRef} errorText={"Ошибка в почте"}
                    />
                    <PasswordInput
                        onChange={(e) => setPassValue(e.target.value)}
                        value={passValue} name={'password'} icon="ShowIcon"
                    />
                </div>
                <div className={regStyles.btnBox}>
                    <Button onClick={handleRegisterNewUser} htmlType="button" type="primary" size="large">Зарегистрироваться</Button>
                </div>
            </form>
            <h2 className={`text text_type_main-small`}>Уже зарегистрированы? <Link className={regStyles.textLink} to="/login">Войти</Link></h2>
        </div>
    )
}

export default Register;