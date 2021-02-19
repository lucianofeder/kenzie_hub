import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import Grid from "@material-ui/core/Grid";

import {
  InputDiv,
  InputLogin,
  FormContainer,
  Img,
  DivLeft,
  Form,
  Logo,
  InputArea,
  H2,
  Button,
  Info,
  Link,
  Error,
} from "./styles";
import { Container } from "../../styles/container";

import login_img from "../../img/login_img.svg";
import { FaUserAlt, FaLock } from "react-icons/fa";
import kenzie_logo from "../../img/kenzie_logo.png";

const Login = () => {
  const history = useHistory();

  const [isLogged, setLogged] = useState(false);
  const [error, setError] = useState(false);
  const token = window.localStorage.getItem("authToken");
  const user = JSON.parse(window.localStorage.getItem("user"));

  useEffect(() => {
    if (token && user && !isLogged) {
      setLogged(history.push(`/user/${user.id}`));
    }
    if ((!token || !user) && isLogged) {
      setLogged(false);
    }
  }, [isLogged, token, user, history]);

  const schema = yup.object().shape({
    //informacoes a serem validadas antes de mandar parao backend
  });

  const { register, handleSubmit } = useForm({
    resolver: yupResolver(schema),
  });

  const handleLogin = (data) => {
    api
      .post("/sessions", data)
      .then((res) => {
        console.log(res);
        localStorage.clear();
        localStorage.setItem("authToken", res.data.token);
        localStorage.setItem("user", JSON.stringify(res.data.user));
        setLogged(true);
        setError(false);
        history.push(`/user/${res.data.user.id}`);
      })
      .catch(() => setError(true));
  };

  return (
    <Container>
      <Grid container spacing={0} alignItems="center">
        <Grid item xs={12} sm={5}>
          <DivLeft>
            <Img src={login_img} alt="Login illustrarion" />
          </DivLeft>
        </Grid>
        <Grid item xs={12} sm={7}>
          <FormContainer>
            <Form onSubmit={handleSubmit(handleLogin)}>
              <Logo src={kenzie_logo} alt="Kenzie Logo" />
              <H2>Login to K-Hub</H2>
              {error && <Error>Wrong login information</Error>}
              <InputArea>
                <InputDiv>
                  <FaUserAlt />
                  <InputLogin placeholder="Email" name="email" ref={register} />
                </InputDiv>
                <InputDiv>
                  <FaLock />
                  <InputLogin
                    placeholder="Password"
                    name="password"
                    type="password"
                    ref={register}
                  />
                </InputDiv>
              </InputArea>
              <Button type="submit">Login</Button>
              <Info>
                <Link onClick={() => console.log("Feature desabilitada")}>
                  Forgot your Password?
                </Link>{" "}
                or{" "}
                <Link onClick={() => history.push("new_user")}>Sign Up!</Link>{" "}
              </Info>
            </Form>
          </FormContainer>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
    </Container>
  );
};

export default Login;
