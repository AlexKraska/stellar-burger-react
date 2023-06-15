import {
    GET_INGREDIENTS, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS, CURRENT_INGREDIENT
} from '../actions/ingredientsData.jsx';

const defaultState = {
    ingredients: [], // список всех полученных ингредиентов
    currentIngredient: null,
    selectedIngredients: [],
    ingredientsRequest: false,
    ingredientsFailed: false
}

export const ingredientsDataReducer = (state = defaultState, action) => {
    switch (action.type) {
        case GET_INGREDIENTS: {
            return {
                ...state,
                ingredientsRequest: true,
                ingredientsFailed: false,
            }

        } case GET_INGREDIENTS_FAILED: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredientsFailed: true,
            }

        }
        case GET_INGREDIENTS_SUCCESS: {
            return {
                ...state,
                ingredientsRequest: false,
                ingredients: action.payload,
            }

        }
        case CURRENT_INGREDIENT: {
            return {
                ...state,
                currentIngredient: action.currentIngredient,
            }
        }
        default: {
            return state;
        }
    }
}