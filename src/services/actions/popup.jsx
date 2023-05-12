export const CHANGE_ORDER_DETAILS_POPUP_STATE = 'CHANGE_ORDER_DETAILS_POPUP_STATE';
export const CHANGE_INGREDIENTS_POPUP_STATE = 'CHANGE_INGREDIENTS_POPUP_STATE';

export const changeOrderDetailsPopupState = (bool) => ({
    type: CHANGE_ORDER_DETAILS_POPUP_STATE,
    payload: bool,
})

export const changeIngredientsPopupState = (bool) => ({
    type: CHANGE_INGREDIENTS_POPUP_STATE,
    payload: bool,
})