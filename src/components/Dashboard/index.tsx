import {DashboardContainer} from './styles'
import {Summary} from "../Summary";
import {TransactionTable} from "../TransactionTable";

export const Dashboard = () => {
    return (
        <DashboardContainer>
            <Summary/>
            <TransactionTable/>
        </DashboardContainer>
    )
}