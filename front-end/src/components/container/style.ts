import styled from "styled-components";



export const StyledContainer = styled.div`
.bg-container{
    position: absolute;
    z-index: -1;
    display: flex;
    width: 100vw;
    height: 100vh;
    background: url('./assets/bg-container.webp');
    -webkit-backdrop-filter: blur(10px); /* Safari 9+ */
    backdrop-filter: blur(10px); /* Chrome and Opera */
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
}
.content{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    overflow-y: auto;
    overflow-x: hidden;
    /* background-color: rgba(35,21,255,.3); */
    /* padding-bottom: 5rem; */
}
`