import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

import InputForm from "../../components/InputForm";
import Button from "@material-ui/core/Button";

import { Form } from "./styles";
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
      <Form onSubmit={handleSubmit(handleData)}>
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

        <Label for="course_module">Course Module</Label>
        <select name="course_module" ref={register}>
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
        </select>

        <Label for="bio">Tell us more about you</Label>
        <textarea name="bio" placeholder="Biography" ref={register} />

        <InputForm
          name="contact"
          reference={register}
          placeholder="Phone or link your socialmedia"
          type="text"
          label="Contact"
          erro={errors.contact?.message}
        />
        <Button type="submit" color="secondary">
          Create User
        </Button>
      </Form>
    </>
  );
};

export default NewUser;
