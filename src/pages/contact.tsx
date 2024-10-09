import React, { useEffect } from "react";
import styled from "styled-components";
import Header from "../components/header";
import "../components/layout.css";
import 'animate.css';

const ContactPage: React.FC = () => {
  useEffect(() => {
    const scriptP5 = document.createElement("script");
    scriptP5.src = "https://cdnjs.cloudflare.com/ajax/libs/p5.js/1.4.0/p5.min.js";
    scriptP5.async = true;
    document.body.appendChild(scriptP5);

    const scriptTopology = document.createElement("script");
    scriptTopology.src = "https://cdn.jsdelivr.net/npm/vanta/dist/vanta.topology.min.js";
    scriptTopology.async = true;
    document.body.appendChild(scriptTopology);

    scriptTopology.onload = () => {
      if (window.VANTA) {
        window.VANTA.TOPOLOGY({
          el: "#my-background",
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          color: 0xc62ceb,
          backgroundColor: 0x80022
        });
      }
    };

    return () => {
      document.body.removeChild(scriptP5);
      document.body.removeChild(scriptTopology);
    };
  }, []);

  return (
    <Wrapper id="my-background">
      <Header />
      <ContactContainer>
        <Title className="animate__animated animate__fadeInUp">Contact Us</Title>
        <Description>
          Whether you have a question about our services or just want to say hi, feel free to reach out to us. We'll get back to you as soon as possible!
        </Description>
        <FormWrapper>
          <Form>
            <InputWrapper>
              <Label htmlFor="name">Your Name</Label>
              <Input type="text" id="name" name="name" placeholder="Enter your name" required />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="email">Your Email</Label>
              <Input type="email" id="email" name="email" placeholder="Enter your email" required />
            </InputWrapper>
            <InputWrapper>
              <Label htmlFor="message">Your Message</Label>
              <Textarea id="message" name="message" placeholder="Write your message here" required />
            </InputWrapper>
            <SubmitButton type="submit">Send Message</SubmitButton>
          </Form>
        </FormWrapper>
      </ContactContainer>
      <Footer>
        <FooterContent>
          <SocialLinks>
            <a href="https://x.com/Nex_AI_Official" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="https://www.linkedin.com/in/kev-b-4aaa39315/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>
            <a href="https://github.com/NexaiGuy" target="_blank" rel="noopener noreferrer">
              GitHub
            </a>
          </SocialLinks>
          <Copyright>
            &copy; {new Date().getFullYear()} Nex AI. All rights reserved.
          </Copyright>
        </FooterContent>
      </Footer>
    </Wrapper>
  );
};

export default ContactPage;

// Styled Components
const Wrapper = styled.div`
  background: linear-gradient(180.44deg, #0C0D31 25.57%, #000000);
  font-family: "Rubik", sans-serif;
  color: white;
  padding-top: 50px;
`;

const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 20px;
  color: #24B7A5;
  text-shadow: 0px 10px 20px rgba(36, 183, 165, 0.5);
`;

const Description = styled.p`
  font-size: 18px;
  margin-bottom: 40px;
  color: #9EE0EC;
  max-width: 600px;
`;

const FormWrapper = styled.div`
  width: 100%;
`;

const Form = styled.form`
  display: grid;
  gap: 20px;
`;

const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Label = styled.label`
  font-size: 14px;
  margin-bottom: 8px;
  color: rgba(255, 255, 255, 0.8);
`;

const Input = styled.input`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #24B7A5;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  outline: none;
  transition: all 0.3s ease;

  &:focus {
    border-color: #76d1f9;
  }
`;

const Textarea = styled.textarea`
  padding: 12px;
  font-size: 16px;
  border-radius: 8px;
  border: 1px solid #24B7A5;
  background: rgba(255, 255, 255, 0.1);
  color: white;
  outline: none;
  min-height: 150px;
  transition: all 0.3s ease;

  &:focus {
    border-color: #76d1f9;
  }
`;

const SubmitButton = styled.button`
  padding: 12px 24px;
  font-size: 16px;
  color: white;
  background-color: #24B7A5;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background-color: #76d1f9;
  }
`;

const Footer = styled.footer`
  background: rgba(183, 36, 229, 0.1);
  padding: 40px 20px;
  text-align: center;
  color: #fff;
  margin-top: 100px;
  border-top: 2px solid #B724E5; 
  border-bottom: 2px solid #B724E5; 
  box-shadow: 0px -8px 16px rgba(183, 36, 229, 0.2), 0px 8px 16px rgba(183, 36, 229, 0.2);
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 20px;

  a {
    color: #24B7A5; 
    text-decoration: none;
    font-size: 1.1rem;
    transition: color 0.3s ease;

    &:hover {
      color: #76d1f9; 
    }
  }
`;

const Copyright = styled.p`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
  margin-top: 20px;
`;
