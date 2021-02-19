import styled from "styled-components";
import {
  primaryColor,
  whiteColor,
  secundaryColor,
  secundaryColor_Darker,
} from "../../styles/colors";
import { HiOutlineLogout } from "react-icons/hi/";

export const Header = styled.header`
  background-color: ${primaryColor};
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 3px #ccc;
  z-index: 2;
`;

export const LogoSection = styled.div`
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  color: ${whiteColor};
  margin-left: 30px;
  cursor: pointer;
`;

export const ProfileSection = styled(LogoSection)`
  cursor: auto;
  margin-left: 10px;
  margin-right: 30px;
  justify-content: space-between;
`;

export const H2 = styled.h2`
  margin: 0;
  transition: 400ms;
  &:hover {
    color: ${secundaryColor};
  }
`;

export const Img = styled.img`
  width: 40px;
  height: 40px;
  margin: 10px 10px;
  &:hover .${H2} {
    color: ${secundaryColor};
  }
`;

export const H3 = styled.h3`
  font-size: 1rem;
  margin-left: 30px;
  transition: 400ms;
  &:hover {
    color: ${secundaryColor};
  }
`;

export const Logout = styled(HiOutlineLogout)`
  color: ${secundaryColor};
  font-size: 1.5rem;
  margin-left: 5px;
  cursor: pointer;
`;

export const Avatar = styled(Img)`
  cursor: pointer;
`;
