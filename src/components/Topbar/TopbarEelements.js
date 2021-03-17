import {Link as LinkS} from 'react-scroll';
import styled from 'styled-components';
import * as FaIcons from 'react-icons/fa';


export const TopbarContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 50%;
  background: #0D0D0D;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
  opacity:   ${({ isOpen }) => (isOpen ? '100%' : '0')};
  top: ${({ isOpen }) => (isOpen ? '0' : '-100%')}
`;

export const CloseIcon = styled(FaIcons.FaTimes)`
  color: #FFF;
`;

export const Icon = styled.div`
position: absolute;
top: 1.2rem;
right: 1.5rem;
background: transparent;
font-size: 2rem;
font-weight: light;
cursor: pointer;
outline: none;
`;

export const TopbarWrapper = styled.div`
  color: #FFF;
`;

export const TopbarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 8px);
  text-align: center;

  @media screen and (max-width: 768px) {
    grid-template-rows: repeat(6, 6px);
    margin: 1rem;

  }

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 6px);
    margin: 1rem;
  }
`;

export const TopbarLink = styled(LinkS)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #FFF;
  cursor: pointer;

  &:hover {
      color: #DD39BB;
      transition: 0.2s ease-in-out;
  }

  @media screen and (max-width: 768px) {
    font-size: 1.2rem;
    font-weight: 300;
  }

  @media screen and (max-width: 480px) {
    font-size: 1rem;
    font-weight: 300;
    font-family: 'Encode Sans Expanded', sans-serif;
    padding: 1rem;
    margin: 1rem;
  }
`;