import React from "react";
import {
  ClosedBookImgContainer,
  ClosedOpenBookImg,
  ElementPageContainer,
  ElementsContentContainer,
  GreenTypoContainer,
  GreenTypoLeftContainer,
  GreenTypoRighttContainer,
  GreenTypoRighttImg,
  StoryWritingHeading,
  StoryWritingHeadingcontainer,
  WeekOneImg,
  WeekOneImgContainer,
  WhiteTypoContainer,
} from "./ElemmentsPage.Styles";
import Week1Img from "../../Images/week1img.png";
import ClosedBookImage from "../../Images/closedImg.png";
import GirlImage from "../../Images/girlImage.png";
import {
  BaseComponent, 
  ElementsComponent,
  LessonComponent,
} from "../../Components";

export const ElemmentsPage = () => {
  return (
    <ElementPageContainer>
      <BaseComponent>
      <WeekOneImgContainer>
        <WeekOneImg src={Week1Img} />
      </WeekOneImgContainer>
        <ClosedBookImgContainer>
          <ClosedOpenBookImg src={ClosedBookImage} />
        </ClosedBookImgContainer>
        <ElementsContentContainer>
          <StoryWritingHeadingcontainer>
            <StoryWritingHeading>Elements of Story Writing</StoryWritingHeading>
          </StoryWritingHeadingcontainer>

          <WhiteTypoContainer>
            Welcome to term 2 of Writers Club. Are you excited for this amazing
            journey? Over the next week, we will be practicing the different
            elements of story writing. Our aim is to make stories more
            interesting and exciting.
          </WhiteTypoContainer>

          <GreenTypoContainer>
            <GreenTypoLeftContainer>
              There are elements which make the foundation for story writing. An
              element is an essential part of something and every fiction story
              has the same key elements:
            </GreenTypoLeftContainer>
            <GreenTypoRighttContainer>
              <GreenTypoRighttImg src={GirlImage} />
            </GreenTypoRighttContainer>
          </GreenTypoContainer>

          <ElementsComponent />

          <WhiteTypoContainer>
            You must be familiar with some of these. If not, do not worry! we
            will cover all these elements as we go along.
          </WhiteTypoContainer>

          <LessonComponent />
        </ElementsContentContainer>
      </BaseComponent>

    </ElementPageContainer>
  );
};
