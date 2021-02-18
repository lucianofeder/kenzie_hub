import styled from "styled-components";
import { InputLogin } from "../../pages/Login/styles";
import {
  primaryColor,
  secundaryColor,
  secundaryColor_Darker,
  whiteColor,
  darkShadowColor,
  lightShadowColor,
} from "../../styles/colors";

export const Input = styled(InputLogin)`
  margin: 2px 0 0 0;
  box-shadow: inset 6px 6px 6px ${darkShadowColor},
    inset -6px -6px 6px ${lightShadowColor};
  line-height: 1.5rem;
  border-radius: 0.5rem;
  padding-left: 10px;
  font-size: 0.7rem;
`;

export const Label = styled.label`
  font-size: 0.8rem;
  line-height: 1rem;
  height: 1rem;
  align-self: flex-start;
  margin-left: 22px;
  margin-top: 10px;
`;

export const Error = styled.span`
  color: tomato;
`;
