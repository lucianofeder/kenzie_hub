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

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  flex-flow: column;
  margin: 10px;
  flex-wrap: wrap;
  align-items: center;
  border: 1px solid ${primaryColor};
  border-radius: 20px;
  background-color: #fff;
  padding: 10px;
  cursor: pointer;
  width: 130px;
  height: 200px;
  box-sizing: border-box;
  overflow-x: hidden;
`;

export const Img = styled.img`
  width: 70px;
  margin: 0 auto;
`;

export const H2 = styled.h2`
  margin: 5px 0;
  text-align: center;
  font-size: 1.3rem;
`;

export const H3 = styled.h3`
  text-align: center;
  font-size: 0.7rem;
  height: 1.5rem;
  overflow-wrap: break-word;
  margin: 0;
`;
