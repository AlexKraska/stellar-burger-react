import idd from './ingredient-details.module.css';
import { useSelector } from 'react-redux';

export default function IngredientDetails() {

    const selectedIngredient = useSelector(state => state.ingredientsData.selectedIngredient);

    return (
        <div className={idd.box}>
            <img src={selectedIngredient && selectedIngredient.image} alt={selectedIngredient.name} className={idd.image} />
            <h3 className="text text_type_main-medium pt-4 pb-8">{selectedIngredient && selectedIngredient.name}</h3>
            <ul className={`${idd.details} pt-8`}>
                <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                    <span>Калории,ккал</span>
                    {selectedIngredient.calories}
                </li>
                <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                    <span>Белки, г</span>
                    {selectedIngredient.proteins}
                </li>
                <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                    <span>Жиры, г</span>
                    {selectedIngredient.fat}
                </li>
                <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                    <span>Углеводы, г</span>
                    {selectedIngredient.carbohydrates}
                </li>
            </ul>
        </div>
    )
};