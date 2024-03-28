import React from "react";
import {
  ExampleDesc,
  ExampleImage,
  ImageExampleContainer,
  ImageExampleContentContainer,
  ImageExampleImgContainer,
} from "./ImageExampleComponent.Styles";
import SunnyDayImage from "../../Images/SunnyDay.png";
import ColdNightImage from "../../Images/ColdNight.png";

export const ImageExampleComponent = () => {
  return (
    <ImageExampleContainer>
      <ImageExampleContentContainer>
        <ImageExampleImgContainer>
          <ExampleImage src={SunnyDayImage} />
        </ImageExampleImgContainer>
        <ExampleDesc>Sunny day at a beach</ExampleDesc>
      </ImageExampleContentContainer>
      <ImageExampleContentContainer>
        <ImageExampleImgContainer>
          <ExampleImage src={ColdNightImage} />
        </ImageExampleImgContainer>
        <ExampleDesc>
          A cold rainy night in a haunted house in October
        </ExampleDesc>
      </ImageExampleContentContainer>
    </ImageExampleContainer>
  );
};
