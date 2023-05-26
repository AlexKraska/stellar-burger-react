import profileStyles from './profile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";
import { NavLink } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";

const UserProfile = () => {

    const [nameValue, setNameValue] = useState('');
    const [loginValue, setLoginValue] = useState('');
    const [passValue, setPassValue] = useState('');

    const nameRef = useRef(null);
    const loginRef = useRef(null);
    const passRef = useRef(null);

    const userData = (state) => state.userData.userData; // получаем из хранилища обьект с данными юзера
    const informationAboutUser = useSelector(userData);
    // console.log(informationAboutUser);

    const accessToken = (state) => state.userData.accessToken; // получаем из хранилища токен
    const tokenForAccess = useSelector(accessToken);
    // console.log(tokenForAccess);

    useEffect(() => { // подгрузим на наш страничку данные о пользователе (если он авторизован)
        if (informationAboutUser) {
          setLoginValue(informationAboutUser.email);
          setNameValue(informationAboutUser.name);
          setPassValue('');
        }
      }, [informationAboutUser]);

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

            <div className={profileStyles.inutBox}>
                <Input
                    type={'text'} placeholder={'Имя'} ref={nameRef}
                    onChange={e => setNameValue(e.target.value)}
                    value={nameValue} name={'name'} size={'default'} icon="EditIcon"
                />
                <Input
                    placeholder={'Логин'} onChange={e => setLoginValue(e.target.value)}
                    value={loginValue} name={'e-mail'} size={'default'} icon="EditIcon"
                    ref={loginRef}
                />
                <Input
                    onChange={e => setPassValue(e.target.value)} placeholder={'Пароль'}
                    value={passValue} name={'password'} icon="EditIcon" ref={passRef}
                />
            </div>

        </div>
    )
}

export default UserProfile;