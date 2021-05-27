import React from 'react';

import { Container } from './styles';

export function Cashback() {
  return(
      <Container
        style={{x: "10%"}}
        animate={{x: 0}}
        transition={{duration: 1}}
      />
  );
}