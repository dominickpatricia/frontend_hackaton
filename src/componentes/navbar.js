import React from "react";
import image from "./Logo_BBVA.svg"
import {
  Nav,
  NavLogo,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./navbarStyle";



const Navbar = () => {
    return (
        <>
           <Nav>
            <NavLogo to="/Tiendas">
            <img src={image} style={{ height: 100, width: 100, paddingTop:10  }} />
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavLink 
                  to="/"
                  activeStyle={{ color:'white' }}
                >
                    PERSONAS
                </NavLink>
                <NavLink 
                  to="/about"
                  activeStyle={{ color: 'white' }}
                >
                    EMPRESAS
                </NavLink>
                <NavLink 
                  to="/products/:category"
                  activeStyle={{ color: 'white' }}
                >
                    Obtén tu Tarjeta de Crédito
                </NavLink>
                 <NavLink 
                  to="/product/:id" 
                  activeStyle={{ color: 'white' }}
                >
                    Abre tu cuenta
                </NavLink>  
                
                <NavBtn>
                    <NavBtnLink to="/register">Banca por Internet</NavBtnLink>
                </NavBtn>
                <NavLink
                  to="/sigin"
                  activeStyle={{ color: 'white' }}
                >
                    Menú
                </NavLink>
                
            </NavMenu>
           </Nav> 
        </>
    );
};
export default Navbar;