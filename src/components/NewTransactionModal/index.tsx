import Modal from "react-modal";
import React, {FormEvent, useCallback, useState} from "react";
import CloseImg from '../../assets/close.svg'
import OutcomeImg from '../../assets/outcome.svg'
import IncomeImg from '../../assets/income.svg'
import {NewTransactionContainer, RadioBox, TransactionButtons} from "./styles";

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}
export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [value, setValue] = useState(0)
    const [buttonType, setButtonType] = useState('deposit')

    const handleNewTransaction = useCallback((e: FormEvent) => {
        e.preventDefault()
        console.log(title)
        console.log(value)
        console.log(category)
        console.log(buttonType)
    }, [title, value, category, buttonType])

    return (
        <Modal
            isOpen={isOpen}
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content">

            <button type="button" onClick={onRequestClose} className="react-modal-close">
                <img src={CloseImg} alt="Close modal"/>
            </button>

            <NewTransactionContainer onSubmit={handleNewTransaction}>
                <h2>Create new transaction</h2>
                <input
                    type="text"
                    placeholder="Title"
                    value={title}
                    onChange={({target: {value}}) => setTitle(value)}
                />

                <input
                    type="number"
                    placeholder="Value"
                    value={value}
                    onChange={({target}) => setValue(Number(target.value))}/>

                <TransactionButtons>
                    <RadioBox type="button"
                              onClick={() => setButtonType('deposit')}
                              isActive={buttonType === 'deposit'}
                              activeColor="green">
                        <img src={IncomeImg} alt="Income"/>
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox type="button"
                              onClick={() => setButtonType('withdraw')}
                              isActive={buttonType === 'withdraw'}
                              activeColor="red">
                        <img src={OutcomeImg} alt="Outcome"/>
                        <span>Outcome</span>
                    </RadioBox>
                </TransactionButtons>

                <input
                    type="text"
                    placeholder="Category"
                    value={category}
                    onChange={({target: {value}}) => setCategory(value)}
                />

                <button type="submit">
                    Register
                </button>
            </NewTransactionContainer>
        </Modal>
    )
}