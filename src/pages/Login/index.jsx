import api from "../../services/api";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";
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
} from "./styles";
import { Container } from "../../styles/container";
import Button from "@material-ui/core/Button";

import login_img from "../../img/login_img.svg";
import { FaUserAlt, FaLock } from "react-icons/fa";
import kenzie_logo from "../../img/kenzie_logo.png";

const Login = (props) => {
  const history = useHistory();
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
        window.localStorage.clear();
        window.localStorage.setItem("authToken", res.data.token);
        props.setLogged(true);
        history.push("/");
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    const token = window.localStorage.getItem("authToken");

    if (!token) {
      props.setLogged(false);
    }
  });

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
              <h2>Login to K-Hub</h2>
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
              <Button type="submit">Login</Button>
            </Form>
          </FormContainer>
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
      </Grid>
    </Container>
  );
};

export default Login;
