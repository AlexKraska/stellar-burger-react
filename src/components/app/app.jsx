import a from './app.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppHeader from '../app-header/app-header.jsx'
import Main from '../main/main.jsx';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx';
import OrderDetails from '../order-details/order-details.jsx';
import Modal from '../modal/modal.jsx';

import { OrderContext } from '../../context/orderContext.jsx';
import { SelectedIngredientContext } from '../../context/selectedIngredientContext.jsx';
import { ChosenIngredientsContext } from '../../context/chosenIngredientsContext.jsx';

import { getIngredients } from '../../services/actions/ingredientsData.jsx';

import { Api } from '../../utils/api.jsx';
import { base_URL } from '../../utils/constants.jsx';

// Запрос к API должен происходить при монтировании компонента App.
export const getOurIngredients = new Api(base_URL);

export default function App() {

  const dispatch = useDispatch();

  const [isLoading, setIsLoading] = useState(false);

  const [orderData, setOrderData] = useState({});
  const [isIngredientsPopupOpen, setIsIngredientsPopupOpen] = useState(false);
  const [isOrderDetailsPopupOpen, setIsOrderDetailsPopupOpen] = useState(false);
  const [chosenIngredient, setChosenIngredient] = useState({ element: {} });
  const [selectedIngredient, setSelectedIngredient] = useState([]);

  // установим данне для контекста, чтобы взять потом отсюда номер заказа
  // useEffect(() => {
  //   getOurIngredients.sendIngredients()
  //     .then((data) => setOrderData(data))
  //     .catch((err) => { console.log(err) })
  // }, [])

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  return (

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
  );
};