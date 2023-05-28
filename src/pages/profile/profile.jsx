import profileStyles from './profile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { sendUserData } from '../../services/actions/userData';
import { Button } from '@ya.praktikum/react-developer-burger-ui-components';

const UserProfile = () => {

    const dispatch = useDispatch();
    const [nameValue, setNameValue] = useState('');
    const [loginValue, setLoginValue] = useState('');
    const [passValue, setPassValue] = useState('');

    const [isFormEdited, setIsFormEdited] = useState(false);

    const nameRef = useRef(null);
    const loginRef = useRef(null);
    const passRef = useRef(null);

    const userData = (state) => state.userData.userData; // получаем из хранилища обьект с данными юзера
    const infoAboutUser = useSelector(userData);

    const accessToken = (state) => state.userData.accessToken; // получаем из хранилища токен
    const tokenForAccess = useSelector(accessToken);

    const loginOrNot = (state) => state.userData.isLoggedIn; // проверим аутентефицирован ли пользователь для дальнейшего условного ренднринга
    const isLoggedIn = useSelector(loginOrNot);

    useEffect(() => { // подгрузим на нашу страничку данные о пользователе (если он авторизован)
        if (infoAboutUser) {
            setLoginValue(infoAboutUser.email);
            setNameValue(infoAboutUser.name);
            setPassValue('');
        }
    }, [infoAboutUser]);

    const stopEdit = (evt) => {
        evt.preventDefault();
        setNameValue(infoAboutUser.name);
        setLoginValue(infoAboutUser.email);
        setPassValue('');
        setIsFormEdited(false);
    };

    const onSubmit = (evt) => {
        evt.preventDefault();
        dispatch(sendUserData(tokenForAccess, nameValue, loginValue, passValue));
        setIsFormEdited(false);
    };

    const onNameEdit = (evt) => {
        setNameValue(evt.target.value);
        nameValue === infoAboutUser.name ? setIsFormEdited(false) : setIsFormEdited(true);
    };

    const onEmailEdit = (evt) => {
        setLoginValue(evt.target.value);
        loginValue === infoAboutUser.email ? setIsFormEdited(false) : setIsFormEdited(true);
    };

    const onPassEdit = (evt) => {
        const value = evt.target.value;
        setPassValue(evt.target.value);
        value === passValue ? setIsFormEdited(false) : setIsFormEdited(true);
    };

    return (
        <div className={profileStyles.profileBox}>

            <div className={`${profileStyles.menuBox}`}>
                <nav>
                    <ul className={`${profileStyles.menu} text text_type_main-medium`}>
                        <li>
                            <NavLink to="/user-profile"
                                className={({ isActive }) => isActive ? `${profileStyles.menuLink_active} ml-2` : `${profileStyles.menuLink} ml-2`}>
                                Профиль
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/user-profile/orders"
                                className={({ isActive }) => isActive ? `${profileStyles.menuLink_active} ml-2` : `${profileStyles.menuLink} ml-2`}>
                                История заказов
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/"
                                className={({ isActive }) => isActive ? `${profileStyles.menuLink_active} ml-2` : `${profileStyles.menuLink} ml-2`}>
                                Выход
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                <span className={`${profileStyles.mw} text text_type_main-default text_color_inactive`}>В этом разделе вы сможете изменить свои персональные данные</span>
            </div>

            <form className={profileStyles.inutBox} onSubmit={onSubmit} onReset={stopEdit}>
                <Input
                    type={'text'} placeholder={'Имя'} ref={nameRef}
                    onChange={onNameEdit}
                    value={nameValue} name={'name'} size={'default'} icon="EditIcon"
                />
                <Input
                    placeholder={'Логин'} onChange={onEmailEdit}
                    value={loginValue} name={'e-mail'} size={'default'} icon="EditIcon"
                    ref={loginRef}
                />
                <Input
                    onChange={onPassEdit} placeholder={'Пароль'}
                    value={passValue} name={'password'} icon="EditIcon" ref={passRef}
                />
                {
                    isFormEdited ? (
                        <div className={profileStyles.btnBox}>
                            <Button htmlType='reset' type="secondary" size="medium">
                                Отмена
                            </Button>
                            <Button htmlType="submit" type="primary" size="medium">
                                Сохранить
                            </Button>
                        </div>
                    ) : (
                        isLoggedIn ? (
                            <h1 className={`${profileStyles.hint} pl-20 ml-20 text text_type_main-small`}>А вот и ваши данные !</h1>
                        ) : (
                            <h1 className={`${profileStyles.hint} pl-30 text text_type_main-small`}>Ой, вы еще не вошли в личный кабинет !</h1>
                        )
                    )
                }
            </form>
        </div>
    )
}

export default UserProfile;