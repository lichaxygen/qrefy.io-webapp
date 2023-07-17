import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { FaBars } from 'react-icons/fa'
import { IconContext } from 'react-icons';
import imgLogo from '../../assets/images/vite.svg';
import imgTitle from '../../assets/images/react.svg';
import {HeaderBar, TitleContainer, Logo, LogoImg, Title, TitleImg, List, ItemList, BoxButton} from './NavBarStyle.js';
import { BILLING, DASHBOARD, PROFILE, SETTINGS } from '../../config/paths';

// Links de barra de navegación scroll a sección
function scrollToElement(element, top){
    
};

// Función del Componente
function NavBar (){

    const navigate = useNavigate();

    const theme = {content: ""};
    
    const [showMobileMenu, setShowMobileMenu] = useState(false);
    
    return(
        <HeaderBar id="headerBar">
            <IconContext.Provider value={{ style: {fontSize: "2em"} }}>
                <BoxButton onClick={() => setShowMobileMenu(!showMobileMenu)}>
                    <FaBars></FaBars>
                </BoxButton>
                
                <TitleContainer>
                    <Logo>
                        <LogoImg src={imgLogo} alt="logo"/>
                    </Logo> 
                    <Title>
                        <TitleImg src={imgTitle} alt="title"/>
                    </Title>
                </TitleContainer>

                <List open={showMobileMenu}>
                    <ItemList onClick={()=>{navigate(DASHBOARD); setShowMobileMenu(!showMobileMenu) }}>Dashboard</ItemList>
                    <ItemList onClick={()=>{navigate(PROFILE); setShowMobileMenu(!showMobileMenu)}}>Perfil</ItemList>
                    <ItemList onClick={()=>{navigate(SETTINGS); setShowMobileMenu(!showMobileMenu)}}>Ajustes</ItemList>
                    <ItemList onClick={()=>{navigate(BILLING); setShowMobileMenu(!showMobileMenu)}}>Facturación</ItemList>
                </List>  
            </IconContext.Provider>     
        </HeaderBar>
    );
}

export default NavBar