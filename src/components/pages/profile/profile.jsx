import React from "react";
import profileStyles from './profile.module.css';
import { Input } from "@ya.praktikum/react-developer-burger-ui-components";

const UserProfile = () => {

    const [nameValue, setNameValue] = React.useState('');
    const [loginValue, setloginValue] = React.useState('');
    const [passValue, setPassValue] = React.useState('');

    return (
        <div className={profileStyles.profileBox}>

            <div className={`${profileStyles.menuBox}`}>
                <nav>
                    <ul className={`${profileStyles.menu} text text_type_main-medium`}>
                        <li>
                            <span className={`${profileStyles.menuLink} ml-2`} to="/">Профиль</span>
                        </li>
                        <li>
                            <span className={`${profileStyles.menuLink} ml-2 text_color_inactive`} to="/">История заказов</span>
                        </li>
                        <li>
                            <span className={`${profileStyles.menuLink} ml-2 text_color_inactive`} to="/">Выход</span>
                        </li>
                    </ul>
                </nav>
                <span className={`${profileStyles.mw} text text_type_main-default text_color_inactive`}>В этом разделе вы сможете изменить свои персональные данные</span>
            </div>

            <div className={profileStyles.inutBox}>
                <Input
                    type={'text'} placeholder={'Имя'}
                    onChange={e => setNameValue(e.target.value)}
                    value={nameValue} name={'name'} size={'default'} icon="EditIcon"
                />
                <Input
                    placeholder={'Логин'} onChange={e => setloginValue(e.target.value)}
                    value={loginValue} name={'e-mail'} size={'default'} icon="EditIcon"
                />
                <Input
                    onChange={e => setPassValue(e.target.value)} placeholder={'Пароль'}
                    value={passValue} name={'password'} icon="EditIcon"
                />
            </div>

        </div>
    )
}

export default UserProfile;