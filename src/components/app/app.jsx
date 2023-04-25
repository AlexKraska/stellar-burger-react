import a from './app.module.css';
import { useEffect, useState, useContext, useRef } from 'react';

import AppHeader from '../app-header/app-header.jsx'
import Main from '../main/main.jsx';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx';
import OrderDetails from '../order-details/order-details.jsx';
import Modal from '../modal/modal.jsx';

import { IngredientsContext } from '../../context/IngredientsContext.jsx';
import { OrderContext } from '../../context/orderContext.jsx';
import { SelectedIngredientContext } from '../../context/selectedIngredientContext.jsx';
import { ChosenIngredientsContext } from '../../context/chosenIngredientsContext.jsx';

import { Api } from '../../utils/api.jsx';
import { base_URL } from '../../utils/constants.jsx';

// Запрос к API должен происходить при монтировании компонента App.
const getOurIngredients = new Api(base_URL);

export default function App() {

  const [isLoading, setIsLoading] = useState(false);
  const [ingredientsData, setIngredientsData] = useState([]);
  const [orderData, setOrderData] = useState({});
  const [isIngredientsPopupOpen, setIsIngredientsPopupOpen] = useState(false);
  const [isOrderDetailsPopupOpen, setIsOrderDetailsPopupOpen] = useState(false);
  const [chosenIngredient, setChosenIngredient] = useState({ element: {} });
  const [selectedIngredient, setSelectedIngredient] = useState([]);

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
  }, []) // вызываем тоько один раз

  // установим данне для контекста, чтобы взять потом отсюда номер заказа
  useEffect(() => {
    getOurIngredients.sendIngredients()
      .then((data) => setOrderData(data))
      .catch((err) => { console.log(err) })
  }, [])

  return (

    <IngredientsContext.Provider value={ingredientsData}>
      <OrderContext.Provider value={orderData}>
        <SelectedIngredientContext.Provider value={selectedIngredient}>
          <ChosenIngredientsContext.Provider value={chosenIngredient}>
            <div className={`${a.app} pb-10`}>
              {
                isLoading ? (<h1 className="text text_type_main-large">Загружаем заказики...</h1>) :
                  <>
                    <AppHeader />
                    <Main
                      setChosenIngredient={setChosenIngredient}
                      setSelectedIngredient={setSelectedIngredient}
                      setIsOrderDetailsPopupOpen={setIsOrderDetailsPopupOpen}
                      setIsIngredientsPopupOpen={setIsIngredientsPopupOpen}
                      setOrderData={setOrderData}
                    />

                    {
                      isOrderDetailsPopupOpen && (
                        <Modal popupCloseHandler={setIsOrderDetailsPopupOpen}>
                          {orderData && <OrderDetails />}
                        </Modal>
                      )
                    }
                    {
                      isIngredientsPopupOpen && (
                        <Modal title='Детали ингредиентов' popupCloseHandler={setIsIngredientsPopupOpen}>
                          <IngredientDetails popupCloseHandler={setIsIngredientsPopupOpen} />
                        </Modal>
                      )
                    }
                  </>
              }
            </div >
          </ChosenIngredientsContext.Provider>
        </SelectedIngredientContext.Provider>
      </OrderContext.Provider>
    </IngredientsContext.Provider>
  );
};