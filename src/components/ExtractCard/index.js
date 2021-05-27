import React from 'react';

import { Container } from './styles';

export function ExtractCard({delay}) {
  return (
      <Container 
        style={{y: "-50%", opacity: 0}}
        animate={{y: 0, opacity:100}}
        transition={{
            duration: 1,
            delay: delay
        }}
      />
  );
}