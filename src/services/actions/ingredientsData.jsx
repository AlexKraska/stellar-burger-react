import { getOurIngredients } from "../../components/app/app.jsx";

export const GET_INGREDIENTS = "GET_INGREDIENTS";
export const GET_INGREDIENTS_FAILED = "GET_INGREDIENTS_FAILED";
export const GET_INGREDIENTS_SUCCESS = "GET_INGREDIENTS_SUCCESS";

export const CURRENT_INGREDIENT = 'CURRENT_INGREDIENT';

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
    }
}

// Текущий кликнутый ингредиент
export const currentIngredient = (ingredient) => ({
    type: CURRENT_INGREDIENT,
    currentIngredient: ingredient
})
