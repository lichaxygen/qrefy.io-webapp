import styled from 'styled-components'; 

export const Container = styled.div`
    height: 97%;
    width: 97%;
    margin: auto auto auto 0;
/*     background-color: whitesmoke; */
    overflow-y: auto;
    @media  (max-width: 768px) {
        margin: auto;
        &>h2{
            display: flex;
            justify-content: center;
        } 
    }   
`;

export const TabContainer = styled.div`
    display: flex;
`;

export const Tab = styled.div`
    flex: 1;
    text-align: center;
    padding: 10px;
    background-color: ${({ $active }) => ($active ? (props)=>props.theme.colors.activeItem : (props)=>props.theme.colors.sidebarBg)};
    font-weight: ${({ $active }) => ($active ? 'bold' : 'normal')};
    border-bottom: 1px solid ${(props)=>props.theme.colors.primaryBg};
    border-radius: 10px;
    cursor: pointer;
`;

export const ContentContainer = styled.div`
    padding: 20px;   
`;

export const Section = styled.div`
    display: flex;
    flex-direction: column;
    & > h3{
        color: ${(props)=>props.theme.colors.danger};
    }
    @media  (max-width: 920px) {
       align-items: center;
    }    
`;


export const Division = styled.div`
    padding-top: 0.2rem;
    padding-bottom: 0.2rem;
    border-bottom: 1px solid ${(props)=>props.theme.colors.grey};
`;

export const FormGroup = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center; 
    width: 70%;
    @media  (max-width: 1150px) {
        width: 85%;
    }    
    @media  (max-width: 950px) {
        width: 95%;
    }
    @media (max-width: 860px) {
        width: 100%;
        align-items: center;
        flex-direction: column;
    } 
`;

export const FormField = styled.div`
    margin-top: 0;
    margin-bottom: 1rem;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    @media  (max-width: 920px) {
        align-items: center;
    }    
    @media (max-width: 860px) {
        margin-bottom: .5rem;
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

export const ButtonBox = styled.div`
    display: grid;
    grid-template-columns: minmax(8rem, 9rem) minmax(8rem, 9rem);
    column-gap: 13rem;
    min-width: 35rem;
    @media (max-width: 1200px) {
        column-gap: 10rem;
    }
    @media (max-width: 920px) {
        grid-template-columns: 1fr;
        gap: 1rem;
        place-items: center;
        overflow: hidden;
    }
    @media (max-width: 630px) {
        min-width: 0;
    }
`;
