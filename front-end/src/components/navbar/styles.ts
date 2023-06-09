import styled from "styled-components";



export const StyledNavbar = styled.nav`
position: relative;
z-index: 5;
width: 100%;
min-height: 4rem;
height: 4rem;
background-color: #fff;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
padding: 0 1rem;
.btn-nav-bar-control{
    background: transparent;
    border: none;
    @media (min-width: 1024px){
        display: none;
    }
}
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
    font-size: 1.2rem;
    span{
        color: #1DBBED;
    }
}
.icon-nav-bar{
    width: 1.5rem;
    cursor: pointer;
}
.options-nav-bar-mobile{
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
    @media (min-width:1024px){
        display: none !important;
    }
}
.profile-info{
    display:flex;
    flex-direction: column;
    align-items: center;
    gap: .5rem;
    .profile-info-data{
        display: flex;
        flex-direction: column;
        align-items: center;
        h2{
            font-size: 1.3rem;
            color: #1DBBED;
        }
        h3{
            font-size: 1rem;
        }
    }
    .profile-info-img{
        width: 8rem;
        height: 8rem;
        object-fit: scale-down;
    }
    @media (min-width: 1024px){
        height: 100%;
        .profile-info-img{
            height: 100%;
        }
        flex-direction: row;
    }
}
.btn-control-container{
    display: flex;
    gap: 1rem;
    margin-top: 1rem;
    justify-content: center;
    button{
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: #000;
        border-radius: 50%;
        border: none;
        width: 2.5rem;
        height: 2.5rem;
        cursor: pointer;
        img{
            width: 50%;
            height: 50%;
            object-fit: contain;
            object-position: center;
        }
    }
}
.btn-single-container{
    display: flex;
    flex-direction: column;
    align-items: center;
}
.options-nav-bar-desktop{
    display: none;
    position: absolute;
    z-index: 3;
    right: 1rem;
    @media (min-width: 1024px){
        display: flex;
        align-items: center;
        gap: 1rem;
        height: 100%;

            span{
                font-size: .9rem;
                font-weight: bold;
                width: min-content;
                white-space: nowrap;
                cursor: pointer;
                transition: .5s;
                &:hover{
                    color: #1DBBED;
                }
            }
    }
    img{
        width: 4rem;
        height: 4rem;
    }
}
`