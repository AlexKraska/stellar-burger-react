import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import s from './app-header.module.css';

function AppHeader() {

  const navigate = useNavigate();

  const logoClickHandler = (e) => {
    navigate('/');
  };

  return (
    <header className={`${s.header} text text_type_main-default pt-4 pb-4`}>
      <div className={s.headerBox}>
        <nav>
          <ul className={s.headerUl}>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? `pt-5 pr-5 pb-5 ${s.link_active}` : `pt-5 pr-5 pb-5 ${s.link}`} to="/">
                <BurgerIcon type="secondary" />
                <span className={`ml-2`}>Конструктор</span>
              </NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) =>
                isActive ? `pt-5 pr-5 pb-5 ${s.link_active}` : `pt-5 pr-5 pb-5 ${s.link}`} to="/profile/orders">
                <ListIcon type="secondary" />
                <span className={`ml-2`}>Лента заказов</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div onClick={logoClickHandler} className={s.logo}>
          <Logo />
        </div>
        <NavLink className={({ isActive }) =>
          isActive ? `pt-5 pr-5 pb-5 ${s.link_active} ${s.cabinet}` : `pt-5 pr-5 pb-5 pl-5 ${s.link} ${s.cabinet}`} to="/user-profile">
          <ProfileIcon type="secondary" />
          <span className={`ml-2`}>Личный кабинет</span>
        </NavLink>
      </div>
    </header >
  )
}

export default AppHeader;


