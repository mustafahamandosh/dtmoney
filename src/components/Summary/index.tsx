import {SummaryContainer} from "./styles";
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'
import {useContext} from "react";
import {TransactionContexts} from "../../TransactionContexts";

export const Summary = () => {
    const {transactions} = useContext(TransactionContexts)

    const totalSummary = transactions.reduce((currentValue, {type, amount}) => {
        if (type === 'deposit') {
            currentValue.deposit += amount;
            currentValue.total += amount;
        } else {
            currentValue.withdraw += amount;
            currentValue.total -= amount;
        }
        return currentValue;
    }, {
        deposit: 0,
        withdraw: 0,
        total: 0
    })

    return (
        <SummaryContainer>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={IncomeImg} alt="Incomes"/>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalSummary.deposit)}</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={OutcomeImg} alt="Incomes"/>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalSummary.withdraw)}</strong>
            </div>
            <div className="highlight-total">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Incomes"/>
                </header>
                <strong>{new Intl.NumberFormat('pt-BR',
                    {
                        style: 'currency',
                        currency: 'BRL'
                    }).format(totalSummary.total)}</strong>
            </div>
        </SummaryContainer>
    )
}