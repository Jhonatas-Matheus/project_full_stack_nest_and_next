
import { motion } from "framer-motion";
import styled from "styled-components";




export const StyledFormEditProfile = styled(motion.form)`
width: 100%;
height: min-content;
margin: 0 auto;
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
    cursor:pointer;
    color: #fff;
    font-weight: bold;
}

`
export const StyledExcludeProfile = styled(motion.div)`
width: 100%;
height: min-content;
margin: 0 auto;
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
    text-align: center;
    font-size: 1.3rem;
    span{
        color: #1DBBED;
    }
}
button{
    background-color: #1DBBED !important;
    cursor: pointer;
    padding: 1.3rem;
    border-radius: 10px;
    color: #fff;
    font-weight: bold;
    border: none;
}

`