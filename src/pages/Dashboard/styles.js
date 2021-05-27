import styled from "styled-components";

export const Container = styled.div`
    height:100vh;
    width:100vw;

    display: flex;
    flex-direction: column;
`;

export const Main = styled.div`
    display: flex;
    justify-content: center;

    position: relative;    
    top: -7vh;

    width: 100%;

    padding: 1.5rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100%;

    padding: 0 1.5rem;
`;

export const CardsContainer = styled.div`
    height: 7.5rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    gap: .5rem;
`;

export const ExtractDiv = styled.div`
    height: 12rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;

    margin: 25px 0;
`;