import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import {createServer} from 'miragejs'
import {Dashboard} from "./components/Dashboard";
import Modal from "react-modal";
import {useState} from "react";
import {NewTransactionModal} from "./components/NewTransactionModal";

createServer(({
    routes() {
        this.namespace = 'api';
        this.get('/transactions', () => {
            return [
                {
                    id: 1,
                    title: 'Transaction 1',
                    amount: 400,
                    transactionType: 'Deposit',
                    category: 'Food',
                    createdAt: new Date()
                }
            ]
        })
    }
}))

Modal.setAppElement('#root')

export function App() {
    const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false)

    const handleOpenNewTransactionModal = () => {
        setIsNewTransactionModalOpen(true)
    }

    const handleOnRequestClose = () => {
        setIsNewTransactionModalOpen(false)
    }

    return (
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>

            <Dashboard/>

            <NewTransactionModal
                isOpen={isNewTransactionModalOpen}
                onRequestClose={handleOnRequestClose}/>

            <GlobalStyle/>
        </>
    );
}
