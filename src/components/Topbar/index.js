import React from 'react';
import { TopbarContainer, Icon, CloseIcon, TopbarWrapper, TopbarMenu, TopbarLink } from './TopbarEelements'

function Topbar({ toggle, isOpen }) {
    return (
        <TopbarContainer isOpen={isOpen} onClick={toggle}>
          <Icon onClick={toggle}>
            <CloseIcon />
          </Icon>
          <TopbarWrapper>
              <TopbarMenu>
                  <TopbarLink to="home" onClick={toggle}>Home</TopbarLink>
              </TopbarMenu>
              <TopbarMenu>
                  <TopbarLink to="about" onClick={toggle}>About</TopbarLink>
              </TopbarMenu>
              <TopbarMenu>
                  <TopbarLink to="projects" onClick={toggle}>Projects</TopbarLink>
              </TopbarMenu>
              <TopbarMenu>
                  <TopbarLink to="contact" onClick={toggle}>Contact</TopbarLink>
              </TopbarMenu>
          </TopbarWrapper>
        </TopbarContainer>
    )
}

export default Topbar;
