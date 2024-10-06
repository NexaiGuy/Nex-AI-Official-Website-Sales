import React from "react";
import styled from "styled-components";

import NotionTemplate from "/src/images/illustrations/NotionTemplate.png";

function ContentStep() {
  return (
    <Wrapper id="ContentUpload">
      <Title>Organize Your Content in One Place</Title>
      <BodyText>
        Our system starts by allowing you to upload and store all your company’s content in a database that works much like Notion. 
        Whether your company is big or small, you’ll have a flexible space to organize your content. 
        From images, documents, posts, and more, everything is centralized.
      </BodyText>
      <FeaturesList>
        <li>Easy-to-use content management dashboard.</li>
        <li>Flexible folder structure for content categorization.</li>
        <li>Multi-user access and permissions for team collaboration.</li>
      </FeaturesList>
      <Visual>
        <Image src={NotionTemplate} alt="Content Management Interface" style={{ width: '600px', height: '360px' }} />
      </Visual>
    </Wrapper>
  );
}

export default ContentStep;

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
  padding: 0 40px 0 40px;
  background: rgba(36, 183, 165, 0.1); /* Light background for title */
  border-radius: 10px;
  transition: transform 0.6s ease;
  box-shadow: 0px 0px 8px 2px rgba(180, 35, 227, 0.5); /* Blurry border for the title */

  &:hover {
    transform: rotateY(360deg); /* Rotate on hover */
    transition: transform 0.5s ease-in-out;
  }
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
  margin: 20px auto;
  border-radius: 15px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
  transition: transform 2s; // Specifies that the transform change should take 2 seconds

  &:hover {
    transform: scale(1.26); // Increase the size of the image by 10% on hover
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

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 30px 0;

  li {
    font-size: 1.1rem;
    color: #fff; /* Lighter shade for the list items */
    margin: 10px 0;
  }
`;

const Visual = styled.div`
  margin: 30px 0;

  img {
    max-width: 100%;
    height: auto;
    border-radius: 10px;
    box-shadow: 0px 16px 32px rgba(183, 36, 229, 0.2), 0px 0px 8px 2px rgba(180, 35, 227, 0.5); /* Added blurry shadow for the image */
  }
`;
