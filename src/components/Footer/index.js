import React from 'react';
import { FooterContainer, Github, IconLabel, IconWrapper, LinkedIn, IconContainer, Creator } from './FooterElements';

const Footer = () => {
    return (
        <>
            <FooterContainer>
                <IconContainer>
                <IconWrapper href="https://github.com/murieljakazi/">
                    <Github />
                    <IconLabel>Github</IconLabel>
                </IconWrapper>
                <IconWrapper href="https://www.linkedin.com/in/murieljakazi/">
                    <LinkedIn />
                    <IconLabel>Linkedin</IconLabel>
                </IconWrapper>
                </IconContainer>
                <Creator>Created by Muriel Jakazi   2021</Creator>
            </FooterContainer>
        </>
    )
}

export default Footer;
