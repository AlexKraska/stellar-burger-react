import { ConstructorElement } from '@ya.praktikum/react-developer-burger-ui-components';
import bcs from './burger-constructor.module.css';
import BurgerConstructorItem from '../b-c-item/burgerConstructorItem.jsx';
import { useDispatch, useSelector } from 'react-redux';
import { useDrop } from 'react-dnd';
import {
    addIngredientInConstructor, deleteIngredientFromConstructor,
    sortIngredientsInConstructor, addBun, deleteBun
} from '../../services/actions/constructor.jsx';
import { Order } from '../order/order.jsx';
import { BUN, SAUCE, MAIN } from '../../utils/constants.jsx';

function BurgerConstructor() {

    const dispatch = useDispatch();

    const ingredients = useSelector(store => store.ingredientsData.ingredients);
    const ingredientsInConstructor = useSelector(store => store.burgerConstructor.ingredientsInConstructor);
    const buns = useSelector(store => store.burgerConstructor.buns);

    const onDropHandler = (ingredientId) => {
        const constructorItem = ingredients.find(el => el._id === ingredientId);
        if (ingredientType === BUN) {
            dispatch(addBun(constructorItem))
        } else {
            dispatch(addIngredientInConstructor(constructorItem));
        }
    }

    const [{ ingredientType }, constructorDrag] = useDrop({
        accept: [BUN, SAUCE, MAIN],
        drop(item) {
            onDropHandler(item._id);
        },
        collect: monitor => ({
            ingredientType: monitor.getItemType()
        })
    })

    const deleteIngredient = (key) => {
        if (key !== undefined) {
            dispatch(deleteIngredientFromConstructor(key))
        } else {
            dispatch(deleteBun())
        }
    }

    const moveIngredient = (dragIndex, hoverIndex) => {
        const sortedIngredientsArr = [...ingredientsInConstructor];
        const dragIndexItem = sortedIngredientsArr[dragIndex];
        sortedIngredientsArr.splice(dragIndex, 1);
        sortedIngredientsArr.splice(hoverIndex, 0, dragIndexItem);

        dispatch(sortIngredientsInConstructor(sortedIngredientsArr))
    }

    return (
        <div className={bcs.constructorBox} ref={constructorDrag}>
            <div className={`${bcs.mainBox} pr-4 pl-4 mt-25`}>
                <div className={bcs.ingredientsBox}>
                    {
                        buns !== null ? <ConstructorElement
                            type='top'
                            isLocked={true}
                            text={buns.name + ' (верх)'}
                            price={buns.price}
                            thumbnail={buns.image}
                            handleClose={() => deleteIngredient()} />
                            :
                            <span className={`${bcs.noIngredientBorder} text text_type_main-medium pt-8 pb-15 pr-15`}>Выберите булку, pleeeeease !</span>
                    }
                </div>

                {
                    ingredientsInConstructor.length !== 0 ? <div className={`${bcs.ingredientsBox} ${bcs.boxForScroll}`}>
                        {ingredientsInConstructor.map((el, index) => {
            
                            return (
                                <BurgerConstructorItem
                                    key={el.key}
                                    card={el}
                                    handleClose={() => deleteIngredient(el.key)}
                                    moveIngredient={moveIngredient}
                                    index={index}
                                />
                            );
                        })}
                    </div> : <span className={`${bcs.noIngredientBorder} text text_type_main-medium pt-8 pb-15 pr-15`}>Выберите ингредиенты</span>
                }

                <div className={bcs.ingredientsBox}>
                    {
                        buns !== null ? <ConstructorElement
                            type='bottom'
                            isLocked={true}
                            text={buns.name + ' (верх)'}
                            price={buns.price}
                            thumbnail={buns.image}
                            handleClose={() => deleteIngredient()} />
                            :
                            <span className={`${bcs.noIngredientBorder} text text_type_main-medium pt-8 pb-15 pr-15`}>Выберите булку, pleeeeease !</span>
                    }
                </div>
            </div>
            <Order />
        </div >
    )
}

export default BurgerConstructor;