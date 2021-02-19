import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

import blob_1 from "../../img/blob_1.svg";
import blob_2 from "../../img/blob_2.svg";
import blob_3 from "../../img/blob_3.svg";

import InputForm from "../../components/InputForm";
import Grid from "@material-ui/core/Grid";

import {
  Form,
  H2,
  SelectArea,
  SelectLabel,
  Select,
  Img,
  Textarea,
  ButtonSubmit,
} from "./styles";
import { Label } from "../../components/InputForm/styles";

const NewUser = () => {
  const history = useHistory();

  const schema = yup.object().shape({
    name: yup
      .string()
      .matches(
        /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/,
        "Insert your full name"
      )
      .required("You must fill this field"),

    email: yup
      .string()
      .email("This is not a valid email")
      .required("You must fill this field"),

    email_checker: yup.string().oneOf([yup.ref("email")], "Email didn't match"),

    password: yup
      .string()
      .min(6, "Too short")
      .required("You must fill this field"),

    password_checker: yup
      .string()
      .oneOf([yup.ref("password")], "Password didn't match"),

    contact: yup.string().required("This field is required"),

    bio: yup.string().required("This field is required"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    api
      .post("/users", { ...data })
      .then(() => {
        reset();
        history.push("/login");
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <>
      <Grid container justify="center" alignItems="center">
        <Grid item xs={false} sm={3}>
          <Img src={blob_1} alt="Decoration" />
          <Img src={blob_2} alt="Decoration" />
        </Grid>
        <Grid item xs={12} sm={6}>
          <Form onSubmit={handleSubmit(handleData)}>
            <H2>Create Account</H2>
            <InputForm
              name="name"
              reference={register}
              type="text"
              placeholder="Full Name"
              label="Full Name"
              erro={errors.full_name?.message}
            />

            <InputForm
              name="email"
              reference={register}
              type="email"
              placeholder="Email ex.: test@test.com"
              label="Email"
              erro={errors.email?.message}
            />

            <InputForm
              name="email_checker"
              reference={register}
              type="email"
              placeholder="Confirm your Email"
              label="Confirm your email"
              erro={errors.email_checker?.message}
            />

            <InputForm
              name="password"
              reference={register}
              type="password"
              placeholder="Password"
              label="Password"
              erro={errors.password?.message}
            />

            <InputForm
              name="password_checker"
              reference={register}
              type="password"
              placeholder="Confirm your password"
              label="Confirm your password"
              erro={errors.password_checker?.message}
            />
            <SelectArea>
              <SelectLabel for="course_module">Course Module:</SelectLabel>
              <Select name="course_module" ref={register}>
                <option value="Primeiro módulo (Introdução ao Frontend)">
                  Primeiro módulo Q1
                </option>
                <option value="Segundo módulo (Frontend Avançado)">
                  Segundo módulo Q2
                </option>
                <option value="Terceiro módulo (Introdução ao Backend)">
                  Terceiro módulo Q3
                </option>
                <option value="Quarto módulo (Backend Avançado)">
                  Quarto módulo Q4
                </option>
              </Select>
            </SelectArea>

            <Label for="bio">Tell us more about you</Label>
            <Textarea name="bio" placeholder="Biography" ref={register} />

            <InputForm
              name="contact"
              reference={register}
              placeholder="Phone or link your socialmedia"
              type="text"
              label="Contact"
              erro={errors.contact?.message}
            />
            <ButtonSubmit type="submit">Create User</ButtonSubmit>
          </Form>
        </Grid>
        <Grid item xs={false} sm={3}>
          <Img src={blob_3} alt="Decoration" />
        </Grid>
      </Grid>
    </>
  );
};

export default NewUser;
