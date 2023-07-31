import { useState } from "react";
import LogoImg from "../../assets/images/vite.svg";
import { UilBars, UilEstate, UilClipboardAlt, UilBill, UilUsersAlt, UilSetting, UilSignOutAlt, UilMailbox, UilQrcodeScan, UilPlusCircle } from "@iconscout/react-unicons";
import { SidebarMenu, Bars, Logo, Menu, MenuItem } from "./SideBarStyle.js";
import { APIDOCS, BILLING, CONTACT, CREATEQR, DASHBOARD, PROFILE, SETTINGS } from "../../config/paths.js";

// Sidebar Data
const SidebarData = [
    {
        icon: UilPlusCircle,
        heading: "Crear QR",
        path: CREATEQR,
    },
    {
        icon: UilSetting,
        heading: 'Ajustes',
        path: SETTINGS,
    },
    {
        icon: UilUsersAlt,
        heading: "Perfil",
        path: PROFILE,
    },
    {
        icon: UilBill,
        heading: "Facturación",
        path: BILLING,
    },
    {
        icon: UilMailbox,
        heading: "Contacto",
        path: CONTACT,
    },
    {
        icon: UilClipboardAlt,
        heading: "API docs",
        path: APIDOCS,
    },
    {
        icon: UilClipboardAlt,
        heading: "Login",
        path: '/login',
    },
];

const Sidebar = () => {
    const [selected, setSelected] = useState(0);

    const [expanded, setExpaned] = useState(true)

    const sidebarVariants = {
        true: {
            left : '0'
        },
        false:{
            left : '-60%'
        }
    }

    function animateExpanded (){
        
    }

    console.log(window.innerWidth)

    /* en SidebarMenu va variants={sidebarVariants} animate={window.innerWidth<=768?`${expanded}`:''} */

    return (
        <>
            <Bars $isExpanded={expanded} onClick={()=>setExpaned(!expanded)}>
                <UilBars />
            </Bars>
            <SidebarMenu $isExpanded={expanded}>
                
                <Logo>
                    <img src={LogoImg} alt="logo" />
                    <span>Qrefy<span>.io</span></span>
                </Logo>

                <Menu>
                    {SidebarData.map((item, index) => {
                        return (
                            <MenuItem $active={selected === index ? true : false} key={index} to={item.path} onClick={() => setSelected(index)}>
                                <item.icon />
                                <span>{item.heading}</span>
                            </MenuItem>
                        );
                    })}
                    {/* signoutIcon */}
                    <MenuItem>
                        <UilSignOutAlt />
                        <span>Cerrar sesión</span>
                    </MenuItem>
                </Menu>
            </SidebarMenu>

        </>
  );
};

export default Sidebar;