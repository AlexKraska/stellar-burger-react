import { GET_ORDER_DATA, GET_ORDER_DATA_SUCCESS, GET_ORDER_DATA_FAILED, DELETE_ORDER_DATA } from "../actions/orderData.jsx";

const defaultState = {
    orderDetails: null,
    orderRequest: false,
    orderFailed: false,
}

export const orderReducer = (state = defaultState, action) => {

    switch (action.type) {
        case GET_ORDER_DATA: {
            return {
                ...state,
                orderRequest: true,
                orderFailed: false,
            };
        }
        case GET_ORDER_DATA_FAILED: {
            return {
                ...state,
                orderRequest: false,
                orderFailed: true,
            };
        }
        case GET_ORDER_DATA_SUCCESS: {
            return {
                ...state,
                orderRequest: false,
                orderDetails: action.orderDetails,
            };
        }
        case DELETE_ORDER_DATA: {
            return {
                ...state,
                orderDetails: null,
            };
        }
        default: {
            return state;
        }
    }
};