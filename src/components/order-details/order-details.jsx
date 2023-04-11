// компонент OrderDetails содержит тестовые данные и использует UI-компоненты из библиотеки: иконки,
// типографику

import od from './order-details.module.css';
import yeahFinallyImg from '../../images/yeah-finally.gif';
import PropTypes from 'prop-types';
import { orderData } from '../../utils/data.jsx';


export default function OrderDetails({ orderData }) {
    return (
        <div className={od.box}>
            <span className="text text_type_digits-large pt-10">{orderData.orderNum}</span>
            <p className="pt-8 pb-15 text text_type_main-medium">идентификатор заказа</p>

            <img className="pb-15" src={yeahFinallyImg} alt="галочка" />

            <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p>
            <p className="text text_type_main-default text_color_inactive pb-15">Дождитесь готовности на орбитальной станции</p>
        </div>
    )
};

OrderDetails.propTypes = {
    orderData: PropTypes.shape({
        isOrderCooking: PropTypes.bool.isRequired,
        orderNum: PropTypes.string.isRequired,
    }).isRequired,
}