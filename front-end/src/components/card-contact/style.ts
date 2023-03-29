import styled from "styled-components";



export const StyledCardContact = styled.li`
width: 100%;
background-color: #fff;
padding: 1rem;
display: flex;
align-items: center;
justify-content: space-between;
flex-basis: 100%;
margin-bottom: 1rem;
border-radius: 10px;
@media (min-width: 768px){
    max-width: 45%;
    flex-basis: 45%;
}
@media (min-width: 1024px){
    max-width: 30%;
    flex-basis: 30%;
}
.contact-info{
    display: flex;
    flex-direction: column;
    /* align-items: center; */
    gap: 1rem;
    p{
        width: min-content;
        max-width: 55vw;
        white-space: nowrap;
        text-overflow:ellipsis;
        overflow-x: hidden;
        @media (min-width: 768px){
            max-width: 25vw;
        }
        @media (min-width: 1280px){
            max-width: 20vw;
        }
        
        &:hover{
            overflow-x: visible;
        }
        span{
            font-weight: bold;
        }
    }
}
.contact-controllers{
    button{
        width: 2rem;
        height: 2rem;
        background: transparent;
        border: none;
        cursor: pointer;
        transition: .5s;
        &:hover{
                box-shadow: 0px 0px 88px -2px rgba(29,188,237,1);
            
        }
        img{
            width: 50%;
            height: 50%;
            object-fit: scale-down;
            filter: invert(100%);
            background: transparent;

        }
    }
}
`