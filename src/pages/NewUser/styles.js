import styled from "styled-components";
import {
  primaryColor,
  secundaryColor,
  secundaryColor_Darker,
  whiteColor,
  darkShadowColor,
  lightShadowColor,
} from "../../styles/colors";
import { Button } from "../../pages/Login/styles";

export const Form = styled.form`
  position: relative;
  padding: 60px 30px 30px 30px;
  background-color: ${whiteColor};
  display: flex;
  margin: 50px auto;
  margin-bottom: 70px;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  border-radius: 30px;
  box-shadow: 13px 13px 20px ${darkShadowColor},
    -13px -13px 20px ${lightShadowColor};
  color: ${primaryColor};
`;

export const H2 = styled.h2`
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 30px;
`;

export const SelectArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 250px;
  margin-top: 20px;
`;

export const SelectLabel = styled.label`
  font-size: 0.8rem;
  line-height: 1rem;
`;

export const Select = styled.select`
  background-color: ${whiteColor};
  font-size: 0.8rem;
  color: ${primaryColor};
  outline: none;
  border: none;
  box-shadow: 3px 3px 3px ${darkShadowColor}, -3px -3px 3px ${lightShadowColor},
    inset 3px 3px 3px ${lightShadowColor},
    inset -3px -3px 3px ${darkShadowColor};
  padding: 5px;
  border-radius: 0.5rem;
`;

export const Img = styled.img`
  z-index: -1;
`;

export const Textarea = styled.textarea`
  background-color: ${whiteColor};
  font-size: 0.8rem;
  outline: none;
  border: none;
  border-radius: 0.5rem;
  box-shadow: inset 6px 6px 6px ${darkShadowColor},
    inset -6px -6px 6px ${lightShadowColor};
  padding: 10px;
  width: 250px;
  height: 3rem;
  resize: none;
`;

export const ButtonSubmit = styled(Button)`
  margin: 30px 0 20px 0;
`;
