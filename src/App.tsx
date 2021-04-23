import {GlobalStyle} from "./styles/global";
import {Header} from "./components/Header";
import {createServer} from 'miragejs'
import {Dashboard} from "./components/Dashboard";

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

export function App() {
    return (
        <>
            <Header/>
            <Dashboard/>
            <GlobalStyle/>
        </>
    );
}
