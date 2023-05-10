import od from './order-details.module.css';
import yeahFinallyImg from '../../images/yeah-finally.gif';
import { useSelector } from "react-redux";

export default function OrderDetails() {

    const orderDetails = useSelector(store => store.orderData.orderDetails);
    console.log(OrderDetails);

    return (
        <div className={od.box}>
            <span className="text text_type_digits-large pt-10">{orderDetails}</span>
            <p className="pt-8 pb-15 text text_type_main-medium">идентификатор заказа</p>

            <img className="pb-15" src={yeahFinallyImg} alt="галочка" />

            {orderDetails ? <p className="text text_type_main-default pb-2">Ваш заказ начали готовить</p> : <p className="text text_type_main-default pb-2">Упсс... Кажется ваш заказ съел гигантский пришелец</p>}

            {orderDetails && <p className="text text_type_main-default text_color_inactive pb-15">Дождитесь готовности на орбитальной станции</p>}
        </div>
    )
};