import styled from 'styled-components';

export const HeaderBar = styled.div`
    position: fixed;
    left:0;
    width: 15vw;
    min-width: 150px;
    max-width: 250px;
    height: 100vh;
    margin: 0;
    padding: 0;
    background: ${(props)=>props.theme.colors.grey};
    z-index: 1;
    @media screen and (min-width: 1000px){
        justify-content: space-around;
    }
`;

export const TitleContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;
    padding: 0;
    margin: 0;
`;

export const Logo = styled.div`
    width: 5rem;
    @media (max-width: 800px){
        width: 4rem;
    }
`;

export const BoxButton = styled.div`
    display: none;
    margin-right: 1rem;
    font-size: 100%;
    @media (max-width: 800px) {
        display: flex;
        align-items: center;
        cursor: pointer;

        svg{
            fill: ${(props)=>props.theme.colors.primary};
            margin-right: 0.5rem;
        }
    }
`

export const LogoImg = styled.img`
    max-width: 100%;
    height: auto;
`;

export const Title = styled.div`
    width: 11.25rem;
    @media (max-width: 800px) {
        width: 10rem;
    }
    @media (max-width: 400px) {
        width: 8rem;
    }
`;

export const TitleImg = styled.img`
    max-width: 100%;
    height: auto;
`;

export const List = styled.ul`
    position: relative;
    padding:0;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    list-style: none;
    margin-right: 2rem;
    @media screen and (max-width: 800px){
        background: linear-gradient(to bottom, ${(props)=>props.theme.colors.grey}, ${(props)=>props.theme.colors.light});
        position: absolute;
        font-size: 150%;
        top: 40px; 
        left: ${({ open }) => (open ? "0%" : "-100%")};
        margin: 0;
        width: 100%;
        height: 92vh;
        justify-content: space-evenly;
        align-items: center;
        flex-direction: column;
        transition: 0.5s all ease;
    }
`;

export const ItemList = styled.li`
    position: relative;
    color: ${(props)=>props.theme.colors.primary}; //#951434
    font-weight: bold;
    text-transform: uppercase;
    margin-left: 2.5em;
    height: 1.35rem;
    cursor: pointer;
    
    &:before{
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: .2rem;
        background: ${(props)=>props.theme.colors.primary};
        transition: .5s;
    }
    &:after{
        content: '';
        position: absolute;
        bottom: 0;
        right: 0;
        width: 0;
        height: .2rem;
        background: ${(props)=>props.theme.colors.grey};
        transition: .5s;
        @media (max-width: 800px) {
            background: white;
        }
    }

    &:hover{
        color: black;
        transition: .5s;

        &:before{
            width: 50%;
            translate: 100%;    
        }

        &:after{
            width: 50%;
            translate: -100%;
        }
        @media (max-width: 800px) {
            color: black;
        }
    }

    @media (max-width: 800px) {
        margin-left: 0; 
        height: 2rem;
        color: ${(props)=>props.theme.colors.primary};
    }

`;

