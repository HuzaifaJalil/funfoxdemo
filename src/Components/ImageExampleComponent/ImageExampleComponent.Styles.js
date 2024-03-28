import styled from "styled-components";

export const ImageExampleContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  justify-content: space-around;
`;
 
export const ImageExampleContentContainer = styled.div`
  max-width: 220px;
  min-height: 235px;
`;

export const ImageExampleImgContainer = styled.div`
  padding: 10px;
  border-radius: 10px;
  border: 3px dotted #cccccc;
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
`;

export const ExampleImage = styled.img`
  height: 140px;
  width: 170px;
`;

export const ExampleDesc = styled.p`
  font-family: "Short Stack", cursive;
  font-weight: 400;
  font-size: 17px;
  text-align: center;
  margin: 0px;
`;
