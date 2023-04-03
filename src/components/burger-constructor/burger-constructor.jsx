import React from 'react';
import { ConstructorElement, Button, CurrencyIcon } from '@ya.praktikum/react-developer-burger-ui-components';
//import { composeData } from '../../utils/data';
import bcs from './burger-constructor.module.css';

function BurgerConstructor() {

    let img = 'https://code.s3.yandex.net/react/code/bun-02-mobile.png';

    return (

        <div className={`${bcs.constructorBox} pt-25`}>
            {/* <div className="pr-6"></div> */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }} className='pr-4 pl-4'>
                <ConstructorElement
                    type="top"
                    isLocked={true}
                    text="Краторная булка N-200i (верх)"
                    price={200}
                    thumbnail={img}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={img}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={img}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={img}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={img}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={img}
                />
                <ConstructorElement
                    text="Краторная булка N-200i (верх)"
                    price={50}
                    thumbnail={img}
                />
                <ConstructorElement
                    type="bottom"
                    isLocked={true}
                    text="Краторная булка N-200i (низ)"
                    price={200}
                    thumbnail={img}
                />
            </div>
            <div className={`${bcs.total} pb-10`}>
                <div style={{ display: 'flex', gap: '10px' }}>
                    <p className="text text_type_digits-medium">610</p>
                    <div className={bcs.costyl}>
                    <CurrencyIcon type="primary"/>
                    </div>

                </div>
                <Button htmlType="button" type="primary" size="medium">Оформить заказ</Button>
            </div>
        </div>


    )
}

export default BurgerConstructor;