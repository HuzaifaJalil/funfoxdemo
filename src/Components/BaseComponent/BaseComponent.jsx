import React from "react";
import {
  BagImg,
  BagImgContainer,
  CapImag,
  CapImgContainer,
  ElementPageContainer,
  LeftLinedImage,
  LeftLinedImgContainer,
  LogoContainer,
  LogoImg,
  OpenBookImg,
  OpenBookImgContainer,
  PencilContainer,
  PencilImage,
  RightLinedImg,
  RightLinedImgContainer,
  ScaleImg,
  ScaleImgConatainer,
} from "./BaseComponent.Styles";
import FunFoxLogo from "../../Images/FunFoxLogo.png";
import PencilImg from "../../Images/pencilImg.png";
import LeftLinedImg from "../../Images/leftLinedImage.svg";
import RightLinedImage from "../../Images/rightLinedImg.svg";
import bagImage from "../../Images/bagImg.png";
import OpenBookImage from "../../Images/bookImg.png";
import CapImage from "../../Images/capImg.png";
import ScaleImage from "../../Images/scaleImg.png";

export const BaseComponent = ({ children }) => {
  return (
    <ElementPageContainer>
      <LogoContainer>
        <LogoImg src={FunFoxLogo} />
      </LogoContainer>
      <LeftLinedImgContainer>
        <LeftLinedImage src={LeftLinedImg} />
      </LeftLinedImgContainer>
      <RightLinedImgContainer>
        <RightLinedImg src={RightLinedImage} />
      </RightLinedImgContainer>
      <PencilContainer>
        <PencilImage src={PencilImg} />
      </PencilContainer>
      <BagImgContainer>
        <BagImg src={bagImage} />
      </BagImgContainer>
      <OpenBookImgContainer>
        <OpenBookImg src={OpenBookImage} />
      </OpenBookImgContainer>
      <CapImgContainer>
        <CapImag src={CapImage} />
      </CapImgContainer>
      <ScaleImgConatainer>
        <ScaleImg src={ScaleImage} />
      </ScaleImgConatainer>
      {children}
    </ElementPageContainer>
  );
};
