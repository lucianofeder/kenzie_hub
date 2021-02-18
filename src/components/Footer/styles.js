import styled from "styled-components";
import {
  primaryColor,
  secundaryColor,
  secundaryColor_Darker,
  whiteColor,
  darkShadowColor,
  lightShadowColor,
} from "../../styles/colors";

export const Footer = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${primaryColor}; //so pra guardar a cor#ff6584
  color: ${darkShadowColor};
  height: 30px;
  font-size: 0.7rem;
  width: 100vw;
  position: relative;
  z-index: 2;
`;
