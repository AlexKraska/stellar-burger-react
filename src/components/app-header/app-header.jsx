import { Logo, BurgerIcon, ListIcon, ProfileIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import s from './app-header.module.css';

function AppHeader() {

  return (
    <header className={`${s.header} text text_type_main-default pt-4 pb-4`}>
      <div className={s.headerBox}>
        <nav>
          <ul className={s.headerUl}>
            <li>
              <div className={`pt-5 pr-5 pb-5 ${s.headerLinkActive} ${s.headerLink}`} to="/">
                <BurgerIcon type="primary" />
                <span className={`ml-2`}>Конструктор</span>
              </div>
            </li>
            <li>
              <div className={`p-5 ${s.headerLink}`} to="/">
                <ListIcon type="secondary" />
                <span className={`ml-2`}>Лента заказов</span>
              </div>
            </li>
          </ul>
        </nav>
        <div className={s.logo}>
          <Logo />
        </div>
        <div className={`p-5 ${s.headerLink} ${s.room}`} to="/">
          <ProfileIcon type="secondary" />
          <span className={`ml-2`}>Личный кабинет</span>
        </div>
      </div>
    </header >
  )
}

export default AppHeader;


