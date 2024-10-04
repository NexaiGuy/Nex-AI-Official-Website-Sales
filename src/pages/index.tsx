import * as React from "react";
import styled from "styled-components";
import { useWindowSize } from "react-use";
import "../components/layout.css";
import 'animate.css';
import Header from "/src/components/header"; 

import CourseCard from "../components/cards/CourseCard";
import GridSection from "../components/sections/GridSection";
import ClickProjects from "../components/sections/ClickProjects";
import GridProjects from "../components/sections/GridProjects";
import BioSection from "../components/sections/BioSection";
import PurchaseButton from "../components/buttons/PurchaseButton";
import { useEffect } from "react";

const IndexPage = () => {
  const { width } = useWindowSize();

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
      <ContainerWrapper>
        <HeroWrapper id="my-background">
          <CourseCard />
          <TextWrapper>
            <LogoWrap>
              <LogoCon></LogoCon>
              <LogoCon2></LogoCon2>
            </LogoWrap>
            <Title className="animate__animated animate__lightSpeedInRight illustration">
              <br /> <br />
              <HoverableWord></HoverableWord>
              <HoverableWord>Automate Your Content Workflow</HoverableWord>
            </Title>
            <PurchaseButton />
            <SmallText>
              “From content creation to publication, Nex AI connects your company’s data with the power of artificial intelligence for a seamless, automated process.”
            </SmallText>
          </TextWrapper>
        </HeroWrapper>
        <div id="LearnHow"/>
        <ContentWrapper>
          <ClickProjects />
        </ContentWrapper>
        <div id="HowItWorks" />
        <br />
        <Divider />
        <GridSection />
        <div id="YourControl" />
        <Divider2 />
        <GridProjects />
        <div id="About" />
        <Divider3 />
        <BioSection />
      </ContainerWrapper>
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

export default IndexPage;

const Footer = styled.footer`
  background: rgba(183, 36, 229, 0.1);
  padding: 40px 20px;
  text-align: center;
  color: #fff;
  margin-top: 270px;
  border-top: 2px solid #B724E5; 
  border-bottom: 2px solid #B724E5; 
  box-shadow: 0px -8px 16px rgba(183, 36, 229, 0.2), 0px 8px 16px rgba(183, 36, 229, 0.2);
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
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

const Wrapper = styled.div`
  background: linear-gradient(180.44deg, #0C0D31 25.57%, #000000);
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  height: 7000px;
`;

const ContainerWrapper = styled.div`
  margin-top: 90px;
`;

const ContentWrapper = styled.div`
  overflow: hidden;
`;

const TextWrapper = styled.div`
  position: relative;
  display: grid;
  gap: 20px;
  margin-top: -142px;
  margin-left: 20px;

  @media (max-width: 768px) {
    justify-items: center;
    text-align: center;
    margin-left: 0;
    margin-top: 36px;
  }
`;

const HeroWrapper = styled.div`
  display: grid;
  max-width: 1234px;
  grid-template-columns: 360px auto;
  gap: 60px;
  padding: 200px 20px 0px;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 60px;

  .courseCard {
    margin-top: 74px;
  }

  @media (max-width: 780px) {
    grid-template-columns: 1fr;
    justify-items: center;
    padding-top: 150px;
  }
`;

const LogoWrap = styled.div`
  display: flex;
  margin-left: -28px;

  @media (max-width: 1920px) {
    margin-left: 0;
    margin-top: 0;
  }

  @media (max-width: 768px) {
    margin-left: 0;
    margin-top: 50px;
  }

  @media (max-width: 480px) {
    margin-top: 30px;
  }
`;

const Title = styled.h1`
  max-width: 500px;
  font-size: 40px;
  line-height: 72px;
  margin-top: -40px;
  color: #ffffff;
  mix-blend-mode: normal;
  text-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);
  animation-duration: 1.4s;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 40px;
    line-height: 50px;
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 32px;
    line-height: 40px;
  }
`;

const HoverableWord = styled.span`
  display: inline-block;
  transition: transform 0.5s ease;

  &:hover {
    transform: translateY(-10px);
  }

  box-shadow: 0px 0px 105px 45px rgba(251, 255, 138, 0.03);
  border-radius: 7px;
`;

const SmallText = styled.p`
  max-width: 285px;
  font-size: 13px;
  line-height: 200%;
  color: #9EE0EC;
  animation: HeroAnimation 3s ease;

  @media (max-width: 768px) {
    text-align: center;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const Divider = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 54px auto;

  @media (max-width: 768px) {
    margin: 100px auto 20px;
  }

  @media (max-width: 480px) {
    margin: 80px auto 16px;
  }
`;

const Divider2 = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 70px auto 32px;
  margin-bottom: 93px;

  @media (max-width: 768px) {
    margin: 60px auto 20px;
  }

  @media (max-width: 480px) {
    margin: 60px auto 16px;
  }
`;

const Divider3 = styled.div`
  width: 300px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 88px auto 32px;

  @media (max-width: 768px) {
    margin: 60px auto 20px;
  }

  @media (max-width: 480px) {
    margin: 40px auto 16px;
  }
`;

const LogoCon = styled.div`
  transition: transform 0.6s ease;
  transform-style: preserve-3d;

  &:hover {
    transform: translateY(-20px);
  }
`;

const LogoCon2 = styled.div`
  transition: transform 0.6s ease;
  transform-style: preserve-3d;

  &:hover {
    transform: translateY(-20px);
  }
`;
