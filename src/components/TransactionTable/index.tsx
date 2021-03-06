import {TransactionTableContainer} from "./styles";
import {useTransaction} from "../../hooks/useTransactionContexts";

export const TransactionTable = () => {
    const {transactions} = useTransaction();
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
                {transactions.map(({id, type, amount, category, createdAt, title}) =>
                    <tr key={id}>
                        <td>{title}</td>
                        <td className={type}>
                            {new Intl.NumberFormat('pt-BR',
                                {
                                    style: 'currency',
                                    currency: 'BRL'
                                }).format(amount)}
                        </td>
                        <td>{category}</td>
                        <td>{new Intl.DateTimeFormat('pt-BR')
                            .format(new Date(createdAt))}
                        </td>
                    </tr>
                )}
                </tbody>
            </table>
        </TransactionTableContainer>
    )
}