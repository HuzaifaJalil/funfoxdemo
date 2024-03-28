import styled from "styled-components";

export const ElementPageContainer = styled.div`
  position: relative;
  height: 100vh;
  background-color: #f8d1e0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const WeekOneImgContainer = styled.div`
  position: absolute;
  top: 10px;
  left: 140px;
`;

export const WeekOneImg = styled.img`
  width: 160px;
  height: 50px;
`;

export const ClosedBookImgContainer = styled.div`
  position: absolute;
  top: 50%;
  right: -10px;
  z-index: 1;
`;

export const ClosedOpenBookImg = styled.img`
  width: 74px;
  height: 73px;
`;

export const ElementsContentContainer = styled.div`
  width: 80%;
  height: 80%;
  background-color: #ffffff;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 10px 30px;
  z-index: 1;
`;

export const StoryWritingHeadingcontainer = styled.div`
  width: 529px;
  height: 40px;
  background-color: #fe6784;
  border-radius: 34px;
  border: 5px dotted #ffaebe;
`;

export const StoryWritingHeading = styled.h1`
  font-size: 32px;
  font-family: "Short Stack", cursive;
  font-weight: 400;
  font-style: normal;
  text-align: center;
  line-height: 0px;
`;

export const WhiteTypoContainer = styled.div`
  font-size: 20px;
  font-weight: 400;
  font-family: "Short Stack", cursive;
  padding: 10px;
`;

export const GreenTypoContainer = styled.div`
  font-size: 20px;
  font-weight: 400;
  font-family: "Short Stack", cursive;
  padding: 10px;
  color: #ffffff;
  background-color: #25a3a1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 10px;
  border: 4px dotted #A4FDFB;
  z-index: 1;
`;

export const GreenTypoLeftContainer = styled.div`
display: flex;
  width: 80%;
`;
export const GreenTypoRighttContainer = styled.div`
display: flex;
  width: 20%;
  align-items: center;
  justify-content: center;
`;
export const GreenTypoRighttImg = styled.img`
  height: 110px;
  width: 130px;
`;
