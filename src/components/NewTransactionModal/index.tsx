import Modal from "react-modal";
import React, {FormEvent, useCallback, useState} from "react";
import CloseImg from '../../assets/close.svg'
import OutcomeImg from '../../assets/outcome.svg'
import IncomeImg from '../../assets/income.svg'
import {NewTransactionContainer, RadioBox, TransactionButtons} from "./styles";
import {useTransaction} from "../../hooks/useTransactionContexts";


type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
}

export const NewTransactionModal = ({isOpen, onRequestClose}: NewTransactionModalProps) => {
    const {createNewTransaction} = useTransaction()
    const [title, setTitle] = useState('')
    const [category, setCategory] = useState('')
    const [amount, setAmount] = useState(0)
    const [type, setType] = useState('deposit')

    const handleNewTransaction = useCallback(async (e: FormEvent) => {
        e.preventDefault()
        await createNewTransaction({
            title,
            category,
            amount,
            type
        })
        setTitle('')
        setAmount(0)
        setCategory('')
        setType('deposit')
        onRequestClose()
    }, [title, amount, category, type])

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
                    value={amount}
                    onChange={({target}) => setAmount(Number(target.value))}/>

                <TransactionButtons>
                    <RadioBox type="button"
                              onClick={() => setType('deposit')}
                              isActive={type === 'deposit'}
                              activeColor="green">
                        <img src={IncomeImg} alt="Income"/>
                        <span>Income</span>
                    </RadioBox>
                    <RadioBox type="button"
                              onClick={() => setType('withdraw')}
                              isActive={type === 'withdraw'}
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