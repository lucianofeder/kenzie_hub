import { Input, Label, Error } from "./styles";

const InputForm = (props) => {
  return (
    <>
      {props.label && (
        <Label for={props.name}>
          {props.label} <Error>{props.erro}</Error>
        </Label>
      )}
      <Input
        name={props.name}
        ref={props.reference}
        type={props.type}
        placeholder={props.placeholder}
      />
    </>
  );
};

export default InputForm;
