import styled from "styled-components";

import {
  primaryColor,
  whiteColor,
  darkShadowColor,
  lightShadowColor,
} from "../../styles/colors";

export const Card = styled.div`
  margin: 10px;
  border: 1px solid ${primaryColor};
  border-radius: 20px;
  background-color: #fff;
  padding: 10px;
  cursor: pointer;
  width: 130px;
  height: 190px;
  box-sizing: border-box;
  overflow-x: hidden;
  position: relative;
`;

export const Img = styled.img`
  width: 70px;
  height: 70px;
  margin: 0 auto;
  border-radius: 50%;
  box-shadow: 0px 0px 2px #5f5f5f, 0px 0px 0px 5px ${whiteColor},
    8px 8px 15px ${darkShadowColor}, -8px -8px 15px ${lightShadowColor};
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
  width: calc(100% - 12px);
  overflow-wrap: break-word;
  margin: 0 auto;
  position: absolute;
  bottom: 13px;
  left: 0;
  padding: 0 6px;
`;
