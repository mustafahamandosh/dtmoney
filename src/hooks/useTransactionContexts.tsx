import React, {createContext, ReactNode, useContext, useEffect, useState} from "react";
import {api} from "../services/api";

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
    createNewTransaction: (transaction: CreateTransaction) => Promise<void>;
}

const TransactionContexts = createContext<TransactionContextsProps>({} as TransactionContextsProps);

export const TransactionsProvider = ({children}: TransactionsProviderProps) => {
    const [transactions, setTransactions] = useState<Transaction[]>([])

    useEffect(() => {
        api.get('transactions')
            .then(({data: {transactions}}) => setTransactions(transactions))
    }, [])

    const createNewTransaction = async (createTransaction: CreateTransaction) => {
        const {data} = await api.post('/transactions', {...createTransaction, createdAt: new Date()})
        const {transaction} = data;
        setTransactions([...transactions, transaction])
    }

    return (
        <TransactionContexts.Provider value={{transactions, createNewTransaction}}>
            {children}
        </TransactionContexts.Provider>
    )
}

export function useTransaction() {
    return useContext(TransactionContexts)
}