import idd from './ingredient-details.module.css';
import { useSelector } from 'react-redux';

export default function IngredientDetails() {

    const currentIngredient = useSelector(state => state.ingredientsData.currentIngredient);

    return (
        <div className={idd.box}>
            <img src={currentIngredient && currentIngredient.image} alt={currentIngredient.name} className={idd.image} />
            <h3 className="text text_type_main-medium pt-4 pb-8">{currentIngredient && currentIngredient.name}</h3>
            <ul className={`${idd.details} pt-8`}>
                <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                    <span>Калории,ккал</span>
                    {currentIngredient.calories}
                </li>
                <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                    <span>Белки, г</span>
                    {currentIngredient.proteins}
                </li>
                <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                    <span>Жиры, г</span>
                    {currentIngredient.fat}
                </li>
                <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                    <span>Углеводы, г</span>
                    {currentIngredient.carbohydrates}
                </li>
            </ul>
        </div>
    )
};