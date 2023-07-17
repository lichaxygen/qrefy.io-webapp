import styled from 'styled-components'; 

export const Container = styled.div`
    height: 97%;
    width: 97%;
    margin: auto auto auto 0;
    background-color: whitesmoke;
    overflow-y: auto;
    @media  (max-width: 768px) {
        margin: auto;
        &>h2{
            display: flex;
            justify-content: center;
        } 
    }   
`;