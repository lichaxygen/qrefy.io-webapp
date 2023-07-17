import styled from 'styled-components'; 

export const Container = styled.div`
    height: 97%;
    width: 97%;
    margin: auto auto auto 0;
    overflow-y: auto;
    @media  (max-width: 920px) {
        margin: auto;
        &>h2{
            display: flex;
            justify-content: center;
        }
    }   
`;

export const Columns = styled.div`
    display: grid;  
    grid-template-columns: 50% 50%;
    overflow: hidden;
    @media (max-width: 950px) {
        grid-template-columns: 60% 40%;
        overflow-y: scroll;
        overflow: hidden;
    }
    @media  (max-width: 920px) {
        grid-template-columns: 1fr;
        gap: 1.5rem;
        place-items: center;
        overflow: hidden;
    }
`        

export const FormContainer = styled.div`
    height: 97%;
    width: 90%;
    max-width: 43.75rem;
    margin: auto auto auto 0;
`;

export const FormGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 95%;
`;

export const FormField = styled.div`
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @media  (max-width: 920px) {
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

export const ColorPickerForm = styled.div`
    display: flex;
    align-items: center;
`;

export const ButtonBox = styled.div`
    display: grid;
    grid-template-columns: minmax(7rem, 9rem) minmax(7rem, 9rem);
    column-gap: 1.5rem;
    min-width: 18.75rem;
    @media (max-width: 1200px) {
        column-gap: 1rem;
    } 
    @media  (max-width: 920px) {
        grid-template-columns: 1fr;
        gap: 1rem;
        place-items: center;
        overflow: hidden;
    }
`;

export const ErrorMessage = styled.div`
    color: red;
    margin-top: 0.3125rem;
`;

export const Response = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;  
`;

export const ImgBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${(props)=>props.theme.colors.primaryBg};
    border-radius: 1rem;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    padding: 1rem;
    height: 15.625rem;
    width: 15.625rem;
    @media  (max-width: 920px) {
        margin-bottom: 1rem;
    }  
    @media (max-width: 768px) {
        height: 12.5rem;
        width: 12.5rem;
    }
`;