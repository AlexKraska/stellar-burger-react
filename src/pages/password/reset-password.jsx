import React, { useEffect } from "react";
import resetStyles from './forgot-password.module.css';
import { Button, Input, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { resetPassword, setForgotPasswordState } from "../../services/actions/userData.jsx";
import { useDispatch, useSelector } from "react-redux";

const ResetPassword = () => {

    const [letterCodeValue, setLetterCodeValue] = React.useState('');
    const [passValue, setPassValue] = React.useState('');

    const dispatch = useDispatch();

    const forgottenPass = (store) => store.userData.isPasswordForgot; //узнаем забыт ли пассворд
    const isPasswordForgot = useSelector(forgottenPass);

    const infoAboutUser = (state) => state.userData.userData; // получаем из хранилища обьект с данными юзера
    const userData = useSelector(infoAboutUser);

    const navigate = useNavigate();
    const location = useLocation();

    const handleResetPassword = (evt) => {
        evt.preventDefault();
        if (!letterCodeValue || !passValue) { return };

        dispatch(resetPassword(passValue, letterCodeValue));
        dispatch(setForgotPasswordState(false));

        setLetterCodeValue("");
        setPassValue("");
        navigate('/user-profile');
    };

    useEffect(() => {
        if (userData) {
            (location.state && location.state.previousLocation) ? navigate(location.state.previousLocation.pathname) : navigate('/');
        } else {
            !isPasswordForgot && navigate('/forgot-password');
        }
    }, [userData, navigate, location, isPasswordForgot]);

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
                    onChange={e => setLetterCodeValue(e.target.value)}
                    value={letterCodeValue} name={'letterCode'} size={'default'}
                />
            </div>
            <div className={resetStyles.btnBox}>
                <Button htmlType="button" type="primary" size="large" onClick={handleResetPassword}>Сохранить</Button>
            </div>

            <div className={resetStyles.txtBox}>
                <h2 className={`text text_type_main-small`}>Вспомнили пароль? <Link className={resetStyles.textLink} to="/login">Войти</Link></h2>
            </div>
        </div>
    )
}

export default ResetPassword;