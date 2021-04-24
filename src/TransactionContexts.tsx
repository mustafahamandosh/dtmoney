import React, {createContext, ReactNode, useEffect, useState} from "react";
import {api} from "./services/api";

export type Transaction = {
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

type CreateTransaction = Omit<Transaction, 'id' | 'createdAt'>

type TransactionContextsProps = {
    transactions: Transaction[];
    createNewTransaction: (transaction: CreateTransaction) => void;
}

export const TransactionContexts = createContext<TransactionContextsProps>({} as TransactionContextsProps);

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(({data: {transactions}}) => setTransactions(transactions))
    }, [])

    const createNewTransaction = (transaction: CreateTransaction) => {
        api.post('/transactions', transaction).then(r => console.log(r))
    }

    return (
        <TransactionContexts.Provider value={{transactions, createNewTransaction}}>
            {children}
        </TransactionContexts.Provider>
    )
}