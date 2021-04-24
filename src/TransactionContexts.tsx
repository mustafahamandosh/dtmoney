import React, {createContext, ReactNode, useEffect, useState} from "react";
import {api} from "./services/api";

type Transactions = {
    id: number,
    title: string,
    type: string,
    category: string,
    amount: number,
    createdAt: Date,
}

type TransactionsProviderProps = {
    children: ReactNode
}

export const TransactionContexts = createContext<Transactions[]>([]);

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
    const [transactions, setTransactions] = useState<Transactions[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(({data: {transactions}}) => setTransactions(transactions))
    }, [])

    return (
        <TransactionContexts.Provider value={transactions}>
            {children}
        </TransactionContexts.Provider>
    )
}