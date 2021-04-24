import {TransactionTableContainer} from "./styles";
import {useEffect, useState} from "react";
import {api} from "../../services/api";

type Transactions = {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: Date,
}

export const TransactionTable = () => {
    const [transactions, setTransactions] = useState<Transactions[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(({data: {transactions}}) => setTransactions(transactions))
    }, [transactions])

    return (
        <TransactionTableContainer>
            <table>
                <thead>
                <tr>
                    <th>Title</th>
                    <th>Value</th>
                    <th>Categories</th>
                    <th>Data</th>
                </tr>
                </thead>
                <tbody>
                {transactions.map(({
                                       id, type, amount
                                       , category, createdAt, title
                                   }) =>
                    <tr key={id}>
                        <td>{title}</td>
                        <td className={type}>{amount}</td>
                        <td>{category}</td>
                        <td>{createdAt}</td>
                    </tr>
                )}
                </tbody>
            </table>
        </TransactionTableContainer>
    )
}