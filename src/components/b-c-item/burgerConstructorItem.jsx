import {
    ConstructorElement, DragIcon
} from "@ya.praktikum/react-developer-burger-ui-components";
import { useDrag, useDrop } from 'react-dnd';
import style from './burgerConstructorItem.module.css';
import { useRef } from "react";
import PropTypes from 'prop-types';

const ITEM = 'item';

const BurgerConstructorItem = ({ card, index, handleClose, moveIngredient }) => {
    const ref = useRef(null);
    const [{ isDrag }, itemDrag] = useDrag({
        type: ITEM,
        item: () => {
            return {
                id: card.key,
                index
            }
        },
        collect: monitor => ({
            isDrag: monitor.isDragging()
        })
    })
    const [collectedProps, itemDrop] = useDrop({
        accept: ITEM,
        hover: (item, monitor) => {
            const dragIndex = item.index;
            const hoverIndex = index;

            const hoverBoundingRect = ref.current?.getBoundingClientRect();
            const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

            const clientOffset = monitor.getClientOffset();
            const hoverClientY = clientOffset.y - hoverBoundingRect.top;

            if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
                return;
            }
            if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
                return;
            }
            moveIngredient(dragIndex, hoverIndex);
            item.index = hoverIndex;
        }
    })
    const opacityHandler = isDrag ? 0 : 1;
    itemDrag(itemDrop(ref));

    return (

        <div className={style.list_item} style={{ ...style, opacityHandler }} ref={ref} >
            <DragIcon type="primary" />
            <ConstructorElement
                text={card.name}
                price={card.price}
                thumbnail={card.image}
                handleClose={() => handleClose(card.key)}
            />
        </div>
    )
}

BurgerConstructorItem.propTypes = {
    card: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    handleClose: PropTypes.func.isRequired,
    moveIngredient: PropTypes.func.isRequired
}

export default BurgerConstructorItem;
