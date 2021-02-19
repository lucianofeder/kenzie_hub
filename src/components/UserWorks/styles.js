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
import { cardStructure, Text } from "../UserSkills/styles";

export const JobsArea = styled(cardStructure)``;

export const TextTitle = styled(Text)``;

export const Link = styled.a`
  text-decoration: none;
  color: ${primaryColor};
  font-size: 0.8rem;
  &:visited {
    color: ${primaryColor};
  }
`;

export const TextDescription = styled.p`
  margin: 0;
  font-size: 0.7rem;
  text-align: left;
  line-height: 0.7rem;
  margin-left: 15px;
  margin-bottom: 10px;
`;
