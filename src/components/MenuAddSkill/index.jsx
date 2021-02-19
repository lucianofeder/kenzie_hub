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
} from "./styles";
import { SelectLabel, Select } from "../../pages/NewUser/styles";
import InputForm from "../InputForm";

const MenuAddSkill = (props) => {
  const { toggleSkill, listedSkills, setListedSkills } = props;
  const schema = yup.object().shape({
    title: yup.string().required("Must be filled"),
  });

  const { register, handleSubmit, reset } = useForm({
    resolver: yupResolver(schema),
  });

  const handleData = (data) => {
    const token = window.localStorage.getItem("authToken");
    console.log(token);
    api
      .post("/users/techs", data, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then(() => setListedSkills([...listedSkills, data]))
      .catch((err) => console.log(err));
  };

  return (
    <Cover>
      <FormAdd onSubmit={handleSubmit(handleData)}>
        <TitleAdd>Skill</TitleAdd>
        <ButtonClose onClick={toggleSkill} />
        <InputForm
          name="title"
          type="text"
          placeholder="Title"
          reference={register}
        />
        <SelectSkillArea>
          <SelectLabel for="status">Level:</SelectLabel>
          <Select name="status" ref={register}>
            <option value="Básico">Básico</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </Select>
        </SelectSkillArea>
        <ButtonSubmit type="submit">Add</ButtonSubmit>
      </FormAdd>
    </Cover>
  );
};

export default MenuAddSkill;
