import ms from './main.module.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';

import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';

export default function Main({
  setIsOrderDetailsPopupOpen, setIsIngredientsPopupOpen,
  setChosenIngredient, ingredientsData }) {
  return (
    <main className={ms.main}>
      <section className={ms.mainBox}>
        <BurgerIngredients setChosenIngredient={setChosenIngredient} setIsIngredientsPopupOpen={setIsIngredientsPopupOpen} ingredientsData={ingredientsData} />
        <BurgerConstructor setIsOrderDetailsPopupOpen={setIsOrderDetailsPopupOpen} ingredientsData={ingredientsData} />
      </section>
    </main>
  );
};