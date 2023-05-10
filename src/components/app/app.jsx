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

  const isIngredientsPopupOpen = useSelector(state => state.popupState.isIngredientsPopupOpen);
  const isOrderDetailsPopupOpen = useSelector(state => state.popupState.isOrderDetailsPopupOpen);
  const isLoading = useSelector(state => state.ingredientsData.ingredientsRequest);
  const orderRequest = useSelector(state => state.orderData.orderRequest);

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
              ) : (<h1 className="text text_type_main-large">Еще совсем чуть-чуть...</h1>)
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