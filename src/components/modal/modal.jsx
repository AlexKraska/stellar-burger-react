import ms from './modal.module.css';

import { CloseIcon } from '@ya.praktikum/react-developer-burger-ui-components';
import { createPortal } from 'react-dom';
import { useEffect } from 'react';

import ModalOverlay from '../modal-overlay/modal-overlay.jsx';

export default function Modal( { children, title = '', popupCloseHandler } ) {
    //сюда ведет портал
    const rootForModal = document.getElementById('react-modals');

    // добавдение и удаление обработчиков закрытия попапа
    useEffect(() => {
        const handleEscapeClose = (evt) => {
            if (evt.key === 'Escape') {
                popupCloseHandler(false)
            };
        };
        document.addEventListener('keyup', handleEscapeClose);
        return () => {
            document.removeEventListener('keyup', handleEscapeClose);
        };
    },
        [popupCloseHandler])

    return createPortal(
        <>
            <section className={`${ms.box} pt-15 pr-10 pl-10 pb-15`}>
                <header className={ms.heading}>
                    {title && (<h2 className={`${ms.title} text text_type_main-large`}>{title}</h2>)}
                    <button onClick={() => popupCloseHandler(false)} className={ms.closeBtn}>
                        <CloseIcon type="primary" />
                    </button>
                </header>
                {children}
            </section>
            <ModalOverlay popupCloseHandler={popupCloseHandler} />
        </>
        , rootForModal
    );
};