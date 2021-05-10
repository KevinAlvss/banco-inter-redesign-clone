import styled from 'styled-components';

export const Container = styled.div`
    height:100vh;
    width:100vw;

    display: flex;
    align-items:center;
    justify-content:center;

    transition: background .2s ease-in-out;
`;

export const LoginBox = styled.div`
    position: relative;
    top: 0;

    height: 17.5rem;
    width: 22.5rem;
    background-color: white;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    padding: 2rem;

    border-radius: .5rem;
    box-shadow: rgba(0, 0, 0, 0.08) 0px 0.5rem 2rem;

    animation-name: top-animation;
    animation-duration: 1s;

    @keyframes top-animation {
    0% { top: -20px }
    100% { top: 0 }
    }
`;

export const TextWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > p {
        font-size:.95rem;
        color: #8c91a5;

        margin-top: .8rem;
        text-align: center;

        line-height: 1.5rem;
    }

`;

export const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    > button, input {
        height: 2.5rem;
        width: 100%;
        
        border-radius: .5rem;

        font-size: 1rem;
    }

    > input{
        background-color:#F6F6F8;
        color: #6c757d;
        
        padding: 0 1rem;
    }

    > button{
        background: linear-gradient(90deg, rgb(255, 80, 15) 0%, rgb(255, 135, 0) 100%);
        
        margin-top: 10px;
        
        color: white;
        font-weight: 500;

        transition: filter .25s ease-in-out;

        &:disabled{
            cursor: not-allowed;
            filter: opacity(.6);
        }
    }
`;
