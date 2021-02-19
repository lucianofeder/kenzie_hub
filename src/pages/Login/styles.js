import styled from "styled-components";
import {
  primaryColor,
  secundaryColor,
  secundaryColor_Darker,
  whiteColor,
  darkShadowColor,
  lightShadowColor,
} from "../../styles/colors";

export const InputArea = styled.div``;

export const InputDiv = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  box-shadow: inset 6px 6px 6px ${darkShadowColor},
    inset -6px -6px 6px ${lightShadowColor};
  padding-left: 15px;
  height: 2.5rem;
  border-radius: 1rem;
  width: 80%;
  margin: 20px auto;
  color: ${primaryColor};
`;

export const InputLogin = styled.input`
  background-color: ${whiteColor};
  border: none;
  outline: none;
  margin: 0 auto;
  padding-left: 5px;
  width: 250px;
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
  justify-content: center;
  align-items: center;
  width: 300px;
  height: 400px;
  margin: 20px 0;
  margin-bottom: 50px;
  padding: 30px 15px 15px;
  border-radius: 30px;
  box-shadow: 13px 13px 20px ${darkShadowColor},
    -13px -13px 20px ${lightShadowColor};
`;

export const Logo = styled.img`
  width: 80px;
  border-radius: 50%;
  box-shadow: 0px 0px 2px #5f5f5f, 0px 0px 0px 5px ${whiteColor},
    8px 8px 15px ${darkShadowColor}, -8px -8px 15px ${lightShadowColor};
`;

export const H2 = styled.h2`
  color: ${primaryColor};
  margin: 20px 0;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  border: none;
  outline: none;
  width: 250px;
  height: 2.5rem;
  border-radius: 1.25rem;
  background-color: ${secundaryColor};
  color: ${whiteColor};
  font-size: 1.1rem;
  transition: 500ms;
  cursor: pointer;
  font-weight: 700;
  letter-spacing: 1px;
  box-shadow: 6px 6px 6px ${darkShadowColor}, -6px -6px 6px ${lightShadowColor};
  &:hover {
    background-color: ${secundaryColor_Darker};
    letter-spacing: 2px;
  }
`;

export const Info = styled.p`
  font-size: 0.7rem;
  color: #999;
`;

export const Link = styled.span`
  color: ${primaryColor};
  cursor: pointer;
`;

export const Error = styled(Info)`
  color: red;
`;
