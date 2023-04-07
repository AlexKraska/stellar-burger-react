// import React, { useState } from 'react';

import { CurrencyIcon, Counter } from '@ya.praktikum/react-developer-burger-ui-components';

import { useState } from 'react';

import bis from './burger-ingredients.module.css';

export default function BurgerIngredients({ setIsIngredientsPopupOpen, setChosenIngredient, ingredientsData }) {

    const handleIngredientClick = (evt) => {
        const id = evt.currentTarget.dataset.id;
        const foundIngredient = ingredientsData.find(ingredient => ingredient._id === id);
        setChosenIngredient(foundIngredient);
        setIsIngredientsPopupOpen(true);
    }

    {/* заготовка-шаблон для карточек ингредиентов */ }
    const cardZoneTemplate = ({ _id, name, price, image }) => {
        return (
            <div className={bis.card} data-id={_id} key={_id} onClick={handleIngredientClick}>
                <img className={bis.img} src={image} alt={name} />
                <div className={bis.description}>
                    <div className={bis.info}>
                        <p className="text text_type_main-medium">{price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <h3 className={bis.cardName}>{name}</h3>
                </div>
                <Counter count={1} size="default" extraClass="m-1" />
            </div>
        )
    }

    const [current, setCurrent] = useState('bun');

    return (
        <div className={bis.mainBox}>
            <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
            <nav className='text text_type_main-small'>
                <ul className={bis.tabs}>
                    <li className={bis.tabItem} value="bun" active='true' onClick={setCurrent}>
                        Булки
                    </li>
                    <li className={bis.tabItem} value="sause" active='false' onClick={setCurrent}>
                        Соусы
                    </li>
                    <li className={bis.tabItem} value="main" active='false' onClick={setCurrent}>
                        Начинки
                    </li>
                </ul>

            </nav>

            <div className={bis.inside}>

                <h2 className='text text_type_main-medium mb-6'>Булки</h2>
                <div className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='bun'>
                    {ingredientsData.map((item) => item.type === 'bun' && cardZoneTemplate(item))}
                </div>

                <h2 className='text text_type_main-medium mb-6'>Соусы</h2>
                <div className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='sauce'>
                    {ingredientsData.map((item) => item.type === 'sauce' && cardZoneTemplate(item))}
                </div>

                <h2 className='text text_type_main-medium mb-6'>Начинки</h2>
                <div className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='main'>
                    {ingredientsData.map((item) => item.type === 'main' && cardZoneTemplate(item))}
                </div>
            </div>
        </div>

    )
}