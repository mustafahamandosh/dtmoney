import Modal from "react-modal";
import React from "react";
import CloseImg from '../../assets/close.svg'
import {NewTransactionContainer} from "./styles";

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}
export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">

            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={CloseImg} alt="Close modal"/>
            </button>

            <NewTransactionContainer>
                <h2>Create new transaction</h2>
                <input type="text" placeholder="Title"/>
                <input type="number" placeholder="Value"/>
                <input type="text" placeholder="Category"/>
                <button type="submit">
                    Register
                </button>
            </NewTransactionContainer>
        </Modal>
    )
}