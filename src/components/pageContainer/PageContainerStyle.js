import styled from 'styled-components';

export const Container = styled.div`
    display: grid;
    height: 97vh;
    width: 97vw;
    background: ${(props)=>props.theme.colors.glass};
    border-radius: 2rem;
    gap: 16px;
    grid-template-columns: 11rem auto;
    overflow: hidden;
    position: relative;
    @media (max-width: 1200px) {
        grid-template-columns: 10% auto;
        overflow-y: scroll;
        overflow: hidden;
    }
    @media  (max-width: 768px) {
        height: 100vh;
        width: 100vw;
        grid-template-columns: 1fr;
        overflow: hidden;
        border-radius: 0;
    }
`