import styled from 'styled-components';

export const ContactContainer = styled.div`
height: 800px;
background: #202425;
display: flex;
flex-direction: column;
align-items: center;
padding: 3rem; 

@media screen and (max-width: 480px) {
  padding: 1rem;
}
`;

export const ContactMainTitle = styled.h3`
font-family: 'Libre Baskerville', serif;
font-size: 46px;
padding-bottom: 2rem;
color: #FFF;

@media screen and (max-width: 768px) {
  font-size: 40px;
}

@media screen and (max-width: 480px) {
  font-size: 30px;
}
`;

export const ContactSubTitle = styled.p`
  color: #5C5C5C;
  font-size: 20px;
  font-weight: 400;
  font-family: 'Encode Sans Expanded', sans-serif;
  text-align: center;

  @media screen and (max-width: 768px) {
    font-size: 18px;
  }

  @media screen and (max-width: 480px) {
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
`;

export const FormConatainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 40%;
  margin: 4rem;

  @media screen and (max-width: 768px) {
    width: 80%;
    margin: 2rem;
  }
`;

export const Form = styled.form`
  width: 100%;

  @media screen and (max-width: 768px) {
    margin-left: -20px;
  }

  @media screen and (max-width: 480px) {
    margin-left: ;
  }
`;

export const Input = styled.input`
  width: 100%;
  height: 3rem;
  margin: 1rem;
  outline: none;
  background: transparent;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style:hidden;
  border-bottom: 1px solid grey;
  color: #FFF;
  font-weight: 500;
  font-family: 'Encode Sans Expanded', sans-serif;

  &:focus {
    border-bottom: 2px solid #FFF;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 480px) {
    width: 280px;
  }
`;

export const MessageInput = styled.textarea`
  width: 100%;
  height: 10rem;
  margin: 1rem;
  outline: none;
  background: transparent;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style:hidden;
  border-bottom: 1px solid grey;
  color: #fff;
  font-weight: 500;
  font-family: 'Encode Sans Expanded', sans-serif;

  &:focus {
    border-bottom: 2px solid #FFF;
    transition: 0.3s ease-in;
  }

  @media screen and (max-width: 480px) {
    width: 280px
  }
`;

export const SendButton = styled.input`
  height: 3rem;
  width: 100%;
  align-items: center;
  margin-left: 15px;
  border-top-style: hidden;
  border-right-style: hidden;
  border-left-style: hidden;
  border-bottom-style:hidden;
  background: #DD39BB;
  color: #FFF;
  font-weight: 500;
  font-family: 'Encode Sans Expanded', sans-serif;

  @media screen and (max-width: 480px) {
    width: 280px
  }
`;