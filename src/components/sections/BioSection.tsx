import * as React from "react";
import styled from "styled-components";

export default function CompanyOverview() {
  return (
    <Wrapper>
      <Title>About Nex AI</Title>
      <BodyText>
        Founded by Kevin Blancaflor, Nex AI was created to help businesses of all sizes automate and optimize their content workflows.
        Our mission is to make content management easier, faster, and more effective by leveraging AI and automation technology.
      </BodyText>
      <Divider />
      <TeamTitle>Meet Our Team</TeamTitle>
      <TeamBodyText>
        Our team is composed of skilled professionals with backgrounds in tech, AI, and content management. Together, we aim to deliver
        innovative solutions to improve your business operations.
      </TeamBodyText>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  margin-top: 160px;
  text-align: center;
  gap: 20px;
  padding: 50px 20px;
  font-family: "Rubik", sans-serif; 
  font-optical-sizing: auto;
  font-weight: 400; /* Default weight */
  font-style: normal;
  background: rgba(183, 36, 229, 0.1); /* Lightened background */
  border-radius: 20px;
  box-shadow: 0px 16px 32px rgba(183, 36, 229, 0.2), 0px 0px 8px 2px rgba(180, 35, 227, 0.5); /* Added blurry border */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700; /* Emphasis */
  line-height: 130%;
  text-transform: uppercase;
  color: #24B7A5; /* Contrasting color with different hue (blue-green) */
  margin-bottom: 20px;
  border-bottom: 2px solid #B724E5;
  padding-bottom: 10px;
  background: rgba(36, 183, 165, 0.1); /* Light background for title */
  border-radius: 10px;
  transition: transform 0.6s ease;
  box-shadow: 0px 0px 8px 2px rgba(180, 35, 227, 0.5); /* Blurry border for the title */

  &:hover {
    transform: rotateY(360deg); /* Rotate on hover */
    transition: transform 0.5s ease-in-out;
  }
`;

const BodyText = styled.p`
  max-width: 800px;
  font-size: 1.2rem;
  line-height: 1.6;
  color: #fff; /* Lighter shade for the body text */
  margin: 0 auto;
  padding: 0 20px;
  font-family: "Rubik", sans-serif; 
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const TeamTitle = styled.h2`
  font-size: 2rem;
  font-weight: 700; /* Same font weight as the Title */
  line-height: 130%;
  text-transform: uppercase;
  color: #24B7A5; /* Same color as the Title for consistency */
  margin-bottom: 20px;
  border-bottom: 2px solid #B724E5;
  padding: 0 40px 0 40px;
  background: rgba(36, 183, 165, 0.1); /* Light background for subtitle */
  border-radius: 10px;
  box-shadow: 0px 0px 8px 2px rgba(180, 35, 227, 0.5); /* Blurry border for the Team title */
`;

const TeamBodyText = styled.p`
  max-width: 800px;
  font-size: 1.1rem;
  line-height: 1.6;
  color: #fff; /* Lighter shade for the body text */
  margin: 0 auto;
  padding: 0 20px;
  font-family: "Rubik", sans-serif; 
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const Divider = styled.div`
  width: 270px;
  height: 0.5px;
  background: rgba(255, 255, 255, 0.3);
  margin: 32px auto;
`;