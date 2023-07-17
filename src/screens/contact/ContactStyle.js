import styled from 'styled-components'; 

export const Container = styled.div`
    height: 97%;
    width: 90%;
    max-width: 43.75rem;
    margin: auto auto auto 0;
    overflow-y: auto;
    @media  (max-width: 768px) {
        display: flex;  
        flex-direction: column;
        align-items: center;
        margin: auto;
        &>h2{
            display: flex;
            justify-content: center;
        }
    }    
`;

export const FormGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 95%;
    @media (max-width: 860px) {
        align-items: flex-start;
        flex-direction: column;
    }
    @media  (max-width: 768px) {
        align-items: center;
        width: 100%;
    }    
`;

export const FormField = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @media (max-width: 860px) {
        margin-top: 0.1rem;
    }
    @media  (max-width: 768px) {
        align-items: center;
    }  
`;

export const Label = styled.label`
    display: block;
    margin-right: 0.625rem;
`;

export const InputWrapper = styled.div`
    display: flex;
`;

export const Select = styled.select`
    width: 100%;
    min-width: 18.75rem;
    padding: 0.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    transition: border-color 0.3s;

    &:hover {
        border-color: #999;
    }
    @media  (max-width: 768px) {
        min-width: 14rem;
    }    
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
    @media  (max-width: 768px) {
        min-width: 14rem;
    } 
`;

export const TextArea = styled.textarea`
    width: 95%;
    height: 6.25rem;
    padding: 0.3125rem;
    border-radius: 0.25rem;
    border: 1px solid #ccc;
    transition: border-color 0.3s;

    &:hover {
        border-color: #999;
    }

    @media (max-width: 768px) {
        width: 65%;
    }
    @media (max-width: 450px) {
        width: 45%;
    }
`;

export const ButtonBox = styled.div`
    display: grid;
    grid-template-columns: minmax(8rem, 9rem) minmax(8rem, 9rem);
    column-gap: 13rem;
    min-width: 35rem;
    @media (max-width: 1200px) {
        column-gap: 10rem;
    }
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
        gap: 1rem;
        place-items: center;
        overflow: hidden;
    }
   
`;

export const FileInput = styled.input`
  display: none;
`;

export const FileInputLabel = styled.label`
    position: relative; 
    min-width: 11rem;
    min-height: 2rem;
    line-height: 2rem;
    margin: 0;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
    text-align: center;
    text-transform: uppercase;
    color: ${(props)=>props.theme.colors.black};
    background: ${(props)=>props.theme.colors.grey};
    border-radius: 10px;
    cursor: pointer;
    z-index: 1; 
    overflow: hidden; 
    transition: all .6s ease;

    &:hover{
        letter-spacing: 1px;
    } 
    
   /*  @media (max-width: 900px) {
        min-width: 10rem;
        min-height: 1.5;
        line-height: 1.5; 
    }  */  

`;

export const FileNameList = styled.ul`
  padding: 0;
  margin: 0.625rem 0;
`;

export const FileNameItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.3rem;
  margin-bottom: 0.3rem;
  border: 1px solid ${(props)=>props.theme.colors.primaryBg};
  border-radius: 1rem;
  min-width:30vw;
`;

export const FileName = styled.span`
  margin-left: 0.32rem;
`;

export const RemoveButton = styled.button`
  background: none;
  border: none;
  color: #007bff;
  cursor: pointer;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-top: 0.3125rem;
`;