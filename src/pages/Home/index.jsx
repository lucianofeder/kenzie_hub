import { useHistory } from "react-router-dom";

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

const Home = (props) => {
  const history = useHistory();
  return (
    <>
      <Grid container spacing={0}>
        <Grid item xs={12} sm={6}>
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
              <ButtonLogin
                onClick={() => history.push("/login")}
                disabled={props.isLogged}
              >
                Login
              </ButtonLogin>
            </ButtonArea>
          </DivRight>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
