import styled from "styled-components";
import {
  primaryColor,
  secundaryColor,
  secundaryColor_Darker,
  whiteColor,
  cardColor,
  cardBorderColor,
  darkShadowColor,
  lightShadowColor,
} from "../../styles/colors";

export const cardStructure = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: row;
  border-radius: 20px;
  border: 1px solid ${cardBorderColor};
  padding: 40px 30px 20px 30px;
  background-color: ${cardColor};
  min-height: 200px;
  margin-bottom: 30px;
  position: relative;
  @media (max-width: 600px) {
    margin-left: 5px;
    margin-right: 5px;
  }
`;

export const SkillsArea = styled(cardStructure)`
  @media (max-width: 960px) {
    margin-bottom: 0;
  }
`;

export const Title = styled.h3`
  font-size: 1.7rem;
  color: ${primaryColor};
  margin: 0;
  &:before {
    align-self: center;
    content: "●";
    margin-right: 10px;
    font-size: 1.2rem;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-size: 0.8rem;
  color: #333;
  margin-left: 10px;
`;

export const TextArea = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-flow: column;
  line-height: 1.8rem;
`;

export const Img = styled.img`
  width: 45%;
  align-self: center;
  margin-bottom: 20px;
  @media (max-width: 400px) {
    display: none;
  }
`;

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 900;
  font-size: 1.5rem;
  color: ${whiteColor};
  position: absolute;
  bottom: 20px;
  right: 30px;
  border-radius: 50%;
  border: none;
  width: 35px;
  height: 35px;
  background-color: ${secundaryColor};
  outline: none;
  cursor: pointer;
  box-shadow: 3px 3px 3px ${darkShadowColor}, -3px -3px 3px ${lightShadowColor};
  &:hover {
    background-color: ${secundaryColor_Darker};
  }
`;
