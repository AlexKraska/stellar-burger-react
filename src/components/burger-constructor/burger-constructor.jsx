
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';

import bcs from './burger-constructor.module.css';

function BurgerConstructor({ setIsOrderDetailsPopupOpen, ingredientsData }) {

    const ingredientZoneTemplate = ({ _id, name, price, image }) => {
        return (
            <div className={bcs.orderItemBox} key={_id}>
                <DragIcon type="primary" />
                <div className={bcs.maxWidth}>
                    <ConstructorElement
                        text={name}
                        price={price}
                        thumbnail={image} />
                </div>
            </div>
        )
    }

    // просмотра деталей инредиента
    const handleOrderButtonClick = () => {
        setIsOrderDetailsPopupOpen(true)
    }

    return (

        <div className={`${bcs.constructorBox} pt-25`}>
            <div className={`${bcs.mainBox} pr-4 pl-4`}>

                {/* только верхняяя булка */}
                <div className={bcs.ingredientsBox}>
                    <div className={bcs.orderItemBox}>
                        
                        <div className={bcs.maxWidth}>
                            <ConstructorElement
                                type='top'
                                text='Флюоресцентная булка R2-D3'
                                price='988'
                                thumbnail='https://code.s3.yandex.net/react/code/bun-01.png' />
                        </div>
                    </div>
                </div>

                {/* внутринности булки */}
                <div className={bcs.ingredientsBox}>
                    {ingredientsData.map((item) => item.price > 1000 && ingredientZoneTemplate(item))}
                </div>

                {/* только нижняя булка */}
                <div className={bcs.ingredientsBox}>
                    <div className={bcs.orderItemBox}>
                        
                        <div className={bcs.maxWidth}>
                            <ConstructorElement
                                type='bottom'
                                text='Флюоресцентная булка R2-D3'
                                price='988'
                                thumbnail='https://code.s3.yandex.net/react/code/bun-01.png' />
                        </div>
                    </div>
                </div>

            </div>

            <div className={`${bcs.total} pb-10`}>
                <div className={bcs.totalInside}>
                    <p className="text text_type_digits-medium">610</p>
                    <div className={bcs.costyl}>
                        <CurrencyIcon type="primary" />
                    </div>

                </div>
                <Button onClick={handleOrderButtonClick} htmlType="button" type="primary" size="medium">Оформить заказ</Button>
            </div>
        </div>

    )
}

export default BurgerConstructor;