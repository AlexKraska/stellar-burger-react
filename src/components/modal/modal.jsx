import React from "react";

// есть компонент Modal — шапка с заголовком и иконкой закрытия;

// содержимое модального окна передается в компонент Modal как children ;

// есть компонент ModalOverlay — фоновая подложка под модальным окном;

// модальное окно с описанием ингредиента открывается при клике по ингредиенту;

// модальное окно с описанием заказа открывается при клике по кнопке «Оформить заказ»;

// модальные окна закрываются при клике на крестик, на ModalOverlay или нажатием на клавишу "Esc";

// логика навешивания и удаления обработчиков события нажатия клавиши "Esc" описана в компонент Modal ;

// в компоненте Modal используется портал;


export default class Modal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            visible: false,
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleOpenModal() {
        this.setState({ visible: true });
    }

    handleCloseModal() {
        this.setState({ visible: false });
    }

    render() {
        const modal = (
            <Modal header="Внимание!" onClose={this.handleCloseModal}>
                <p>Спасибо за внимание!</p>
                <p>Открывай меня, если станет скучно :)</p>
            </Modal>
        );

        return (
            <div style={{ overflow: 'hidden' }}>
                <button onClick={this.handleOpenModal}>Открыть модальное окно</button>
                {this.state.visible && modal}
            </div>
        );
    }
}



export default function DissatisfiedButton() {
    function handleAgressiveButtonClick() {
        console.log("Не дави на меня!");
    }

    function handleAgressiveButtonMouseEnter() {
        console.log("Вы мне солнце заслонили!");
    }

    function handleAgressiveButtonMouseLeave() {
        console.log("Ну вот, теперь слишком жарко!");
    }

    return (
        <button
            onClick={handleAgressiveButtonClick}
            onMouseEnter={handleAgressiveButtonMouseEnter}
            onMouseLeave={handleAgressiveButtonMouseLeave}
        >
            Поиграй со мной!
        </button>
    );
}