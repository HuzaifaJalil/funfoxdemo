import React, { useState } from "react";
import {
  Avatar,
  CenterSection,
  FooterContainer,
  LeftSection,
  PageNumberContainer,
  PageNumberContentContainer,
  PaginationAvatar,
  PopUpButton,
  RightSection,
} from "./Footer.Styles";
import UserAvatar from "../../Images/userAvatarImg.png";
import PrevPaginationAvatar from "../../Images/prevPageImg.png";
import NextPaginationAvatar from "../../Images/nextPageImg.png";
import FAQsAvatar from "../../Images/querryImg.png";
import { CustomLink } from "../CustomLink";

export const Footer = () => {
  const [pageNumber, setPageNumber] = useState(1);
  const handlePrevClick = () => {
    setPageNumber(prevPageNumber => prevPageNumber === 2 ? 1 : prevPageNumber)
  }

  const handleNextClick = () => {
    setPageNumber(prevPageNumber => prevPageNumber === 1 ? 2 : prevPageNumber)
  }
  return (
    <FooterContainer>
      <LeftSection>
        <Avatar src={UserAvatar} />
      </LeftSection>
      <CenterSection>
      <CustomLink to="/" onClick={handlePrevClick}><PaginationAvatar src={PrevPaginationAvatar}/></CustomLink>
        <PageNumberContentContainer>
          <PageNumberContainer>{pageNumber}</PageNumberContainer>
          <PopUpButton>^</PopUpButton>
        </PageNumberContentContainer>
        <CustomLink to="/example" onClick={handleNextClick}><PaginationAvatar src={NextPaginationAvatar}/></CustomLink>
      </CenterSection>
      <RightSection>
        <Avatar src={FAQsAvatar} />
      </RightSection> 
    </FooterContainer>
  );
};
