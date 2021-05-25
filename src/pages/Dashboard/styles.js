import styled from "styled-components";

export const Container = styled.div`
    height:100vh;
    width:100vw;

    display: flex;
    flex-direction: column;
`;

export const Main = styled.div`
    position: relative;
    top: -6vh;

    display: flex;
    align-items: center;

    margin: 0 12rem;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    width: 100%;
    height: 100%;

    padding: 0 1.5rem;
`;

export const CardsContainer = styled.div`
    height: 7.5rem;
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: space-between;
`;