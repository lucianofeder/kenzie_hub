import * as yup from "yup";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import api from "../../services/api";

import {
  Cover,
  FormAdd,
  TitleAdd,
  ButtonClose,
  SelectSkillArea,
  ButtonSubmit,
} from "../MenuAddSkill/styles";
import InputForm from "../InputForm";
import { LabelWork, Div, DivTitle, Error } from "./styles";

const MenuAddSkill = (props) => {
  const { toggleWork, listedWorks, setListedWorks } = props;

  const schema = yup.object().shape({
    title: yup.string().required("Must be filled"),
    description: yup
      .string()
      .min(15, "The description is too short")
      .required("Must be filled"),
    deploy_url: yup
      .string()
      .matches(
        /((https?):\/\/)?(www.)?[a-z0-9-]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#-]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
        "Enter a valid URL"
      )
      .required("Must be filled"),
  });

  const { register, handleSubmit, errors, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    const token = window.localStorage.getItem("authToken");
    console.log(token);
    api
      .post("/users/works", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setListedWorks([...listedWorks, data]))
      .then(() => reset())
      .catch((err) => console.log(err));
  };

  return (
    <Cover>
      <FormAdd onSubmit={handleSubmit(handleData)}>
        <TitleAdd>Work</TitleAdd>
        <ButtonClose onClick={toggleWork} />

        <Div>
          <DivTitle>
            <LabelWork for="title">Title</LabelWork>
            <Error>{errors.title?.message}</Error>
          </DivTitle>
          <InputForm
            name="title"
            type="text"
            placeholder="Title"
            reference={register}
          />
        </Div>

        <Div>
          <DivTitle>
            <LabelWork for="description">Description</LabelWork>
            <Error>{errors.description?.message}</Error>
          </DivTitle>
          <InputForm
            name="description"
            type="text"
            placeholder="Tells us more"
            reference={register}
          />
        </Div>

        <Div>
          <DivTitle>
            <LabelWork for="deploy_url">Url</LabelWork>
            <Error>{errors.deploy_url?.message}</Error>
          </DivTitle>
          <InputForm
            name="deploy_url"
            type="text"
            placeholder="Deploy URL"
            reference={register}
          />
        </Div>

        <ButtonSubmit type="submit">Add</ButtonSubmit>
      </FormAdd>
    </Cover>
  );
};

export default MenuAddSkill;
