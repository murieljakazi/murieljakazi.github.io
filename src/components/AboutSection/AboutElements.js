import styled from 'styled-components';

export const AboutContainer = styled.div`
  height: 700px;
  background: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 3rem;  
  
  @media screen and (max-width: 768px) {
    height: 900px;
  }

  @media screen and (max-width: 480px) {
    height: 1000px;
  }
`;

export const AboutPreTitle = styled.h2`
  color: #CB40AE;
  text-transform: uppercase;
  font-family: 'Encode Sans Expanded', sans-serif;
  font-weight: 600;
  font-size: 20px;
  padding: 0.5rem
`;

export const AboutMainTitle = styled.h3`
font-family: 'Libre Baskerville', serif;
font-size: 46px;
padding-bottom: 2rem;
`;

export const AboutSub = styled.p`
  font-size: 20px;
  font-weight: 400;
  font-family: 'Encode Sans Expanded', sans-serif;
`;

export const AboutRule = styled.span`
  width: 200px;
  margin-top: 4rem;
  border-bottom: 0.5px solid #E0E0E0;
`;

export const AboutDetails = styled.div`
  display: flex;
  justify-content: space-around;

  @media screen and (max-width: 768px) {
    flex-direction: column;
  }

  @media screen and (max-width: 480px) {
    flex-direction: column;
  }
  `;
  
  export const AboutDescription = styled.div`
  display: flex;
  flex-direction: column;
  width: 45%;
  margin: 4rem;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    width: 90%;
    margin: 1rem;
  }

  @media screen and (max-width: 480px) {
    width: 100%;
    margin: 0;
    padding: 0;
    margin-bottom: 3rem;

  }
  `;

export const DescriptionTitle = styled.span`
  padding: 1rem;
  font-size: 20px;

  @media screen and (max-width: 480px) {
    padding-left: 1rem;
  }
`;
export const DescriptionDetails = styled.p`
  color: #5C5C5C;
  font-size: 21px;
  font-family: 'Cormorant Garamond', serif;
  padding: 1rem;

  @media screen and (max-width: 768px) {
    font-size: 20px;
  }

  @media screen and (max-width: 480px) {
    font-size: 18px;
  }
`;

export const SkillsGroup = styled.div`
  display: flex;
  flex-wrap: wrap;

`;

export const SkillsBadgeWrapper = styled.div`
  display: flex;
  background: #F1F1F1;
  border-radius: 2px;
  width: fit-content;
  margin: 0.5rem;
  height: 2.2rem;
  align-items: center;
  padding: 1rem;
`;

export const SkillsBadge = styled.p`
  font-size: 12px;
  font-weight: 300;
  font-family: 'Encode Sans Expanded', sans-serif;
  text-transform: uppercase;

  @media screen and (max-width: 480px) {
    font-size: 10px;
  }
`;




