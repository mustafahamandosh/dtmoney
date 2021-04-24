import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import {createServer, Model} from 'miragejs'
import {Dashboard} from "./components/Dashboard";
import Modal from "react-modal";
import {useState} from "react";
import {NewTransactionModal} from "./components/NewTransactionModal";

createServer(({
    models: {
        transaction: Model
    },

    seeds(server) {
        server.db.loadData({
            transactions: [
                {
                    id: 1,
                    title: 'Web Developer Freelance',
                    type: 'deposit',
                    category: 'Dev',
                    amount: 6000,
                    createdAt: new Date('2021-02-12 09:00:00')
                },
                {
                    id: 2,
                    title: 'Rent',
                    type: 'withdraw',
                    category: 'Home',
                    amount: 1120,
                    createdAt: new Date('2021-02-14 12:00:00')
                },
            ]
        })
    },

    routes() {
        this.namespace = 'api';
        this.get('/transactions', () => {
            return this.schema.all('transaction')
        });
        this.post('/transactions', (schema, req) => {
            return schema.create('transaction', JSON.parse(req.requestBody))
        });
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
