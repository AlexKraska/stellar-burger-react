import bis from './cardZoneTemplate.module.css';
import { useSelector, useDispatch } from "react-redux";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { changeIngredientsPopupState } from '../../services/actions/popup';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { currentIngredient } from '../../services/actions/ingredientsData.jsx';

export const CardZoneTemplate = ({ card }, { id }) => {
    const { _id, name, price, image } = card;

    const initialIngredients = useSelector(state => state.ingredientsData.ingredients);

    const ingredientsInConstructor = useSelector(store => store.burgerConstructor.ingredientsInConstructor);
    const buns = useSelector(store => store.burgerConstructor.buns);
    const bunsCount = useSelector(store => store.burgerConstructor.bunsCount);
    const dispatch = useDispatch();

    //просмотр деталей ингредиента по двойному клику
    const handleIngredientDoubleClick = (evt) => {
        const id = evt.currentTarget.dataset.id;
        const foundIngredient = initialIngredients.find(ingredient => ingredient._id === id);
        dispatch(currentIngredient(foundIngredient));
        dispatch(changeIngredientsPopupState(true));
    };

    const handleIngredientClick = (evt) => {
        const id = evt.currentTarget.dataset.id;
        const foundIngredient = initialIngredients.find(ingredient => ingredient._id === id);
        dispatch(currentIngredient(foundIngredient));
    }

    const [{ isDrag }, dragRef] = useDrag({
        type: card.type,
        item: { id },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    function getIngredientCount() {
        let counter = 0;
        ingredientsInConstructor.forEach((item) => {

            if (id === item._id) {
                counter += 1;
            }
            if (buns !== null && card._id === buns._id) {
                return bunsCount;
            } else {
                return counter;
            }
        })
    }

    return (
        <div className={bis.card} ref={dragRef} data-id={_id} key={_id} onClick={handleIngredientClick} onDoubleClick={handleIngredientDoubleClick}>
            <img loading='lazy' className={bis.img} src={image} alt={name} />
            <div className={bis.description}>
                <div className={bis.info}>
                    <p className="text text_type_main-medium">{price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <h3 className={bis.cardName}>{name}</h3>
            </div>
            <Counter count={getIngredientCount()} size="default" extraClass="m-1" />
        </div>
    )
}

CardZoneTemplate.propTypes = {
    card: PropTypes.object.isRequired
}
