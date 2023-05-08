import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import bcs from './order.module.css';

import { changeOrderDetailsPopupState } from '../../services/actions/popup.jsx';
import { createOrder } from '../../services/actions/orderData.jsx';


export const Order = () => {
    const dispatch = useDispatch();
    const [bunPrice, setBunPrice] = useState(0);
    const { ingredientsInConstructor, buns, bunsCount } = useSelector(store => store.burgerConstructor);

    // просмотра деталей инредиента
    const handleOrderButtonClick = () => {
        const mainIngredientsArray = ingredientsInConstructor.map(item => {
            return item._id
        })
        const orderArray = [...mainIngredientsArray, buns._id, buns._id];
        dispatch(createOrder(orderArray))
        dispatch(changeOrderDetailsPopupState(true));
    }

    const ingredientsPrice = ingredientsInConstructor.reduce((sum, elem) => {
        return elem.price + sum;
    }, 0);

    useEffect(() => {
        if (buns !== null) {
            return setBunPrice(buns.price * bunsCount);
        } else {
            setBunPrice(0);
        }
    }, [buns])

    return (
        <div className={`${bcs.total} pb-10`}>
            <div className={bcs.totalInside}>
                <p className="text text_type_digits-medium">{ingredientsPrice + bunPrice}</p>
                <div className={bcs.costyl}>
                    <CurrencyIcon type="primary" />
                </div>

            </div>
            <Button onClick={handleOrderButtonClick} htmlType="button" type="primary" size="medium">Оформить заказ</Button>
        </div>
    )
}  