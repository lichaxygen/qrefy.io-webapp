import React from 'react'
import { Outlet } from 'react-router-dom'
import { Container } from './PageContainerStyle.js'
/* import NavBar from '../navBar/NavBar.jsx' */
import Sidebar from '../navBar/SideBar.jsx'

function PageContainer() {
    return (
        <Container>
            <Sidebar/>
            <Outlet/>
        </Container>
    )
}

export default PageContainer