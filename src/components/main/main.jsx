import ms from './main.module.css';
import PropTypes from 'prop-types';

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

Main.propTypes = {
  setIsOrderDetailsPopupOpen: PropTypes.func.isRequired,
  setIsIngredientsPopupOpen: PropTypes.func.isRequired,
  setChosenIngredient: PropTypes.func.isRequired,

  ingredientsData: PropTypes.arrayOf(PropTypes.shape({

    calories: PropTypes.number.isRequired,
    carbohydrates: PropTypes.number.isRequired,
    fat: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    image_large: PropTypes.string,
    image_mobile: PropTypes.string,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    proteins: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    __v: PropTypes.number,
    _id: PropTypes.string.isRequired,

  })).isRequired,
}