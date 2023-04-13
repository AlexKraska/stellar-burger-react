import a from './app.module.css';
import { useEffect, useState } from 'react';

import { orderData } from '../../utils/data.jsx';

import AppHeader from '../app-header/app-header.jsx'
import Main from '../main/main.jsx';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx';
import OrderDetails from '../order-details/order-details.jsx';

import Modal from '../modal/modal.jsx';

import { Api } from '../../utils/api.jsx';
import { base_URL } from '../../utils/constants.jsx';

// Запрос к API должен происходить при монтировании компонента App.
const getOurIngredients = new Api(base_URL);

export default function App() {
  const [ingredientsData, setIngredientsData] = useState([]);
  const [isIngredientsPopupOpen, setIsIngredientsPopupOpen] = useState(false);
  const [isOrderDetailsPopupOpen, setIsOrderDetailsPopupOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [chosenIngredient, setChosenIngredient] = useState({ element: {} });

  //  А для получения и сохранения данных воспользуйтесь хуком.
  useEffect(() => {
    setIsLoading(true);

    getOurIngredients.getIngredientsDataObj()
      .then(((ingredientsData) => {

        if (ingredientsData) {
          setIngredientsData(ingredientsData.data);
        }
      }
      )).catch((err) => { console.log(err) })
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <div className={`${a.app} pb-10`}>
      { //покажем такой текст если долго грузится страница
        isLoading ? (<h1 className="text text_type_main-large">Загружаем заказики...</h1>) :
          <>
            <AppHeader />
            <Main
              setChosenIngredient={setChosenIngredient}
              setIsOrderDetailsPopupOpen={setIsOrderDetailsPopupOpen}
              setIsIngredientsPopupOpen={setIsIngredientsPopupOpen}
              ingredientsData={ingredientsData}
            />
            {
              isOrderDetailsPopupOpen && (
                <Modal popupCloseHandler={setIsOrderDetailsPopupOpen}>
                  <OrderDetails orderData={orderData} />
                </Modal>
              )
            }
            {
              isIngredientsPopupOpen && (
                <Modal title='Детали ингредиентов' popupCloseHandler={setIsIngredientsPopupOpen}>
                  <IngredientDetails ingredientsData={chosenIngredient} />
                </Modal>
              )
            }
          </>

      }
    </div >
  );
};