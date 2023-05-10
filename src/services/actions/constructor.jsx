import generateKey from "../../utils/generateKey/generateKey.jsx";

export const ADD_INGREDIENT_IN_CONSTRUCTOR = 'ADD_INGREDIENT_IN_CONSTRUCTOR';
export const DELETE_INGREDIENT_IN_CONSTRUCTOR = 'DELETE_INGREDIENT_IN_CONSTRUCTOR';
export const MOVE_INGREDIENT_IN_CONSTRUCTOR = 'MOVE_INGREDIENT_IN_CONSTRUCTOR';
export const ADD_BUN = 'ADD_BUN';
export const DELETE_BUN = 'DELETE_BUN';
export const CLEAR_CONSTRUCTOR = 'CLEAR_CONSTRUCTOR';

export const addIngredientInConstructor = (card) => ({
    type: ADD_INGREDIENT_IN_CONSTRUCTOR,
    card: card,
    key: generateKey(),
})
export const deleteIngredientFromConstructor = (key) => ({
    type: DELETE_INGREDIENT_IN_CONSTRUCTOR,
    key,
})
export const sortIngredientsInConstructor = (sortedArray) => ({
    type: MOVE_INGREDIENT_IN_CONSTRUCTOR,
    ingredients: sortedArray,
})
export const addBun = ( bunObject ) => ({
    type: ADD_BUN,
    bun: bunObject,
})
export const deleteBun = () => ({
    type: DELETE_BUN,
})
export const clearConstructor = () => ({
    type: CLEAR_CONSTRUCTOR,
})
