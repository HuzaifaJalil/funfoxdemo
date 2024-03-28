import React from 'react'
import { ElementAvatar, ElementAvatarContainer, ElementsContainer } from './ElementsComponent.Styles'
import SettingImage from "../../Images/Setting.png";
import CharacterImage from "../../Images/Characters.png";
import PlotImage from "../../Images/Plot.png";
import ProblemImage from "../../Images/Problem.png";
import ResolutionImage from "../../Images/Resolution.png";

export const ElementsComponent = () => {
  return (
    <ElementsContainer>
        <ElementAvatarContainer>
            <ElementAvatar src={SettingImage} /> 
        </ElementAvatarContainer>
        <ElementAvatarContainer>
            <ElementAvatar src={CharacterImage} /> 
        </ElementAvatarContainer>
        <ElementAvatarContainer>
            <ElementAvatar src={PlotImage} /> 
        </ElementAvatarContainer>
        <ElementAvatarContainer>
            <ElementAvatar src={ProblemImage} /> 
        </ElementAvatarContainer>
        <ElementAvatarContainer>
            <ElementAvatar src={ResolutionImage} /> 
        </ElementAvatarContainer>
    </ElementsContainer>
  )
}
