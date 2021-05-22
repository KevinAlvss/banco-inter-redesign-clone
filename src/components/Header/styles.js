import styled from 'styled-components';
import { motion } from "framer-motion";

export const Wrapper  = styled.div`
  width: 100%;
  height: 23.5vh;

  display: flex;
  flex-direction: column;
`;

export const Container = styled.div`
  width: 100%;
  height: 13.5vh;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 0 12rem;
`;

export const LogoBox = styled(motion.div)`
    width: min-content;
    
    > p{
        font-size: .75rem;
        color: #8c91a5
    }
`;

export const RigthSide = styled(motion.div)`
    display: flex;
    align-items: center;
    
    > button{
        background-color: transparent;
        border: 1px solid #ff8700;
        border-radius: .2rem;
        
        font-size: 1rem;
        color: #ff8700;

        padding: .6rem 1.8rem;

        margin-right: 1.5rem;
    }
`;

export const ProfileButton = styled.div`
    height: 50px;
    width: 50px;

    display: flex;
    align-items: center;
    justify-content: center;

    border-radius: 50%;

    background-color: #eee;
    color: #ff8700;

    font-size: 1.2rem;
`;

export const Separetor = styled(motion.div)`
    width: 100vw;
    height: 8vh;
    background: linear-gradient(90deg, rgb(255, 80, 15) 0%, rgb(255, 135, 0) 100%);
`;