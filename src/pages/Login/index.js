import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { Container, LoginBox, TextWrapper, InputWrapper } from './styles'

import logoInter from '../../images/logo-inter.svg'

import { useLogin } from '../../context/LoginContext'

export function Login() {
    const { userName, setUserName } = useLogin();
    const [color, setColor] = useState('');

    
    useEffect(() => {
        function changeBackgroundColor(){
            if(userName.length === 1){
                setColor('#F8DFD9');
            } 
            else if (userName.length === 2){
                setColor('#FAC6B1');
            }
            else if (userName.length === 3){
                setColor('#FDAA7D');
            }
            else if (userName.length > 4 || userName.length === 4){
                setColor('#FF8700');
            }
            else if (userName.length === 0){
                setColor('transparent')
            }
        }
        
        changeBackgroundColor()
    }, [userName])


    return (
      <Container style={{background: color}}>
          <LoginBox 
            animate={{ 
                top: 0, 
                size: 1
            }}

            initial={{ 
                top: 100,
                size: 0.8
            }}

            transition={{ 
                ease: "easeOut", 
                duration: .4 
            }}
          >
              <TextWrapper>
                <img src={logoInter} alt="logo-inter" draggable={false}/>
                <p>Seja bem vindo ao estudo de redesign da interface do Banco Inter</p>
              </TextWrapper>
              <InputWrapper>
                <input type="text" placeholder="Digite seu nome para entrar" onChange={e => setUserName(e.target.value)} value={userName}/>
                <Link to="/dashboard">
                    <button type="button" disabled={userName.length === 0}>
                        Entrar no App
                    </button>
                </Link>
              </InputWrapper>
          </LoginBox>
      </Container>
    );
}
