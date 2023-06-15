// подложка под модалку
import PropTypes from 'prop-types';
import os from './modal-overlay.module.css';

export default function ModalOverlay({ popupCloseHandler }) {

const popup = (state) => state.popupState.isIngredientsPopupOpen;

    return (
        <div className={`${os.overlay} ${popup ? os.overlay_visible : ''}`} onClick={() => popupCloseHandler(false)}></div>
    )
};

ModalOverlay.propTypes = {
    popupCloseHandler: PropTypes.func.isRequired,
}