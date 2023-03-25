import styled from "styled-components";



export const StyledContainer = styled.div`
display: flex;
width: 100vw;
height: 100vh;
background: url('./assets/bg-container-mobile.png');
background-size: cover;
background-repeat: no-repeat;
background-position: center;
@media (min-width:768px){
    background: url('./assets/bg-container-tablet.png');
}
@media (min-width:1024px){
    background: url('./assets/bg-container-desktop.png');
}
`