import Modal from "react-modal";
import React, {useState} from "react";
import CloseImg from '../../assets/close.svg'
import OutcomeImg from '../../assets/income.svg'
import IncomeImg from '../../assets/outcome.svg'
import {NewTransactionContainer, RadioBox, TransactionButtons} from "./styles";

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}
export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
    const [type, setType] = useState('deposit')

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

                <TransactionButtons>
                    <RadioBox type="button"
                              onClick={() => setType('deposit')}
                              isActive={type === 'deposit'}>
                        <img src={IncomeImg} alt="Income"/>
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox type="button"
                              onClick={() => setType('withdraw')}
                              isActive={type === 'withdraw'}>
                        <img src={OutcomeImg} alt="Outcome"/>
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionButtons>

                <input type="text" placeholder="Category"/>
                <button type="submit">
                    Register
                </button>
            </NewTransactionContainer>
        </Modal>
    )
}