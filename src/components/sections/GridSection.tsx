import React from "react";
import styled from "styled-components";

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
        <img src="/path/to/mockup.png" alt="Content Management Interface" />
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
  font-family: "Orbitron", sans-serif;
  background: rgba(63, 178, 244, 0.1); /* Lightened background */
  border-radius: 20px;
  box-shadow: 0px 16px 32px rgba(63, 176, 244, 0.2); /* Light shadow for depth */
`;

const Title = styled.h1`
  font-style: normal;
  font-size: 2.5rem;
  font-weight: bold;
  line-height: 130%;
  text-transform: uppercase;
  color: #3FB2F4;
  margin: 0 auto;
  margin-bottom: 20px;
  border-bottom: 2px solid #3FB2F4;
  padding-bottom: 10px;
  background: rgba(63, 178, 244, 0.1); /* Light background for title */
  border-radius: 10px;
  transition: transform 0.6s ease;

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
  font-family: "Open Sans", sans-serif;
`;

const FeaturesList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 30px 0;
  font-family: "Open Sans", sans-serif;
  
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
    box-shadow: 0px 16px 32px rgba(99, 30, 187, 0.2); /* Lighter shadow for the image */
  }
`;
