import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { NavLink } from 'react-router-dom';

import s from './app-header.module.css';

function AppHeader() {

  return (
    <header className={`${s.header} text text_type_main-default pt-4 pb-4`}>
      <div className={s.headerBox}>
        <nav>
          <ul className={s.headerUl}>
            <li>
              <NavLink activeClassName={s.link_active} className={`pt-5 pr-5 pb-5 ${s.link}`} exact to="/">
                <BurgerIcon type="secondary" />
                <span className={`ml-2`}>Конструктор</span>
              </NavLink>
            </li>
            <li>
              <NavLink activeClassName={s.link_active} className={`p-5 ${s.link}`} exact to="/profile/orders">
                <ListIcon type="secondary" />
                <span className={`ml-2`}>Лента заказов</span>
              </NavLink>
            </li>
          </ul>
        </nav>
        <div className={s.logo}>
          <Logo />
        </div>
        <NavLink activeClassName={s.link_active} className={`p-5 ${s.link} ${s.room}`} to="/user-profile">
          <ProfileIcon type="secondary" />
          <span className={`ml-2`}>Личный кабинет</span>
        </NavLink>
      </div>
    </header >
  )
}

export default AppHeader;


