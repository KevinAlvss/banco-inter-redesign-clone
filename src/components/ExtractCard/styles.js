import styled from 'styled-components';
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  display: flex;
  flex-shrink: 0;

  width: 17rem;
  height: 100%;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0.5rem 2rem;
  border-radius: .8rem;
`;
