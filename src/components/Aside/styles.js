import styled from 'styled-components';
import { motion } from 'framer-motion'

export const Container = styled(motion.div)`
  height: 35rem;
  width: 17rem;

  display: flex;
  flex-shrink: 0;

  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 0.5rem 2rem;
  border-radius: .8rem;
`;
