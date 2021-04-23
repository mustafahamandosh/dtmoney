import LogoImg from '../../assets/logo.svg'
import {HeaderContainer, HeaderContent} from "./styles";

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={LogoImg} alt="Logo image"/>
                <button>
                    New Transaction
                </button>
            </HeaderContent>
        </HeaderContainer>
    )
}