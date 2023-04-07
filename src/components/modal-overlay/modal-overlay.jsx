// подложка под модалку

import os from './modal-overlay.module.css';

export default function ModalOverlay ({popupCloseHandler}) {
    return (
        <div className={os.overlay} onClick={ () => popupCloseHandler(false) }></div>
    )
};