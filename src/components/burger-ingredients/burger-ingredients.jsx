import  React, { useState} from 'react';

import { Tab, CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import bis from './burger-ingredients.module.css';

import { data } from '../../utils/data.jsx';
console.log(data);



export default function BurgerIngredient() {

    //const [current, setCurrent] = React.useState('bun');
    // console.log(<Tab key={current} value='bun' active={current === 'bun'} onClick={setCurrent}/>);
    return (
        <div className={bis.mainBox}>
            <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
            <div className='' style={{ display: 'flex' }}>

                {/* <Tab /> */}
                {/* // value='bun' key={current === 'bun'} onClick={setCurrent}>
                //     Булки */}
                
                {/* <Tab value="two" active={current === 'two'} onClick={setCurrent}>
                    Соусы
                </Tab>
                <Tab value="three" active={current === 'three'} onClick={setCurrent}>
                    Начинки
                </Tab> */}
            </div>

            <div className={bis.inside}>

                <h2 className='text text_type_main-medium mb-6'>Булки</h2>
                <div className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='breads'>

                    <div className={bis.card}>    {/*в эту коробку будем встаялть нашу карточку ингредиента */}
                        <img className={bis.img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        <div className={bis.description}>
                            <div className={bis.info}>
                                <p className="text text_type_main-medium">20</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <h3 className={bis.cardName}>Краторная булка N-200i</h3>
                        </div>
                        <Counter count={1} size="default" extraClass="m-1" />
                    </div>

                    <div className={bis.card}>    {/*в эту коробку будем встаялть нашу карточку ингредиента */}
                        <img className={bis.img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        <div className={bis.description}>
                            <div className={bis.info}>
                                <p className="text text_type_main-medium">20</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <h3 className={bis.cardName}>Краторная булка N-200i</h3>
                        </div>
                        <Counter count={1} size="default" extraClass="m-1" />
                    </div>

                </div>

                <h2 className='text text_type_main-medium mb-6'>Соусы</h2>
                <div className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='breads'>

                    <div className={bis.card}>    {/*в эту коробку будем встаялть нашу карточку ингредиента */}
                        <img className={bis.img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        <div className={bis.description}>
                            <div className={bis.info}>
                                <p className="text text_type_main-medium">20</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <h3 className={bis.cardName}>Краторная булка N-200i</h3>
                        </div>
                        <Counter count={1} size="default" extraClass="m-1" />
                    </div>

                    <div className={bis.card}>    {/*в эту коробку будем встаялть нашу карточку ингредиента */}
                        <img className={bis.img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        <div className={bis.description}>
                            <div className={bis.info}>
                                <p className="text text_type_main-medium">20</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <h3 className={bis.cardName}>Краторная булка N-200i</h3>
                        </div>
                        <Counter count={1} size="default" extraClass="m-1" />
                    </div>

                </div>

                <h2 className='text text_type_main-medium mb-6'>Начинки</h2>
                <div className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='breads'>

                    <div className={bis.card}>    {/*в эту коробку будем встаялть нашу карточку ингредиента */}
                        <img className={bis.img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        <div className={bis.description}>
                            <div className={bis.info}>
                                <p className="text text_type_digits-medium">20</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <h3 className={bis.cardName}>Краторная булка N-200i</h3>
                        </div>
                        <Counter count={1} size="default" extraClass="m-1" />
                    </div>

                    <div className={bis.card}>    {/*в эту коробку будем встаялть нашу карточку ингредиента */}
                        <img className={bis.img} src="https://code.s3.yandex.net/react/code/bun-02.png" alt="" />
                        <div className={bis.description}>
                            <div className={bis.info}>
                                <p className="text text_type_digits-medium">20</p>
                                <CurrencyIcon type="primary" />
                            </div>
                            <h3 className={bis.cardName}>Краторная булка N-200i</h3>
                        </div>
                        <Counter count={1} size="default" extraClass="m-1" className={bis.counter} />
                    </div>

                </div>
            </div>
        </div>

    )
}