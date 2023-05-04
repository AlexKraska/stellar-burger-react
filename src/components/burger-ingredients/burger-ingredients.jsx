import { Tab } from '@ya.praktikum/react-developer-burger-ui-components';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import bis from './burger-ingredients.module.css';

import { useInView } from 'react-intersection-observer';
import { CardZoneTemplate } from '../cardZoneTemplate/cardZoneTemplate';

export default function BurgerIngredients() {

    const initialIngredients = useSelector(state => state.ingredientsData.ingredients);

    // const handleIngredientDragNDrop = () => { } функция которая будет нужна для перетаскивания ингредентов

    // логика навигации по ингредиентам -----------------------------------
    const [current, setCurrent] = useState('bun');
    const [bun, bunInView, b] = useInView({ threshold: 0.7 });
    const [sauce, sauceInView, s] = useInView({ threshold: 0.5 });
    const [main, mainInView, m] = useInView({ threshold: 0.2 });

    useEffect(() => {
        bunInView && setCurrent('bun');
        sauceInView && setCurrent('sauce');
        mainInView && setCurrent('main');
    }, [bunInView, sauceInView, mainInView]);

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
                    {initialIngredients.map((item) => item.type === 'bun' && <CardZoneTemplate key={item._id} card={item} />)}
                </div>

                <h2 className='text text_type_main-medium mb-6' id='sauce'>Соусы</h2>
                <div ref={sauce} className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='sauce'>
                    {initialIngredients.map((item) => item.type === 'sauce' && <CardZoneTemplate key={item._id} card={item} />)}
                </div>

                <h2 className='text text_type_main-medium mb-6' id='main'>Начинки</h2>
                <div ref={main} className={`${bis.menu} pt-6 pb-10 pr-4 pl-4`} name='main'>
                    {initialIngredients.map((item) => item.type === 'main' && <CardZoneTemplate key={item._id} card={item} />)}
                </div>
            </div>
        </div>

    )
}