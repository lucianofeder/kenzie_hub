import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";

import Grid from "@material-ui/core/Grid";
import {
  DivRight,
  DivLeft,
  Img,
  Logo,
  TextArea,
  H1,
  H2,
  Button,
  ButtonLogin,
  ButtonArea,
} from "./styles";
import landing_image from "../../img/landing_image.png";
import kenzie_logo from "../../img/kenzie_logo.png";

const Landing = () => {
  const history = useHistory();

  const [isLogged, setLogged] = useState(false);
  const token = window.localStorage.getItem("authToken");
  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    if (token && user && !isLogged) {
      setLogged(true);
    }
    if ((!token || !user) && isLogged) {
      setLogged(false);
    }
  }, [isLogged, token, user]);

  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={false} sm={6}>
          <DivLeft>
            <Img
              src={landing_image}
              alt="A representation of connections between people"
            />
          </DivLeft>
        </Grid>
        <Grid item xs={12} sm={6}>
          <DivRight>
            <Logo src={kenzie_logo} alt="Kenzie Logo" />
            <TextArea>
              <H1>Everyone is Connected</H1>
              <H2>Join K-Hub Today.</H2>
            </TextArea>
            <ButtonArea>
              <Button onClick={() => history.push("/new_user")}>Sign up</Button>
              {isLogged ? (
                <ButtonLogin onClick={() => history.push(`/user/${user.id}`)}>
                  Home
                </ButtonLogin>
              ) : (
                <ButtonLogin onClick={() => history.push("/login")}>
                  Login
                </ButtonLogin>
              )}
            </ButtonArea>
          </DivRight>
        </Grid>
      </Grid>
    </>
  );
};

export default Landing;
