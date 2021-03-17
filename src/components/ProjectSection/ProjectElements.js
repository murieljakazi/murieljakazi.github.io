import styled from 'styled-components';
import { ExternalLink } from 'react-external-link';

export const ProjectContainer = styled.div`
  height: 1200px;
  background: #F1F1F1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem; 
  
  @media screen and (max-width: 768px) {
    height: 1700px;
  }

  @media screen and (max-width: 480px) {
    height: 1800px;
  }
`;

export const ProjectCards = styled.div`
  display: flex;
  padding: 2.5rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    padding:0;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    padding: 0;
  }
`;

export const ProjectCard = styled.div`
  width: 48%;
  height: 100%;
  background: #FFF;
  margin: 1.5rem;
  padding: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (max-width: 768px) {
    width: 90%;
  }

  @media screen and (max-width: 480px) {
    margin: 0;
    width: 335px;
    margin-bottom: 1rem;
    height: 700px;
    padding: 1.5rem;
  }
`;

export const ProjectImg = styled.img`
  height: 250px;
  width: 90%;
  border: 1px solid #DADADA;

@media screen and (max-width: 480px) {
  width: 100%;
  height: 210px;
}
`;

export const ProjectTitle = styled.h4`
  font-size: 22px;
  margin: 2rem;
  padding: 0.5rem;
  text-align: center;
  
`;

export const ProjectDescription = styled.p`
  height: 100px;
  color: #5C5C5C;
  font-size: 20px;
  font-family: 'Cormorant Garamond', serif;

  @media screen and (max-width: 480px) {
    margin: 0;
    height: 250px;
    text-align: center;
    font-size: 18px;
  }
`;

export const ProjectLink = styled(ExternalLink)`
  text-decoration: none;
  color: #FFF;
  background: #DD39BB;
  width: 100%;
  text-align: center;
  margin: 2rem 0 0 0;
  height: 3.2rem;
  line-height: 3.2em;
  justify-content: center;

  @media screen and (max-width: 480px) {
    margin: 2rem;
  }
  `;

export const ProjectLinkText = styled.span`
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 500;
  font-size: 13px;
`;

