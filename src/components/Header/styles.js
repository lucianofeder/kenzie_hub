import styled from "styled-components";

export const Header = styled.header`
  background-color: #00356b;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 3px #ccc;
  z-index: 2;
`;

export const Img = styled.img`
  width: 50px;
  height: 50px;
  margin: 5px 10px;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  color: #ecf0f3;
  margin-left: 30px;
`;

export const H2 = styled.h2`
  margin: 0;
`;

export const Avatar = styled(Img)`
  margin-right: 35px;
`;
