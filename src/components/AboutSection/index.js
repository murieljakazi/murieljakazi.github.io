import React from 'react';
import { PreTitle, MainTitle, SubTitle, Rule } from '../AppElements'
import { AboutContainer, AboutDetails, AboutDescription, DescriptionTitle, DescriptionDetails, SkillsGroup, SkillsBadgeWrapper, SkillsBadge } from './AboutElements';
import { skills } from './skillsList';

const About = () => {
    return (
        <>
        <AboutContainer id="about">
          <PreTitle>About</PreTitle>
          <MainTitle>Personal Info</MainTitle>
          <SubTitle>Learn More About Me</SubTitle>
          <Rule></Rule>
          <AboutDetails>
              <AboutDescription>
                <DescriptionTitle>Hi!</DescriptionTitle>
                <DescriptionDetails>My name is Muriel Jakazi and I am a recently converted but passionate web developer. I enjoy creating beautiful websites and solving different industry problems using web technologies. </DescriptionDetails>
                <DescriptionDetails>Feel free to contact me for an internship, a job opportunity or just a chat. I would love to hear from you.</DescriptionDetails>
              </AboutDescription>
              <AboutDescription>
                <DescriptionTitle>My Skills</DescriptionTitle>
                  <SkillsGroup>
                    {skills.map( (skill) => {
                      return (
                      <SkillsBadgeWrapper key={skill}>
                        <SkillsBadge>{skill}</SkillsBadge>
                      </SkillsBadgeWrapper>
                      )
                    })}
                  </SkillsGroup>
              </AboutDescription>
          </AboutDetails>
        </AboutContainer>
        </>
    )
}

export default About;
