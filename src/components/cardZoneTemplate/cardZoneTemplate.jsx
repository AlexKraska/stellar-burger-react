import bis from './cardZoneTemplate.module.css';
import { useSelector, useDispatch } from "react-redux";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { selectIngredient } from '../../services/actions/ingredientsData';

export const CardZoneTemplate = ({ card }) => {
    const { _id, name, price, image } = card;

    const selectedIngredients = useSelector(state => state.ingredientsData.selectedIngredients);
    const initialIngredients = useSelector(state => state.ingredientsData.ingredients);
    const dispatch = useDispatch();

    //просмотр деталей ингредиента по двойному клику
    const handleIngredientDoubleClick = (evt) => {
        const id = evt.currentTarget.dataset.id;
        const foundIngredient = initialIngredients.find(ingredient => ingredient._id === id);
        dispatch(selectIngredient(foundIngredient));
        // dispatch(IngredientsPopupOpen(true));
    }

    let counter = 0;
    selectedIngredients.forEach((ingredient) => ingredient.name === name && (ingredient.type === 'bun' ? counter += 2 : counter += 1));

    return (
        <div className={bis.card} data-id={_id} key={_id} onDoubleClick={handleIngredientDoubleClick}>
            <img loading='lazy' className={bis.img} src={image} alt={name} />
            <div className={bis.description}>
                <div className={bis.info}>
                    <p className="text text_type_main-medium">{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <h3 className={bis.cardName}>{name}</h3>
            </div>
            <Counter count={counter} size="default" extraClass="m-1" />
        </div>
    )
}