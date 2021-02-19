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
import { Form, Button } from "../../pages/Login/styles";
import { Title } from "../UserSkills/styles";
import { IoIosCloseCircle } from "react-icons/io/";
import { SelectArea } from "../../pages/NewUser/styles";

export const Cover = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 3;
  background-color: rgba(236, 240, 243, 0.6);
  width: 100vw;
  height: 100vh;
  overflow-y: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormAdd = styled(Form)`
  background-color: ${whiteColor};
  margin: 0;
  padding: 40px 30px 30px 30px;
  position: relative;
  height: auto;
  width: auto;
  justify-content: space-between;
`;

export const TitleAdd = styled(Title)`
  align-self: flex-start;
  &:before {
    content: none;
  }
`;

export const ButtonClose = styled(IoIosCloseCircle)`
  position: absolute;
  top: 20px;
  right: 20px;
  font-size: 2.3rem;
  color: ${secundaryColor};
  cursor: pointer;
  border-radius: 50%;
  box-shadow: 3px 3px 3px ${darkShadowColor}, -3px -3px 3px ${lightShadowColor};
  &:hover {
    color: ${secundaryColor_Darker};
  }
`;

export const SelectSkillArea = styled(SelectArea)`
  display: flex;
  justify-content: space-around;
`;

export const ButtonSubmit = styled(Button)`
  width: 150px;
  height: 1.5rem;
  font-size: 1rem;
  margin: 20px 0 0 0;
`;
