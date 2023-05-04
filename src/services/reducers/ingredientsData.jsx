import {
    GET_INGREDIENTS, GET_INGREDIENTS_FAILED, GET_INGREDIENTS_SUCCESS,
    SORT_INGREDIENTS, SELECT_INGREDIENT, ADD_INGREDIENT,
    DELETE_INGREDIENT, DELETE_SELECTED_INGREDIENT, DELETE_ALL_INGREDIENTS
} from '../actions/ingredientsData.jsx';

const initialState = {
    ingredients: [], // список всех полученных ингредиентов
    selectedIngredient: null,
    selectedIngredients: [], 
    ingredientsRequest: false,
    ingredientsFailed: false
}

export const ingredientsDataReducer = (state = initialState, action) => {
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
        // case SORT_INGREDIENTS: {
        //     return {
        //         ...state,

        //     }

        // }
        case SELECT_INGREDIENT: {
            return {
                ...state,
                selectedIngredient: action.payload
            }

        }
        // case ADD_INGREDIENT: {
        //     return {
        //         ...state,

        //     }

        // }
        // case DELETE_INGREDIENT: {
        //     return {
        //         ...state,

        //     }

        // }
        // case DELETE_SELECTED_INGREDIENT: {
        //     return {
        //         ...state,

        //     }

        // }
        case DELETE_ALL_INGREDIENTS: {
            return {
                ...state,
                ingredients: [],
            }

        }
        default: {
            return state;
        }
    }
}