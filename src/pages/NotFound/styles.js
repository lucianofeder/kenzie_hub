import styled from "styled-components";

import { primaryColor } from "../../styles/colors";

import { Container } from "../../styles/container";
import { Card } from "../../components/UserCard/styles";
import LinearProgress from "@material-ui/core/LinearProgress";

export const ContainerError = styled(Container)`
  flex-flow: column;
`;

export const Img = styled.img`
  min-width: 280px;
  width: 40vw;
`;

export const CardError = styled(Card)`
  cursor: auto;
  width: auto;
  height: auto;
  padding: 30px;
`;

export const Text = styled.h1`
  color: ${primaryColor};
  margin: 0 0 30px 0;
`;

export const Animation = styled.span`
  font-size: 2rem;
  margin: 0 4px;
`;

export const Progress = styled(LinearProgress)`
  color: ${primaryColor};
  width: 80%;
  margin: 50px auto 0 auto;
`;
