import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';
import { ExternalLink } from 'react-external-link';

export const FooterContainer = styled.div`
  height: 200px;
  background: #000;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  display: flex;
  
`;

export const IconWrapper = styled(ExternalLink)`
  margin: 5rem 2rem 0 2rem;
  text-align: center;
  text-decoration: none;
  width: 60px;
  height: 60px;

  &:hover {
    color: #DD39BB;
    transition: 0.3s ease-in-out;
  }
  
`;

export const Github = styled(FaIcons.FaGithub)`
  color: #FFF;
  font-size: 25px;

  &:hover {
    color: #DD39BB;
    font-size: 27px;
    
  }
`;

export const LinkedIn = styled(FaIcons.FaLinkedin)`
  color: #FFF;
  font-size: 25px;

  &:hover {
    color: #DD39BB;
    font-size: 27px;
    
  }
`;

export const IconLabel = styled.p`
  color: #FFF;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 300;
  font-size: 15px;

  &:hover {
    color: #DD39BB;
    transition: 0.3s ease-in-out;
  }
`;

export const Creator = styled.p`
  color: #5C5C5C;
  font-size: 13px;
  font-weight: 200;
  margin: 2rem;
  padding-bottom: 1rem;
`;
