import bis from './cardZoneTemplate.module.css';
import { useSelector, useDispatch } from "react-redux";
import { CurrencyIcon, Counter } from "@ya.praktikum/react-developer-burger-ui-components";
import { changeIngredientsPopupState } from '../../services/actions/popup';
import PropTypes from 'prop-types';
import { useDrag } from 'react-dnd';
import { currentIngredient } from '../../services/actions/ingredientsData.jsx';
import { useEffect } from 'react';

export const CardZoneTemplate = ({ card }) => {

    const ingredientsInConstructor = useSelector(store => store.burgerConstructor.ingredientsInConstructor);
    const buns = useSelector(store => store.burgerConstructor.buns);
    const bunsCount = useSelector(store => store.burgerConstructor.bunsCount);
    const dispatch = useDispatch();

    //просмотр деталей ингредиента по нажатию
    const handleIngredientClick = (evt) => {
        dispatch(currentIngredient(card));
        dispatch(changeIngredientsPopupState(true));
    }

    const [{ isDrag }, dragRef] = useDrag({
        type: card.type,
        item: { _id: card._id },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    });

    const ingredientCountHandler = useEffect(() => {
        let counter = 0;
        ingredientsInConstructor.forEach((item) => {
            console.log(item);

            if (card._id === item.card._id) { counter += 1; }
            if (buns !== null && card._id === buns._id) { return bunsCount; } else { return counter }
        })
    }, [ingredientsInConstructor]);

    return (
        <div className={bis.card} ref={dragRef} data-id={card._id} key={card._id} onClick={handleIngredientClick} >
            <img loading='lazy' className={bis.img} src={card.image} alt={card.name} />
            <div className={bis.description}>
                <div className={bis.info}>
                    <p className="text text_type_main-medium">{card.price}</p>
                    <CurrencyIcon type="primary" />
                </div>
                <h3 className={bis.cardName}>{card.name}</h3>
            </div>
            <Counter count={ingredientCountHandler} size="default" extraClass="m-1" />
        </div>
    )
}

CardZoneTemplate.propTypes = {
    card: PropTypes.object.isRequired
}
