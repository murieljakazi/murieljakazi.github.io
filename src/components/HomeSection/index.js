import React from 'react';
import picture from '../../images/bgpic5.png'
import { HomeContainer, HomeBg, ImageBg, HomeContent, HomeGreet, HomeGreetText, HomeGroup, HomeP, LinkGrp, SiteLink, HomePromptBtn, Button, ArrowDown } from './HomeElements';

const Home = () => {
    return (
        <HomeContainer id="home">
            <HomeBg>
                <ImageBg  src={picture}/>
            </HomeBg>
            <HomeContent>
                <HomeGreet>
                    <HomeGreetText>
                      HI THERE
                    </HomeGreetText>
                </HomeGreet>
                <HomeGroup>
                  <HomeP>I am Muriel Jakazi. I am a Web Developer</HomeP>
                  <LinkGrp>
                    <SiteLink to="projects" smooth={true} duration={800}>My Projects</SiteLink>
                    <SiteLink to="about" smooth={true} duration={800}>More About Me</SiteLink>
                  </LinkGrp>
                </HomeGroup>
                <HomePromptBtn>
                    <Button to="about" smooth={true} duration={800}>
                        Scroll For More
                    </Button>
                    <ArrowDown />
                </HomePromptBtn>
            </HomeContent>
        </HomeContainer>
    )
}

export default Home;
