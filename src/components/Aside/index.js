import React from 'react';

import { Container } from './styles';

export function Aside() {
  return(
      <Container 
        style={{y:"-20%" , opacity: 0}} 
        animate={{y: 0 ,opacity: 1}}
        transition={{
            duration: 1
        }}
      >

      </Container>
  );
}