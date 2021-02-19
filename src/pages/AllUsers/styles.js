import styled from "styled-components";
import { Container } from "../../styles/container";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
import { primaryColor } from "../../styles/colors";

export const UsersContainer = styled(Container)`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
`;

export const ContentArea = styled(Container)`
  max-width: 800px;
  flex-flow: column;
  justify-content: flex-start;
  margin: 0 auto;
`;

export const ArrowSection = styled.div`
  margin: 0 auto;
`;

export const ArrowRight = styled(FaArrowRight)`
  font-size: 2rem;
  margin: 15px;
  color: ${primaryColor};
  cursor: pointer;
`;

export const ArrowLeft = styled(FaArrowLeft)`
  font-size: 2rem;
  margin: 15px;
  color: ${primaryColor};
  cursor: pointer;
`;
