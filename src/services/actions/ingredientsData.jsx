import { getOurIngredients } from "../../components/app/app.jsx";

export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

export const SORT_INGREDIENTS = "SORT_INGREDIENTS";
export const SELECT_INGREDIENT = "SELECT_INGREDIENT";
export const ADD_INGREDIENT = "ADD_INGREDIENT";

export const DELETE_SELECTED_INGREDIENT = "DELETE_SELECTED_INGREDIENT";
export const DELETE_INGREDIENT = "DELETE_INGREDIENT";
export const DELETE_ALL_INGREDIENTS = "DELETE_ALL_INGREDIENTS";

// тут бкдет описана работа с асинхронным кодом
export function getIngredients() {

    return function (dispatch) {
        dispatch({
            type: GET_INGREDIENTS,
        })

        getOurIngredients.getIngredientsDataObj()
            .then(((ingredientsData) => {
                if (ingredientsData) {
                    dispatch({
                        type: GET_INGREDIENTS_SUCCESS,
                        payload: ingredientsData.data
                    })
                }
            }
            )).catch((err) => {
                dispatch({
                    type: GET_INGREDIENTS_FAILED,
                })
            })
        // getOurIngredients.getIngredientsDataObj()
        //     .then(((data) => {
        //         console.log(data)
        //     }
        //     )).catch((err) => {
        //         console.log(err)
        //     })
    }
}

export const selectIngredient = (ingredient) => ({
    type: SELECT_INGREDIENT,
    payload: ingredient,
  });

