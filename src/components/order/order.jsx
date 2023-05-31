import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from "react";
import { Button, CurrencyIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import os from './order.module.css';

import { changeOrderDetailsPopupState } from '../../services/actions/popup.jsx';
import { createOrder } from '../../services/actions/orderData.jsx';
import { useNavigate } from 'react-router';

export const Order = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [bunPrice, setBunPrice] = useState(0);

    const ingredientsInConstructor = useSelector(store => store.burgerConstructor.ingredientsInConstructor);
    const buns = useSelector(store => store.burgerConstructor.buns);
    const bunsCount = useSelector(store => store.burgerConstructor.bunsCount);

    const loggedInOrNot = (store) => store.userData.isLoggedIn;
    const isLoggedIn = useSelector(loggedInOrNot);

    // просмотра деталей инредиента
    const handleOrderButtonClick = () => {
        if (isLoggedIn) {
            const mainIngredientsArray = ingredientsInConstructor.map(item => {
                return item.card._id
            })
            const orderArray = [...mainIngredientsArray, buns._id, buns._id];

            dispatch(createOrder(orderArray));
            dispatch(changeOrderDetailsPopupState(true));
        } else {
            navigate('/login');
        }
    }

    const ingredientsPrice = ingredientsInConstructor.reduce((sum, elem) => {
        return elem.card.price + sum;
    }, 0);

    useEffect(() => {
        if (buns !== null) {
            return setBunPrice(buns.price * bunsCount);
        } else {
            setBunPrice(0);
        }
    }, [buns]);

    return (
        <div className={`${os.total} pb-10`}>
            <div className={os.totalInside}>
                <p className="text text_type_digits-medium">{ingredientsPrice + bunPrice}</p>
                <div className={os.costyl}>
                    <CurrencyIcon type="primary" />
                </div>

            </div>
            <Button onClick={() => handleOrderButtonClick()} htmlType="button" type="primary" size="medium">Оформить заказ</Button>
        </div>
    )
}  