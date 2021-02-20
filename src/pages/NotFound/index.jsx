import { ContainerError, Img, CardError, Text, Progress } from "./styles";
import notfound_img from "../../img/notfound_img.svg";

import { useEffect } from "react";
import { useHistory } from "react-router-dom";

const NotFound = () => {
  const history = useHistory();

  useEffect(() => {
    setTimeout(() => history.push("/"), 2500);
  });
  return (
    <ContainerError>
      <CardError>
        <Text>Page not found, redirecting...</Text>
        <Img src={notfound_img} alt="Not found" />
        <Progress />
      </CardError>
    </ContainerError>
  );
};

export default NotFound;
