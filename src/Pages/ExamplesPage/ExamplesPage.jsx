import React from "react";
import {
  AvatarContainer,
  AvatarImg,
  ExamplesContentContainer,
  ExamplesPageContainer,
  FolderImg,
  FolderImgContainer,
  GreenInnerSpan,
  GreenTypoContainer,
  HintSectionContainer,
  Input,
  InputContainer,
  QuessSection,
  QuessSectionContainer,
  WhiteSpan,
  WhiteTypoContainer,
} from "./ExamplesPage.Styles";
import { BaseComponent, ImageExampleComponent } from "../../Components";
import FolderImage from "../../Images/Folder.png";
import ClockAvatar from "../../Images/ClockAvatar.png";
import HomeAvatar from "../../Images/HomeAvatar.png";

export const ExamplesPage = () => {
  return (
    <ExamplesPageContainer>
      <BaseComponent>
        <FolderImgContainer>
          <FolderImg src={FolderImage} />
        </FolderImgContainer>
 
        <ExamplesContentContainer>
          <WhiteTypoContainer>
            Can you figure out the definition of setting from the following
            examples?
            <br />
            <WhiteSpan>&#40;take a minute to think about this &#41;</WhiteSpan>
          </WhiteTypoContainer>
          <ImageExampleComponent />
          <WhiteSpan>
            So&#184; what do you think the definition of setting is&#63; Any
            guesses&#63;
          </WhiteSpan>
          <QuessSectionContainer>
            <QuessSection>
              <WhiteSpan>Any guesses&#63;</WhiteSpan>
            </QuessSection>
            <InputContainer>
              <Input />
            </InputContainer>
            <HintSectionContainer>
              <WhiteSpan>Hint&#58;</WhiteSpan>
              <AvatarContainer>
                <AvatarImg src={ClockAvatar} />
                <AvatarImg src={HomeAvatar} />
              </AvatarContainer>
            </HintSectionContainer>
          </QuessSectionContainer>
          <GreenTypoContainer>
            <GreenInnerSpan>Setting is the time</GreenInnerSpan>
            <AvatarImg src={ClockAvatar} />
            <GreenInnerSpan>and place</GreenInnerSpan>
            <AvatarImg src={HomeAvatar} />
            <GreenInnerSpan>of a story.</GreenInnerSpan>
            <GreenInnerSpan>It often answers the questions&#58;</GreenInnerSpan>
            <GreenInnerSpan>when&#63; and where&#63;</GreenInnerSpan>
          </GreenTypoContainer>
          <WhiteTypoContainer>
            The time of the story could be in the past, future, day, night,
            summer or winter. A story may take place in a school, a mall, a
            desert, an airplane or in a variety of other places.
          </WhiteTypoContainer>
        </ExamplesContentContainer>
      </BaseComponent>
    </ExamplesPageContainer>
  );
};
