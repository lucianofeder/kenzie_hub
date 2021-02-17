import styled from "styled-components";
import { Input } from "../../components/InputForm/styles";
import {
  primaryColor,
  secundaryColor,
  secundaryColor_Darker,
  whiteColor,
  darkShadowColor,
  lightShadowColor,
} from "../../styles/colors";

export const InputDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: inset 6px 6px 6px ${darkShadowColor},
    inset -6px -6px 6px ${lightShadowColor};
  padding-left: 15px;
  height: 2.5rem;
  border-radius: 1.25rem;
  width: 80%;
  margin: 15px 0;
  color: ${primaryColor};
`;

export const InputLogin = styled(Input)`
  background-color: ${whiteColor};
  border: none;
  outline: none;
  margin: 7.5px;
  padding-left: 5px;
`;

export const FormContainer = styled.div`
  background-color: ${whiteColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DivLeft = styled(FormContainer)`
  background-color: ${whiteColor};
  box-sizing: border-box;
  padding: 10px;
`;

export const Img = styled.img`
  width: 40vw;
  max-width: calc(100vh - 100px);
`;

export const Form = styled.form`
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  align-items: center;
  width: 300px;
  height: 400px;
  margin: 20px 0;
  margin-bottom: 50px;
  padding: 40px 15px 15px;
  border-radius: 30px;
  box-shadow: 13px 13px 20px ${darkShadowColor},
    -13px -13px 20px ${lightShadowColor};
`;

export const Logo = styled.img`
  width: 70px;
  border-radius: 50%;
`;
