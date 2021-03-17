import React from 'react';
import emailjs from 'emailjs-com'
import { PreTitle } from '../AppElements';
import { ContactContainer, ContactMainTitle, ContactSubTitle, FormConatainer, Form,  Input, MessageInput, SendButton } from './ContactElements';
import{ init } from 'emailjs-com';

init("user_fOizF89mQogduJEYUF3zH");

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_vs7dgsj', 'template_xoknj15', e.target, 'user_fOizF89mQogduJEYUF3zH')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
  e.target.reset(); 
};

const Contact = () => {
    return (
        <>
          <ContactContainer id="contact">
            <PreTitle>Contact</PreTitle>
            <ContactMainTitle>Get in touch</ContactMainTitle>
            <ContactSubTitle>Fill out the from below and I'll get in touch with you as soon as possible</ContactSubTitle>
            <FormConatainer>
              <Form onSubmit={sendEmail}>
                <Input placeholder="Name" type="text" name="name" />
                <Input placeholder="Email" type="email" name="email" />
                <Input placeholder="Subject" type="text" name="subject" />
                <MessageInput placeholder="Message" name="message" />
                <SendButton value="Send Message" type="submit"/>
              </Form>
            </FormConatainer>
          </ContactContainer>  
        </>
    )
}

export default Contact;
