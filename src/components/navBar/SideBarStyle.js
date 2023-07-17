import styled, {css} from 'styled-components';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

export const SidebarMenu = styled(motion.div)`
    display: flex;
    flex-direction: column;
    position: relative;
    padding-top: 3rem;
    background:${(props)=>props.theme.colors.sidebarBg};
    padding-right: 1rem;
    transition: all 300ms ease;
    @media (max-width: 768px) {
        position: absolute; 
        z-index: 8;
        width: 55%;
        /* padding-right: 1rem; */
        height: 100%;
        left: ${({ $isExpanded }) => ($isExpanded ? "0%" : "-60%")};
    }    
`;

export const Bars = styled.div`
    display: none;
    @media (max-width: 768px) {
        display: flex;
        position: fixed;
        top: 0.5rem;
        left: ${({ $isExpanded }) => ($isExpanded ? "4%" : "2%")};
        /* left: ${(props) => props.isExpanded ? "60%" : "5%"}; */
        background:${(props)=>props.theme.colors.sidebarBg}; 
        padding:0.625rem;
        border-radius: 10px;
        z-index: 9;
    }
`;

export const Logo = styled.div`
    display: flex;
    height: 5rem;
    font-weight: bold;
    font-size: 22px;
    gap: 1rem;
    align-items: center;
    justify-content: center;
    height: 4%;
    & > span > span {
        color: ${(props)=>props.theme.colors.primaryBg};
    }
    & > img {
        width: 3rem;
        height: 3rem;
    }
    @media (max-width: 1200px) {
      display: none;
    }
    @media (max-width: 768px) {
      display: flex;
    }
`;

export const Menu = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
`;

export const MenuItem = styled(Link)`
    display: flex;
    align-items: center;
    gap: 1rem;
    height: 2.5rem;
    margin-left: ${({ $active }) => ($active ? "0" : "2rem")}; 
    position: relative;
    transition: all 300ms ease;
    border-radius: 0.7rem;
    font-size: 14px;
    background: ${({ $active }) => ($active ? (props)=>(props.theme.colors.activeItem) : "none")};
    &:hover {
        cursor: pointer;
    }
    &:last-child {
        position: absolute;
        bottom: 2.3rem;
        width: 100%;
    }
    ${props => props.$active && css`
        &:before {
            content: "";
            width: 8px;
            height: 100%;
            background: ${(props)=>props.theme.colors.borderItem};
            margin-right: calc(1rem - 8px);
        }
    `}
    
    @media (max-width: 1200px) {
        & > span{
            display: none;
        }
    }
    @media (max-width: 768px) {
        & > span{
            display: block;
        }
        &:last-child {
            position: relative;
            margin-top: 6rem;
        }
    }
`;
