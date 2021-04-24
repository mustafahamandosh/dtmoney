import Modal from "react-modal";
import React from "react";

type NewTransactionModalProps = {
    isOpen: boolean;
    onRequestClose: () => void;
    children: React.ReactNode
}
export const NewTransactionModal = ({isOpen, onRequestClose, children}: NewTransactionModalProps) => {
    return (
        <Modal isOpen={isOpen}
               onRequestClose={onRequestClose}>
            {children}
        </Modal>
    )
}