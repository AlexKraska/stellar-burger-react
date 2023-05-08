import { getOurIngredients } from "../../components/app/app.jsx";

export const GET_ORDER_DATA = 'GET_ORDER_DATA';
export const GET_ORDER_DATA_SUCCESS = 'GET_ORDER_DATA_SUCCESS';
export const GET_ORDER_DATA_FAILED = 'GET_ORDER_DATA_FAILED';
export const DELETE_ORDER_DATA = 'DELETE_ORDER_DATA';

export const setOrderDataLoading = () => ({
    type: GET_ORDER_DATA,
})

export const setOrderDataLoadingSuccess = (orderDetails) => ({
    type: GET_ORDER_DATA_SUCCESS,
    orderDetails,
})

export const setOrderDataLoadingFailed = () => ({
    type: GET_ORDER_DATA_FAILED,
})

export const deleteOrderData = () => ({
    type: DELETE_ORDER_DATA,
})

export function createOrder(ingredients) {
    return function (dispatch) {
        dispatch(setOrderDataLoading());
        getOurIngredients.sendIngredients(ingredients)
            .then(res => {
                if (res && res.success) {
                    dispatch(setOrderDataLoadingSuccess(res.order.number))
                    dispatch(deleteOrderData())
                } else {
                    dispatch(setOrderDataLoadingFailed())
                }
            })
            .catch(err => {
                dispatch(setOrderDataLoadingFailed())
                console.log(err)
            })
    }
}
