import styled from "styled-components";

export const FooterContainer = styled.footer`
    position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  background-color: transparent;
  bottom: 10px;
  left: 5%;
`; 

export const LeftSection = styled.div`
  display: flex;
  align-items: center;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
`;

export const CenterSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;


export const PageNumberContentContainer = styled.div`
width: 75px;
height: 34px;
display: flex;
align-items: center;
justify-content: center;
background-color: #CD3F97;
border-radius: 10px;
font-family: "Short Stack", cursive;
font-size: 17px;

&:hover {
  cursor: pointer;
}
`;

export const PageNumberContainer = styled.span`
color: white;
width: 50px;
text-align: center;
`;

export const PopUpButton = styled.button`
width: 25px;
background-color: #CD3F97;
color: white;
text-align: center;
border-right: none;
border-top: none;
border-bottom: none;
border-left: 2px solid #AA1070;
border-radius: 0px 10px 10px 0px;
height: 100%;

&:hover {
  cursor: pointer;
  background-color: #AA1070;
  transition: background-color 0.5s ease;
}
`;

export const PaginationAvatar = styled.img`
  width: 40px;
  height: 30px;
  margin: 0 5px;
`;

export const RightSection = styled.div`
  display: flex;
  align-items: center;
`;