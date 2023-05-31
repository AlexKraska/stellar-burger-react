import idd from './ingredient-details.module.css';
import { useEffect, useMemo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, useLocation } from 'react-router-dom';

export default function IngredientDetails() {
    const dispatch = useDispatch();
    const location = useLocation();
    const { id } = useParams();

    const ourIngredients = (store) => store.ingredientsData.ingredients;
    const ingredients = useSelector(ourIngredients);

    const curIng = (store) => store.ingredientsData.currentIngredient;
    const currentIngredient = useSelector(curIng);

    const state = location.state && location.state.background;

    const curIngredient = useMemo(() => ingredients.find(item => item._id === id),
        [ingredients, id],
    );

    return (
        <>
            {
                curIngredient ? (
                    <div className={idd.box}>
                        {/* {!state && <h1 className={style.title}>Детали ингредиента</h1>} */}
                        <img src={curIngredient && curIngredient.image} alt={curIngredient.name} className={idd.image} />
                        <h3 className="text text_type_main-medium pt-4 pb-8">{curIngredient && curIngredient.name}</h3>
                        <ul className={`${idd.details} pt-8`}>
                            <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                                <span>Калории,ккал</span>
                                {curIngredient.calories}
                            </li>
                            <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                                <span>Белки, г</span>
                                {curIngredient.proteins}
                            </li>
                            <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                                <span>Жиры, г</span>
                                {curIngredient.fat}
                            </li>
                            <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                                <span>Углеводы, г</span>
                                {curIngredient.carbohydrates}
                            </li>
                        </ul>
                    </div>
                ) : (
                    <h3 className={idd.title}>Упс.. Такой ингредиент не найден</h3>
                )
            }
        </>
    )
}
