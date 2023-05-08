import ms from './main.module.css';

import BurgerIngredients from '../burger-ingredients/burger-ingredients.jsx';

import BurgerConstructor from '../burger-constructor/burger-constructor.jsx';
import { DndProvider } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";

export default function Main({
  setChosenIngredient, setSelectedIngredient,
  setOrderData }) {

  return (
    <main className={ms.main}>
      <DndProvider backend={HTML5Backend}>
        <section className={ms.mainBox}>
          <BurgerIngredients setChosenIngredient={setChosenIngredient} setSelectedIngredient={setSelectedIngredient} />
          <BurgerConstructor setOrderData={setOrderData}  />
        </section>
      </DndProvider>
    </main>
  );
};