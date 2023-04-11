// подложка под модалку
import PropTypes from 'prop-types';
import os from './modal-overlay.module.css';

export default function ModalOverlay({ popupCloseHandler }) {
    return (
        <div className={os.overlay} onClick={() => popupCloseHandler(false)}></div>
    )
};

ModalOverlay.propTypes = {
    popupCloseHandler: PropTypes.func.isRequired,
}