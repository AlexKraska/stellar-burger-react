import { CurrencyIcon, Counter, Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useContext, useEffect, useState } from 'react';

import bis from './burger-ingredients.module.css';

import PropTypes from 'prop-types';
import { ingredientType } from '../../utils/type.js';

import { IngredientsContext } from '../../context/IngredientsContext.jsx';
import { SelectedIngredientContext } from '../../context/selectedIngredientContext.jsx';

import { useInView } from 'react-intersection-observer';

export default function BurgerIngredients({ setIsIngredientsPopupOpen, setSelectedIngredient, setChosenIngredient }) {

    const initialIngredients = useContext(IngredientsContext);
    const selectedIngredients = useContext(SelectedIngredientContext);

    //просмотр деталей ингредиента по двойному клику
    const handleIngredientDoubleClick = (evt) => {
        const id = evt.currentTarget.dataset.id;
        const foundIngredient = initialIngredients.find(ingredient => ingredient._id === id);
        setChosenIngredient(foundIngredient);
        setIsIngredientsPopupOpen(true);
    }

    // const handleIngredientDragNDrop = () => { } функция которая будет нужна для перетаскивания ингредентов

    // заготовка-шаблон для карточек ингредиентов
    const cardZoneTemplate = ({ _id, name, price, image }) => {

        let counter = 0;
        selectedIngredients.forEach((ingredient) => ingredient.name === name && (ingredient.type === 'bun' ? counter += 2 : counter += 1));

        return (
            <div className={bis.card} data-id={_id} key={_id} onDoubleClick={handleIngredientDoubleClick}>
                <img loading='lazy' className={bis.img} src={image} alt={name} />
                <div className={bis.description}>
                    <div className={bis.info}>
                        <p className="text text_type_main-medium">{price}</p>
                        <CurrencyIcon type="primary" />
                    </div>
                    <h3 className={bis.cardName}>{name}</h3>
                </div>
                <Counter count={counter} size="default" extraClass="m-1" />
            </div>
        )
    }

// логика навигации по ингредиентам -----------------------------------
    const [current, setCurrent] = useState('bun');
    const [bun, bunInView, b] = useInView({threshold: 0.5});
    const [sauce, sauceInView, s] = useInView({threshold: 0.5});
    const [main, mainInView, m] = useInView({threshold: 0.2});

    useEffect(() => {
        bunInView && setCurrent('bun');
        sauceInView && setCurrent('sauce');
        mainInView && setCurrent('main');
    }, [bunInView, sauceInView, mainInView])
    // получилось добавить более гибкое перелистывание между секциями блягодаря этой функции
    const onNavLinkClick = (n, entry) => (e) => {
        setCurrent(n);
        entry.target.scrollIntoView({ behavior: 'smooth' });
    }
//----------------------------------------------------------------------
    return (
        <div className={bis.mainBox}>
            <h1 className='text text_type_main-large mt-10 mb-5'>Соберите бургер</h1>
            <nav className='text text_type_main-small'>
                <div className={bis.tabBox}>
                    <a className={bis.a}>
                        <Tab value="bun" active={current === 'bun'} onClick={onNavLinkClick('bun', b)}>Булки</Tab>
                    </a>
                    <a className={bis.a}>
                        <Tab value="sauce" active={current === 'sauce'} onClick={onNavLinkClick('sauce', s)}>Соусы</Tab>
                    </a>
                    <a className={bis.a}>
                        <Tab value="main" active={current === 'main'} onClick={onNavLinkClick('main', m)}>Начинки</Tab>
                    </a>
                </div>
            </nav>
            <div className={bis.inside}>
                <h2 className='text text_type_main-medium mt-10' id='bun'>Булки</h2>
                <div ref={bun} className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='bun'>
                    {initialIngredients.map((item) => item.type === 'bun' && cardZoneTemplate(item))}
                </div>

                <h2 className='text text_type_main-medium mb-6' id='sauce'>Соусы</h2>
                <div ref={sauce} className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='sauce'>
                    {initialIngredients.map((item) => item.type === 'sauce' && cardZoneTemplate(item))}
                </div>

                <h2 className='text text_type_main-medium mb-6' id='main'>Начинки</h2>
                <div ref={main} className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='main'>
                    {initialIngredients.map((item) => item.type === 'main' && cardZoneTemplate(item))}
                </div>
            </div>
        </div>

    )
}

// BurgerIngredients.propTypes = {
//     setIsIngredientsPopupOpen: PropTypes.func.isRequired,
//     setChosenIngredient: PropTypes.func.isRequired,

//     ingredientsData: PropTypes.arrayOf(PropTypes.shape(ingredientType)).isRequired,
// };