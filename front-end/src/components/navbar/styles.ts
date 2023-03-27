import styled from "styled-components";



export const StyledNavbar = styled.nav`
position: relative;
z-index: 5;
width: 100%;
height: 4rem;
background-color: #fff;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0 1rem;
.teste{
    position: absolute;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;
    z-index: 2;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #fff;
}
.logo-site{
    font-size: 1.5rem;
}
.icon-nav-bar{
    width: 1.5rem;
}
.options-nav-bar{
    position: absolute;
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    left: 0;
    background-color: #fff;
    top: 100%;
    padding-bottom: 2rem;
}
.profile-info{
    display:flex;
    flex-direction: column;
    align-items: center;
    h2,h3{
        background-color: green;
    }
}
.btn-control-container{
    display: flex;
    gap: 1rem;
    button{
        background-color: #000;
        border-radius: 50%;
        border: none;
        width: 4rem;
        height: 4rem;
        img{
            width: 100%;
            height: 100%;
            object-fit: scale-down;
        }
    }
}
.btn-single-container{
    /* background-color: blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
}
`