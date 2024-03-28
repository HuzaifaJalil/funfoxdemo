import React from "react";
import { StyledCustomLink } from "./CustomLink.Styles";

export const CustomLink = ({ to, onClick, children }) => {
  const handleClick = (event) => {
    if (onClick) {
      onClick(event);
    }
  };

  return <StyledCustomLink to={to} onClick={handleClick}>{children}</StyledCustomLink>;
};