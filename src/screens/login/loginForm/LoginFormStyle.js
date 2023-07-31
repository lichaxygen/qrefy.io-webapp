import styled from 'styled-components'; 

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    height: 100%;
    margin: auto auto auto 0;
    overflow-y: auto;
`;

export const InputWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    min-width: 35rem;
    place-items: center;
    overflow: hidden;
`;

export const Input = styled.input`
    width: 15rem;
    padding: 0.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    transition: border-color 0.3s;

    &:hover {
        border-color: #999;
    }
`;

export const ButtonBox = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 1rem;
    min-width: 35rem;
    place-items: center;
    overflow: hidden;
    @media (max-width: 630px) {
        min-width: 0;
    }
`;

