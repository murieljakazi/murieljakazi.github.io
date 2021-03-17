import styled from 'styled-components';

export const PreTitle = styled.h2`
  color: #DD39BB;
  text-transform: uppercase;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 600;
  font-size: 20px;
  padding: 0.5rem;

  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

export const MainTitle = styled.h3`
font-family: 'Libre Baskerville', serif;
font-size: 46px;
padding-bottom: 2rem;

@media screen and (max-width: 768px) {
  font-size: 40px;
}

@media screen and (max-width: 480px) {
  font-size: 30px;
}
`;

export const SubTitle = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Encode Sans Expanded', sans-serif;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
`;

export const Rule = styled.span`
  width: 200px;
  margin-top: 4rem;
  border-bottom: 0.5px solid #E0E0E0;
  
  @media screen and (max-width: 480px) {
    margin-bottom: 4rem;
  }
`;