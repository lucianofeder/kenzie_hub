import styled from "styled-components";
import { Label, Input } from "../InputForm/styles";
import { secundaryColor } from "../../styles/colors";

export const LabelWork = styled(Label)`
  margin: 10px 0 3px 3px;
`;

export const InputWork = styled(Input)``;

export const Div = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
`;

export const DivTitle = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const Error = styled.span`
  color: ${secundaryColor};
  font-size: 0.7rem;
  text-align: right;
  align-self: flex-end;
`;
