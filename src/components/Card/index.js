import React from 'react';

import { Container } from './styles';

export function Card({delay}) {
  return(
      <Container
        style={{ y: "-200%" , opacity: 0}} 
        animate={{ y: 0 , opacity: 1}}
        transition={{
            duration: 1.4,
            delay: delay
        }}
      >

      </Container>
  );
}