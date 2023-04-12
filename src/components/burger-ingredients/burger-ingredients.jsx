import { CurrencyIcon, Counter, Tab } from '@ya.praktikum/react-developer-burger-ui-components';

import { useState } from 'react';

import bis from './burger-ingredients.module.css';

import PropTypes from 'prop-types';

import { ingredientType } from '../../utils/type.js';

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

                <div className={bis.tabBox}>
                    <a href="#bun" className={bis.a}>
                        <Tab value="bun" active={current === 'bun'} onClick={setCurrent}>Булки</Tab>
                    </a>

                    <a href="#sauce" className={bis.a}>
                        <Tab value="sause" active={current === 'sause'} onClick={setCurrent}>Соусы</Tab>
                    </a>

                    <a href="#main" className={bis.a}>
                        <Tab value="main" active={current === 'main'} onClick={setCurrent}>Начинки</Tab>
                    </a>
                </div>

            </nav>

            <div className={bis.inside}>

                <h2 className='text text_type_main-medium mt-10' id='bun'>Булки</h2>
                <div className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='bun'>
                    {ingredientsData.map((item) => item.type === 'bun' && cardZoneTemplate(item))}
                </div>

                <h2 className='text text_type_main-medium mb-6' id='sauce'>Соусы</h2>
                <div className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='sauce'>
                    {ingredientsData.map((item) => item.type === 'sauce' && cardZoneTemplate(item))}
                </div>

                <h2 className='text text_type_main-medium mb-6' id='main'>Начинки</h2>
                <div className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='main'>
                    {ingredientsData.map((item) => item.type === 'main' && cardZoneTemplate(item))}
                </div>
            </div>
        </div>

    )
}

BurgerIngredients.propTypes = {
    setIsIngredientsPopupOpen: PropTypes.func.isRequired,
    setChosenIngredient: PropTypes.func.isRequired,

    ingredientsData: PropTypes.arrayOf(PropTypes.shape( ingredientType )).isRequired,
};