import { motion } from "framer-motion";
import styled from "styled-components";




export const StyledModalGeneric = styled(motion.div)`
    position: absolute;
    z-index: 5;
    width: 100vw;
    height: 100vh;
    .bg-modal{
        width: 100%;
        height: 100%;
        background-color: rgba(64,86,162,.5);
    }
    .content{
        position: absolute;
        width: 80%;
        height: min-content;
        top: 0;
        left: 0;
        top: 50%;
        left: 50%;
        transform: translateY(-50%) translateX(-50%);
        h2{
            margin-top: 1rem;
            margin-bottom: 1rem;
            text-align: center;
        }
    }
`