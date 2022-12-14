import { FaBars } from "react-icons/fa";
import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    background: #043263;
    height: 85px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0.2rem calc((100vw - 1000px) / 2);
    z-index: 12;
`;
export const NavLogo = styled(Link)`
  cursor: pointer;
  color: #fff;
  font-size: 2rem;
  text-decoration: none;

`;

export const NavLink = styled(Link)`
color: #f4f4f4;
display: flex;
align-items: center;
text-decoration: none;
padding: 0 1rem;
height: 100%;
cursor: pointer;
&:hover {
  color: white;
}
`;

export const Bars = styled(FaBars)`
  display: none;
  color: #fff;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-right: -24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;

  @media screen and (max-width: 768px) {
    display: none;
  }
  
`;

export const NavBtnLink = styled(Link)`
  background: transparent;
  padding: 10px 22px;
  color: #fff;
  outline: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  margin-left: 24px;
  background-color:#028484;
  &:hover {
    transition: all 0.2s ease-in-out;
    background: #2DCCCD;
    color: #ffffff;
  }
`;