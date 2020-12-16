import { FormGroup, Label, Input, Col } from "reactstrap";
export const InputText = ({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  Setter,
}) => {
  return (
    <FormGroup row>
      <Label htmlFor="fistname" md={2}>
        {placeholder}
      </Label>
      <Col md={10}>
        <Input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={() => onChange(event, Setter)}
        />
      </Col>
    </FormGroup>
  );
};
