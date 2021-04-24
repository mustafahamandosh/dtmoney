import LogoImg from '../../assets/logo.svg'
import {HeaderContainer, HeaderContent} from "./styles";

type HeaderProps = {
    onOpenNewTransactionModal: () => void
}
export const Header = ({onOpenNewTransactionModal}: HeaderProps) => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImg} alt="Logo image"/>
                <button onClick={onOpenNewTransactionModal}>
                    New Transaction
                </button>
            </HeaderContent>
        </HeaderContainer>
    )
}