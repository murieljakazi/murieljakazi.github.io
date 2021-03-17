import styled from 'styled-components';
import { Link as LinkS } from 'react-scroll';
import * as RiIcons from 'react-icons/ri';

export const HomeContainer = styled.div`
  background: #0C0C0C;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 800px;
  position: relative:
  z-index: 
  `;
  
//  might add to aboutContainer later padding: 0 30px;

export const HomeBg = styled.div`
  position: absolute:
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;

`;

export const ImageBg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  background: #232A34;
  
`;

export const HomeContent = styled.div`
  z-index: 3;
  max-width: 1200px;
  padding: 8px 24px;
  position: absolute;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 480px) {
    padding: 8px 0px;
  }
`;

export const HomeGreet = styled.h1`
  color: #DD39BB;
  font-size: 18px;
  font-weight: 500;
  padding-left: 20px;
  width: 160px;
  line-height: 0.1em;

  @media screen and (max-width: 768px) {
    font-size: 16px;
  }

  @media screen and (max-width: 480px) {
    font-size: 14px;
  }

`;

export const HomeGreetText = styled.span`
  padding-left: 10px;
  background: #;
`;

export const HomeGroup = styled.div`
  display: flex;
  justify-content: space-between;
  width: 800px;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    width: 500px;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    width: 350px;
  }
`;

export const HomeP = styled.p`
  color: #FFF;
  margin: 1rem;
  font-family: 'Libre Baskerville', serif;
  font-size: 46px;
  font-weight: 300;

  @media screen and (max-width: 768px) {
    font-size: 40px;
  }

  @media screen and (max-width: 480px) {
    font-size: 30px;
  }
`;

export const LinkGrp = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    flex-direction: row;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
    align-items: center;
    width: 100%;

  }
`;

export const SiteLink = styled(LinkS)`
  color: #FFF;
  width: 200px;
  border: 2px solid #FFF;
  padding: 1rem;
  margin: 1em;  
  text-align: center;
  text-transform: uppercase;
  font-weight: 400;
  font-family: 'Encode Sans Expanded', sans-serif;

  &:hover {
    background: #FFF;
    color: #000;
    font-weight: bold;
    transition: 0.5s ease-in;
  }

  @media screen and (max-width: 480px) {
    width: 285px;
  }
`;

export const HomePromptBtn = styled.div`
  width: 150px;
  display: flex;
  margin-left: 32px;

  @media screen and (max-width: 480px) {
    margin-top: 2rem
  }
`;

export const ArrowDown = styled(RiIcons.RiArrowDownSLine)`
  color: #DD39BB;
  font-size: 24px;
  margin-left: 0.5rem;
`;

export const Button = styled(LinkS)`
  color: #FFF;
`;
