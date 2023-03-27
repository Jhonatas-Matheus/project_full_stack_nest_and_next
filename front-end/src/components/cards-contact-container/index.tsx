import { StyledCardsContactContainer } from "./style"

interface ICardContactContainer {
    children: React.ReactNode
}


export const CardContactContainer = ({ children }: ICardContactContainer) => {
    return (
        <StyledCardsContactContainer>
            {children}
        </StyledCardsContactContainer>
    )
}