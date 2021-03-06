import styled from "styled-components";
import {
  primaryColor,
  whiteColor,
  cardColor,
  cardBorderColor,
  darkShadowColor,
  lightShadowColor,
} from "../../styles/colors";

const cardStructure = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 20px;
  border: 1px solid ${cardBorderColor};
  padding: 20px 30px;
  background-color: ${cardColor};
`;

export const DivAside = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 7px;
  min-height: calc(100vh - 60px - 37px);
  background-color: ${whiteColor};
`;

export const UserHeader = styled(cardStructure)`
  margin: 30px 5px;
`;

export const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 15px;
  box-shadow: 0px 0px 2px #5f5f5f, 0px 0px 0px 5px ${whiteColor},
    8px 8px 15px ${darkShadowColor}, -8px -8px 15px ${lightShadowColor};
`;

export const UserName = styled.h2`
  font-size: 1.8rem;
  color: ${primaryColor};
`;

export const UserInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const UserBio = styled.div`
  width: calc(50% - 30px);
  height: 80px;
  padding: 5px;
  padding-left: 30px;
  border-left: 0.5px solid ${cardBorderColor};
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  font-size: 0.8rem;
  box-sizing: border-box;
`;

export const Bio = styled.textarea`
  width: 100%;
  height: 90%;
  font-size: 0.8rem;
  padding: 6px;
  border: 1px solid ${cardBorderColor};
  border-radius: 0.25rem;
  resize: none;
  outline: none;
  margin-bottom: 5px;
  &::-webkit-scrollbar {
    width: 0.5rem;
    color: red;
  }
  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 0.25rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: darkgrey;
    border-radius: 0.25rem;
  }
`;

export const Contact = styled.p`
  color: ${primaryColor};
  margin: 0;
  font-size: 0.7rem;
  align-self: flex-start;
`;
