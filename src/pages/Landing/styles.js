import styled from "styled-components";
import {
  primaryColor,
  secundaryColor,
  secundaryColor_Darker,
  whiteColor,
} from "../../styles/colors";

export const DivRight = styled.div`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  min-height: calc(100vh - 60px - 30px);
  background-color: ${primaryColor};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-flow: column;
  padding: 12vh 0;
  padding-left: 3vw;
  @media (max-width: 599px) {
    align-items: center;
  }
`;

export const DivLeft = styled(DivRight)`
  background: ${primaryColor};
  padding: 0;
  justify-content: center;
  align-items: center;
  @media (max-width: 599px) {
    display: none;
  }
`;

export const Img = styled.img`
  width: 90%;
  max-width: calc(100vh - 100px);
  border-radius: 50%;
`;

export const Logo = styled.img`
  width: 150px;
  height: 150px;
`;

export const TextArea = styled.div`
  text-align: left;
  @media (max-width: 600px) {
    text-align: center;
  }
`;

export const H1 = styled.h1`
  font-size: 3rem;
  color: ${whiteColor};
  margin: 0;
`;

export const H2 = styled.h2`
  font-size: 1rem;
  color: ${whiteColor};
  margin: 6px 0;
`;

export const ButtonArea = styled.div`
  height: 100px;
  display: flex;
  flex-flow: column;
  justify-content: space-between;
  margin: 10px 0;
`;

export const Button = styled.button`
  background-color: ${secundaryColor};
  border: 2px solid ${secundaryColor};
  height: 40px;
  width: 300px;
  border-radius: 20px;
  color: ${whiteColor};
  cursor: pointer;
  font-weight: 700;
  transition: 500ms;
  font-size: 0.9rem;
  letter-spacing: 1px;
  &:hover {
    background-color: ${secundaryColor_Darker};
    border: 2px solid ${secundaryColor_Darker};
    letter-spacing: 2px;
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonLogin = styled(Button)`
  background-color: ${primaryColor};
  color: ${secundaryColor};
  &:hover {
    background-color: rgba(243, 93, 86, 0.2);
    border: 2px solid ${secundaryColor};
  }
`;
