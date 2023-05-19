import React from "react";
import forgotStyles from './forgot-password.module.css';
import { Button, EmailInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { forgotPassword, setForgotPasswordState } from "../../services/actions/userData";

const ForgotPassword = () => {

    const [mailValue, setMailValue] = React.useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleSendMailPassForgot = (e) => {
        e.preventDefault();

        if (!mailValue) {
            return;
        }

        dispatch(forgotPassword(mailValue));
        dispatch(setForgotPasswordState(true));
        setMailValue("");
        navigate('/reset-password');
    };

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
                <Button onClick={handleSendMailPassForgot} htmlType="button" type="primary" size="large">Воссстановить</Button>
            </div>

            <div className={forgotStyles.txtBox}>
                <h2 className={`text text_type_main-small`}>Вспомнили пароль? <Link className={forgotStyles.textLink} to="/login">Войти</Link></h2>
            </div>
        </div>
    )
}

export default ForgotPassword;