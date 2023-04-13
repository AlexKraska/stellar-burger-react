import ms from './main.module.css';
import PropTypes from 'prop-types';

import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';

import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';

import { ingredientType } from '../../utils/type.js';

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

Main.propTypes = {
  setIsOrderDetailsPopupOpen: PropTypes.func.isRequired,
  setIsIngredientsPopupOpen: PropTypes.func.isRequired,
  setChosenIngredient: PropTypes.func.isRequired,

  ingredientsData: PropTypes.arrayOf(PropTypes.shape( ingredientType )).isRequired,
}