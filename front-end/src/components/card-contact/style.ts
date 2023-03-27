import styled from "styled-components";



export const StyledCardContact = styled.li`
background-color: #fff;
padding: 1rem;
display: flex;
align-items: center;
justify-content: space-between;
flex-basis: 100%;
margin-bottom: 1rem;
border-radius: 10px;
@media (min-width: 768px){
    flex-basis: 45%;
}
@media (min-width: 1024px){
    flex-basis: 30%;
}
.contact-info{
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    p{
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