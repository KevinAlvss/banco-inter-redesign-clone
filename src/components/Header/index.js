import React from 'react';

import { Wrapper, Container, LogoBox, RigthSide, ProfileButton, Separetor } from './styles';

import { useLogin } from '../../context/LoginContext'

import LogoInter from '../../images/logo-inter.svg'

export function Header() {
    const { userName } = useLogin()

    const digitsUserName = userName.substr(0, 2).toUpperCase() ;

  return (
    <Wrapper>
        <Container>
            <LogoBox
                style={{ y: "-200%" }} 
                animate={{ y: 0 }}
                transition={{
                    duration: 1.4 
                }}
            >
                <img src={LogoInter} alt="logo" height="35" />
                <p>Internet Banking</p>
            </LogoBox>

            <RigthSide
                style={{ y: "-300%" }} 
                animate={{ y: 0 }}
                transition={{
                    duration: 2 
                }}
            >
                <button type="button">
                    Simulador Renda Fixa
                </button>

                <ProfileButton>
                    { digitsUserName }
                </ProfileButton>
            </RigthSide>
        </Container>
        <Separetor
            style={{ x: "-100%" }} 
            animate={{ x: 0 }}
            transition={{
                duration: 1.4 
            }}
        />
    </Wrapper>
  );
}