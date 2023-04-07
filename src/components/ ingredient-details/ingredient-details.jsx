import idd from './ingredient-details.module.css';

export default function IngredientDetails( {ingredientsData} ) {
    
    return (
        <div className={idd.box}>
            
            <img src={ingredientsData && ingredientsData.image} alt={ingredientsData.name} className={idd.image} />

            <h3 className="text text_type_main-medium pt-4 pb-8">{ingredientsData && ingredientsData.name}</h3>

            <ul className={`${idd.details} pt-8`}>
                <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                    <span>Калории,ккал</span>
                    {ingredientsData.calories}
                </li>

                <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                    <span>Белки, г</span>
                    {ingredientsData.proteins}
                </li>

                <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                    <span>Жиры, г</span>
                    {ingredientsData.fat}
                </li>

                <li className={`${idd.detail} text text_type_main-default text_color_inactive`}>
                    <span>Углеводы, г</span>
                    {ingredientsData.carbohydrates}
                </li>
            </ul>
        </div>
    )
}