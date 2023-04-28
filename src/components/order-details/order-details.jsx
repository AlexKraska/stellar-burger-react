// компонент OrderDetails содержит тестовые данные и использует UI-компоненты из библиотеки: иконки,
// типографику

import od from './order-details.module.css';
import yeahFinallyImg from '../../images/yeah-finally.gif';
import PropTypes from 'prop-types';

import { OrderContext } from '../../context/orderContext.jsx';
import { useContext } from 'react';

export default function OrderDetails() {

const orderData = useContext(OrderContext);

    console.log(orderData);

    return (
        <div className={od.box}>
            <span className="text text_type_digits-large pt-10">{orderData.order.number}</span>
            <p className="pt-8 pb-15 text text_type_main-medium">идентификатор заказа</p>

            <img className="pb-15" src={yeahFinallyImg} alt="галочка" />

            {orderData.success ? <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p> : 'Упсс... Кажется ваш заказ съел гигантский пришелец'}
            
            {orderData.success && <p className="text text_type_main-default text_color_inactive pb-15">Дождитесь готовности на орбитальной станции</p>}
        </div>
    )
};