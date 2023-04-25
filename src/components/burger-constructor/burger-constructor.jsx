// Сохраняйте данные в Context и подпишите на него компонент BurgerConstructor
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import bcs from './burger-constructor.module.css';
import { SelectedIngredientContext } from '../../context/selectedIngredientContext';
import { useContext, useMemo } from 'react';
import { orderData } from '../../utils/data';

function BurgerConstructor({ setIsOrderDetailsPopupOpen, setOrderData, setSelectedIngredient }) {

    const selectedIngredients = useContext(SelectedIngredientContext);

    // редюсер для подсчета стоимости нашей корзины с ингредиентами
    const cart = useMemo(() => selectedIngredients.reduce((accumulator, current) =>
        current.type === 'bun' ? accumulator + (current.price * 2) : accumulator + current.price
        , 0)
        , [selectedIngredients]);

    const ingredientZoneTemplate = ({ _id, name, price, image }) => {
        return (
            // в дальнейшем мб придется заментиь id в key на index, чтобы учесть тот случай, когда ингредиент дублируется 
            <div className={bcs.orderItemBox} key={_id}>
                <DragIcon type="primary" />
                <div className={bcs.boxForMain}>
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
        setIsOrderDetailsPopupOpen(true);
    }

    return (

        <div className={`${bcs.constructorBox}`}>
            <div className={`${bcs.mainBox} pr-4 pl-4 mt-25`}>

                {/* только верхняяя булка */}
                <div className={bcs.ingredientsBox}>
                    {
                        selectedIngredients.length > 0 ? <ConstructorElement
                            type='top'
                            isLocked={true}
                            text='Флюоресцентная булка R2-D3 (верх)'
                            price='988'
                            thumbnail='https://code.s3.yandex.net/react/code/bun-01.png' />
                            :
                            <span className="text text_type_main-medium pt-8 pb-15 pr-15">Выберите булку, для начала</span>
                    }
                </div>

                {/* внутринности булки */}
                <div className={`${bcs.ingredientsBox} ${bcs.boxForScroll}`}>
                    {selectedIngredients.map((item) => (item.price > 1255 || item.type === 'sauce') && ingredientZoneTemplate(item))}
                </div>

                {/* только нижняя булка */}
                <div className={bcs.ingredientsBox}>
                    {
                        selectedIngredients.length > 0 && <ConstructorElement
                            type='bottom'
                            isLocked={true}
                            text='Флюоресцентная булка R2-D3 (низ)'
                            price='988'
                            thumbnail='https://code.s3.yandex.net/react/code/bun-01.png' />
                    }
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
        </div >
    )
}

export default BurgerConstructor;