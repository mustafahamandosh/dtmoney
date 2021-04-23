import {SummaryContainer} from "./styles";
import IncomeImg from '../../assets/income.svg'
import OutcomeImg from '../../assets/outcome.svg'
import TotalImg from '../../assets/total.svg'

export const Summary = () => {
    return (
        <SummaryContainer>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={IncomeImg} alt="Incomes"/>
                </header>
                <strong>R$100,00</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={OutcomeImg} alt="Incomes"/>
                </header>
                <strong>R$100,00</strong>
            </div>
            <div className="highlight-total">
                <header>
                    <p>Total</p>
                    <img src={TotalImg} alt="Incomes"/>
                </header>
                <strong>R$100,00</strong>
            </div>
        </SummaryContainer>
    )
}