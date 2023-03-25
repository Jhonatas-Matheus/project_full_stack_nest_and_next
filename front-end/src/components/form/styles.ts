import styled from "styled-components";
import { motion } from 'framer-motion'

export const StyledForm = styled(motion.form)`
width: 80%;
height: min-content;
margin: auto auto;
background-color: #fff;
display: flex;
flex-direction: column;
border-radius: 10px;
gap: .5rem;
padding: 1.5rem;
border-radius: 10px;
    @media (min-width: 768px) {
        width: 60%;
    } 
h2{
    margin-top: 1rem;
    margin-bottom: 1rem;
    text-align: center;
}
input{
    background-color: rgba(5, 5, 5, 0.14);
    border: none;
    padding: 1.5rem;
    border-radius: 4px;
    &:focus{
        outline: none;
    }
}
input[type="submit"]{
    background-color: #1DBBED !important;
    color: #fff;
    font-weight: bold;
}
span{
    margin: 0 auto;
    font-weight: bold;
}
.msg-login{
    font-size: .8rem;
    span{
        cursor: pointer;
        color: #1DBBED;
    }
}
.errors-validation{
    font-size: .7rem;
    font-weight: bold;
    color: red;
}
`