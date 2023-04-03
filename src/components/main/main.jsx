import ms from './main.module.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';

import BurgerConstructor from '../burger-constructor/burger-constructor';

function Main() {
  return (
    <main className={ms.main}>
      <section className={ms.mainBox}>
        <BurgerIngredients />
        <BurgerConstructor />
      </section>
    </main>
  );
};

export default Main;