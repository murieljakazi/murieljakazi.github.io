import React from 'react';
import * as FaIcons from 'react-icons/fa'
import {Nav,
    NavbarContainer,
    NavLogo,
    MobileIcon,
    NavMenu,
    NavItem,
    NavLinks
} from './NavbarElements'

function Navbar({ toggle }) {
    return (
        <>
        <Nav>
            <NavbarContainer>
                <NavLogo to="/">MJ</NavLogo>
                <MobileIcon onClick={toggle}>
                    <FaIcons.FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="home" smooth={true} duration={800}>Home</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="about" smooth={true} duration={800}>About</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects" smooth={true} duration={800}>Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="contact" smooth={true} duration={800}>Contact</NavLinks>
                    </NavItem>
                </NavMenu>
            </NavbarContainer>
        </Nav>
        </>
    )
}

export default Navbar;
