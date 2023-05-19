import React, {useState} from "react";
import styled from 'styled-components/macro';
import { IoMdClose } from 'react-icons/io';
import Logoz from '../images/zelarlogo.png'
import { HiOutlineBars3BottomRight } from 'react-icons/hi2';
// import { Link } from 'react-router-dom';
import { menuData } from '../data/MenuData';

import './global.css';
import { Link } from "react-router-dom";

const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.2rem;
  padding: 0 30px;
  background-color: #222;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.25);
  width: 95%;
  height: 80px;
  border-radius: 13px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translate(-50%);
  z-index: 99;
`;

const Logo = styled.h1`
  color: #fff;
  justify-self: start;
  cursor: pointer;
`;

const NavMenu = styled.ul``;

const NavMenuLink = styled(Link)`
text-decoration: none;
color: #fff;
padding: 0.7rem 1rem;
white-space: nowrap;

&: hover{
  background: rgb(80, 80, 238);
    border-radius: 4px;
    transition: all 0.2s ease-in-out;
}

@media screen and (max-width: 768px) {

  display: block;
  widows: 100%;
  padding: 2rem 0;
  color: #222;

      &:hover{
        background-color: rgba(255, 255, 255, 0.25);
        backdrop-filter: blur(20px);
      }
}

`;



const ResponsiveMenu = styled.div`  
    display: none;

    @media screen and (max-width: 768px) {
      display: block;
    }

`;

const MenuBars = styled(HiOutlineBars3BottomRight)`
  color: #fff;
`;

const CloseIcon = styled(IoMdClose)`
  color: #fff;
`;

const Navbar = () => {

  // Responsive Menu Class
  const [menuClick, setMenuClick] = useState(false);
  const handleClick = () => {
    if (menuClick !== true) {
      setMenuClick(true);
    } else {
      setMenuClick(false);
    }
  }




  return (
    <Nav>
        <Logo><img height={60} width={250} src={Logoz} alt="Logo Here"/> </Logo>
        <ResponsiveMenu>
          <i onClick={handleClick}>
            {menuClick? <CloseIcon /> : <MenuBars />}
          </i>
          </ResponsiveMenu>
        <NavMenu className={menuClick? 'nav-menu active' : 'nav-menu'}>
            {menuData.map((item, index) => (
                        <NavMenuLink key={index} to={item.link}>{item.title}</NavMenuLink>                
            ))}            
        </NavMenu>
    </Nav>
  )
}

export default Navbar;