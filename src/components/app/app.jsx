import a from './app.module.css';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AppHeader from '../app-header/app-header.jsx'
import Main from '../main/main.jsx';
import IngredientDetails from '../ingredient-details/ingredient-details.jsx';
import OrderDetails from '../order-details/order-details.jsx';
import Modal from '../modal/modal.jsx';

import { getIngredients } from '../../services/actions/ingredientsData.jsx';
import { changeIngredientsPopupState, changeOrderDetailsPopupState } from '../../services/actions/popup.jsx';

import { Api } from '../../utils/api.jsx';
import { base_URL } from '../../utils/constants.jsx';

export const getOurIngredients = new Api(base_URL);

export default function App() {

  const dispatch = useDispatch();

  const isItIngredientsPopupOpen = (state) => state.popupState.isIngredientsPopupOpen;
  const isIngredientsPopupOpen = useSelector(isItIngredientsPopupOpen);

  const isItOrderDetailsPopupOpen = (state) => state.popupState.isOrderDetailsPopupOpen;
  const isOrderDetailsPopupOpen = useSelector(isItOrderDetailsPopupOpen);

  const preLoading = (state) => state.ingredientsData.ingredientsRequest;
  const isLoading = useSelector(preLoading);

  const preOrderRequest = (state) => state.orderData.orderRequest;
  const orderRequest = useSelector(preOrderRequest);

  const popupCloseHandler = () => { // закроем тот попап, который открыт
    isOrderDetailsPopupOpen ? dispatch(changeOrderDetailsPopupState(false)) : dispatch(changeIngredientsPopupState(false));
  }

  useEffect(() => {
    dispatch(getIngredients());
  }, [dispatch])

  return (
    <div className={`${a.app} pb-10`}>
      { // отобразим прелоадер
        isLoading ? (<h1 className="text text_type_main-large">Загружаем заказики...</h1>) :
          <>
            <AppHeader />
            <Main />
            {
              !orderRequest ? (
                isOrderDetailsPopupOpen && (
                  <Modal popupCloseHandler={popupCloseHandler}>
                    <OrderDetails />
                  </Modal>
                )
              ) : (<h1 className="text text_type_main-large mb-20">Еще совсем чуть-чуть...</h1>)
            }
            {
              isIngredientsPopupOpen && (
                <Modal title='Детали ингредиентов' popupCloseHandler={popupCloseHandler}>
                  <IngredientDetails popupCloseHandler={popupCloseHandler} />
                </Modal>
              )
            }
          </>
      }
    </div >
  );
};