import styled from "styled-components";

export const ElementsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  padding: 10px;
`;

export const ElementAvatarContainer = styled.div`
  display: flex;
`;

export const ElementAvatar = styled.img`
  width: 150px;
  height: 90px;

  @media (max-width: 1000px) {
    width: 100px;
    height: 70px;
  }
`;
