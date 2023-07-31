import styled from 'styled-components'; 

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 100%;
    margin: auto auto auto 0;
    overflow-y: auto;
`;

/* export const Division = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 15.5rem;
    color: ${(props)=>props.theme.colors.gray};
    &:before{
        position: absolute;
        content:'';
        border: solid 1px ${(props)=>props.theme.colors.gray};
        width: 100%;
        transform: translateY(0.56rem);
    } 
`; */

export const Division = styled.div`
    display: grid;
    grid-template-columns: auto 2rem auto;
    width: 15.5rem;
`;

export const Linea = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    width: 100%;
    color: ${(props)=>props.theme.colors.gray};
    &:before{
        position: absolute;
        content:'';
        border: solid 1px ${(props)=>props.theme.colors.gray};
        width: 100%;
        transform: translateY(0.56rem);
    } 
`;

export const Text = styled.div`
    display: flex;
    justify-content: center;
    width: 2rem;
    color: ${(props)=>props.theme.colors.gray};
`;