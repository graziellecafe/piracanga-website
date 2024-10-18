import React from "react";
import styled from "styled-components";
import section from "../../images/section.png";

export const Container = styled.div`
  margin-top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  height: ${({ Height }) => Height};
  background-image: url(${({ sectionImage }) => sectionImage});
  background-size: cover;
  background-repeat: no-repeat;
  //for Mobiles
  @media only screen and (max-width: 600px) {
    background-size: 100% 100%;
    height: 40%;
  }
  //for Tablets and Medium Screens
  @media only screen and (min-width: 600px) {
    background-size: 100% 100%;
    height: 40%;
  }
  //for laptops and desktops
  @media only screen and (min-width: 992px) {
    background-size: cover;
  }
`;

const Section = () => {
  return (
    <Container sectionImage = {section} /> 

  );
};

export default Section;
