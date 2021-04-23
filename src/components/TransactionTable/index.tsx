import {TransactionTableContainer} from "./styles";
import {useEffect} from "react";
import {api} from "../../services/api";

export const TransactionTable = () => {

    useEffect(() => {
        api.get('transactions')
            .then(({data}) => console.log(data))
    }, [])

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
                <tr>
                    <td>Development</td>
                    <td>R$12.000</td>
                    <td>Programming</td>
                    <td>20/02/2021</td>
                </tr>
                <tr>
                    <td>Development</td>
                    <td className="deposit">R$12.000</td>
                    <td>Programming</td>
                    <td>20/02/2021</td>
                </tr>
                <tr>
                    <td>Development</td>
                    <td className="withdraw">-R$12.000</td>
                    <td>Programming</td>
                    <td>20/02/2021</td>
                </tr>
                </tbody>
            </table>
        </TransactionTableContainer>
    )
}