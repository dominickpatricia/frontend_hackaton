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
                  activeStyle={{ color:'black' }}
                >
                    PERSONAS
                </NavLink>
                <NavLink 
                  to="/about"
                  activeStyle={{ color: 'black' }}
                >
                    EMPRESAS
                </NavLink>
                <NavLink 
                  to="/products/:category"
                  activeStyle={{ color: 'black' }}
                >
                    Obtén tu Tarjeta de Crédito
                </NavLink>|
                 <NavLink 
                  to="/product/:id" 
                  activeStyle={{ color: 'black' }}
                >
                    Abre tu cuenta
                </NavLink>  
                <NavBtn>
                    <NavBtnLink to="/sign-up">Banca por Internet</NavBtnLink>
                </NavBtn>
                <NavLink
                  to="/sigin"
                  activeStyle={{ color: 'black' }}
                >
                    Menú
                </NavLink>
                
            </NavMenu>
           </Nav> 
        </>
    );
};
export default Navbar;