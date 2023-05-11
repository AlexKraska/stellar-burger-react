import {
    ADD_INGREDIENT_IN_CONSTRUCTOR, DELETE_INGREDIENT_IN_CONSTRUCTOR,
    MOVE_INGREDIENT_IN_CONSTRUCTOR, ADD_BUN, DELETE_BUN, CLEAR_CONSTRUCTOR, ADD_BUN_PRICE
} from '../actions/constructor.jsx';

const defaultState = {
    buns: null,
    bunsCount: 2,
    ingredientsInConstructor: [],
    totalPrice: 0,
}

export const constructorReducer = (state = defaultState, action) => {
    switch (action.type) {
        case ADD_INGREDIENT_IN_CONSTRUCTOR: {
            return {
                ...state,
                ingredientsInConstructor: [
                    ...state.ingredientsInConstructor,
                    {
                    card: action.card,
                    key: action.key,
                    }
                ]
            }
        }
        case DELETE_INGREDIENT_IN_CONSTRUCTOR: {
            return {
                ...state,
                ingredientsInConstructor: state.ingredientsInConstructor.filter(el => el.key !== action.key)
            }
        }
        case MOVE_INGREDIENT_IN_CONSTRUCTOR: {
            return {
                ...state,
                ingredientsInConstructor: [
                    ...action.ingredients
                ]
            }
        }
        case ADD_BUN: {
            return {
                ...state,
                buns: { ...action.bun }
            }
        }
        case DELETE_BUN: {
            return {
                ...state,
                buns: null
            }
        }
        case CLEAR_CONSTRUCTOR: {
            return {
                ...state,
                buns: null,
                ingredientsInConstructor: []
            }
        }
        default: {
            return state
        }
    }
}

