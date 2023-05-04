import ms from './main.module.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';

import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';

export default function Main({
  setIsOrderDetailsPopupOpen, setIsIngredientsPopupOpen,
  setChosenIngredient, setSelectedIngredient,
  setOrderData }) {

  return (
    <main className={ms.main}>
      <section className={ms.mainBox}>
        <BurgerIngredients setChosenIngredient={setChosenIngredient} setSelectedIngredient={setSelectedIngredient} setIsIngredientsPopupOpen={setIsIngredientsPopupOpen} />
        <BurgerConstructor setOrderData={setOrderData} setIsOrderDetailsPopupOpen={setIsOrderDetailsPopupOpen} />
      </section>
    </main>
  );
};