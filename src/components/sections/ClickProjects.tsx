import * as React from "react";
import styled from "styled-components";

export default function OverviewNexAI() {
  return (
    <Wrapper>
      <Title>What is Nex AI?</Title>
      <BodyText>
        Nex AI is an automation solution designed to simplify your content management and publishing process.
        We build a custom system that allows companies to upload and manage their content just like in ‘Notion,’
        and integrate it with powerful AI tools like ChatGPT, Perplexity.ai, and platforms like Make.com to
        automate and optimize content across various channels.
      </BodyText>
      <FeaturesList>
        <li>Upload and organize content with ease.</li>
        <li>Automate content workflows with AI-driven tools.</li>
        <li>Gain full control over the content before it is published.</li>
        <li>Save time, effort, and resources by integrating everything in one place.</li>
      </FeaturesList>
      <CTAButton href="#HowItWorks">See How It Works</CTAButton>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 140px auto;
  margin-bottom: 70px;
  text-align: center;
  gap: 20px;
  padding: 50px 20px;
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
  background: rgba(183, 36, 229, 0.1); /* Lightened background */
  border-radius: 20px;
  box-shadow: 0px 16px 32px rgba(183, 36, 229, 0.2), 0px 0px 8px 2px rgba(180, 35, 227, 0.5); /* Added blurry border */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700; /* Adjusted weight for emphasis */
  line-height: 130%;
  text-transform: uppercase;
  color: #24B7A5; /* New contrasting color with different hue (blue-green) */
  margin: 0 auto;
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
  color: #fff; /* Lighter text color for readability */
  margin: 0 auto;
  padding: 0 20px;
  font-family: "Rubik", sans-serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-bottom: 40px;

  li {
    font-size: 1.1rem;
    color: #fff; /* Lighter shade for the list items */
    margin: 10px 0;
    text-align: center;
  }
`;

const CTAButton = styled.a`
  display: inline-block;
  background-color: #B724E5;
  color: #fff;
  margin: 0 auto;
  padding: 15px 30px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 1.2rem;
  font-weight: 500; /* Adjusted for button weight */
  transition: background-color 0.3s ease;
  box-shadow: 0px 0px 8px 2px rgba(180, 35, 227, 0.5); /* Blurry border for the CTA button */

  &:hover {
    background-color: #d24ff0;
  }
`;
