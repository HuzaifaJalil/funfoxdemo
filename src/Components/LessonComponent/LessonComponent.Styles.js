import styled from "styled-components";
import BackgroundImage from "../../Images/LessonBackgroundImage.png";

export const LessonComponentContainer = styled.div`
  width: 100%;
  height: 145px;
  border-radius: 30px;
  background-color: #fe6784;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0px 6px 3px rgba(0, 0, 0, 0.3);
`;

export const LessonComponentContent = styled.div`
  font-size: 18px;
  font-weight: 400;
  font-family: "Short Stack", cursive;
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  width: 90%;
  height: 90%;
  padding: 0px 35px;
`;
