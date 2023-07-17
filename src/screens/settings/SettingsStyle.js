import styled from 'styled-components'; 

export const Container = styled.div`
    height: 97%;
    width: 97%;
    margin: auto auto auto 0;
    overflow-y: auto;
    &>h3{
        margin-bottom: 1.2rem;
    }
    @media  (max-width: 768px) {
        margin: auto;
        display: flex;
        align-items: center;
        flex-direction: column;
    }  
`;

export const Form = styled.form`
    @media  (max-width: 768px) {
        display: flex;
        align-items: center;
        flex-direction: column;
    } 
`

export const FormField = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @media  (max-width: 768px) {
        margin-top: 0;
        align-items: center;
    }
`;

export const Label = styled.label`
    display: block;
    margin-right: 0.625rem;
`;

export const InputWrapper = styled.div`
    display: flex;
    position: relative;
`;

export const Input = styled.input`
    width: 100%;
    min-width: 18.75rem;
    padding: 0.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    transition: border-color 0.3s;

    &:hover {
        border-color: #999;
    }
`;

export const ToggleButton = styled.button`
    position: absolute;
    /* top: 50%; */
    right: 0.5rem;
    /* transform: translateY(-50%); */
    background: none;
    border: none;
    cursor: pointer;
`;

export const PasswordToggleIcon = styled.span`
    font-size: 1.2rem;
`;