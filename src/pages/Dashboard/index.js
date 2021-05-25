import React from 'react';

import { Container, Main, Content, CardsContainer } from './styles';

import { Header } from '../../components/Header'
import { Aside }  from '../../components/Aside';
import { Card }   from '../../components/Card'

export function Dashboard() {
  return (
      <Container>
        <Header />
        <Main>
          <Aside />
          <Content>
            <CardsContainer>
              <Card delay= "0.3" />
              <Card delay= "0.6" />
              <Card delay= "0.9" />
              <Card delay= "1.2" />
              <Card delay= "1.5" />
              <Card delay= "1.8" />
            </CardsContainer>
          </Content>
        </Main>
      </Container>
  );
}