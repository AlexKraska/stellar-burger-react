// import {useMemo} from 'react';
import { ConstructorElement, Button, CurrencyIcon, DragIcon } from '@ya.praktikum/react-developer-burger-ui-components';
//import { composeData } from '../../utils/data';
import bcs from './burger-constructor.module.css';
// import { orderedIngredientsId } from '../../utils/data.jsx';

function BurgerConstructor({ setIsOrderDetailsPopupOpen, ingredientsData }) {

    let img = 'https://code.s3.yandex.net/react/code/bun-02-mobile.png';

    // в дальнейшем из этого будет создаваться корзина
    // const burgerCollection = useMemo(() => {
    //     const burger = [];
    //     orderedIngredientsId.forEach(id => {
    //         ingredientsData.forEach((ingredien) => {
    //             ingredient._id === id && burger.push(ingredient)
    //         })
    //     })
    //     return burger;
    // }, [ingredientsData])

    // const total = burgerCollection.reduce((acc, current) => acc + current.price, 0)

    // просмотра деталей инредиента
    const handleOrderButtonClick = () => {
        setIsOrderDetailsPopupOpen(true)
    }

    return (

        <div className={`${bcs.constructorBox} pt-25`}>
      
            <div className={`${bcs.mainBox} pr-4 pl-4`}>
                <div style={{maxWidth: '510px'}}>
                    <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={img} />
                </div>
                
                <div className={bcs.orderItemBox}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                    text="Краторная булка N-200i"
                    price={555}
                    thumbnail={img} />
                </div>

                <div className={bcs.orderItemBox}>
                    <DragIcon type="primary" />
                    <ConstructorElement
                    text="Краторная булка N-200i"
                    price={555}
                    thumbnail={img} />
                </div>

                <div style={{maxWidth: '510px'}}>
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={img} />
                </div>
            </div>
            <div className={`${bcs.total} pb-10`}>
                <div style={{ display: 'flex', gap: '10px' }}>
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