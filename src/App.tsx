import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import {createServer} from 'miragejs'
import {Dashboard} from "./components/Dashboard";
import Modal from "react-modal";
import {useState} from "react";

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
    return (
        <>
            <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
            <Dashboard/>
            <Modal isOpen={isNewTransactionModalOpen}
                   onRequestClose={() => setIsNewTransactionModalOpen(false)}>
                <h2>Create new transaction</h2>
            </Modal>
            <GlobalStyle/>
        </>
    );
}
