import { FormGroup, Label, Input, Col, FormFeedback } from "reactstrap";

export const InputText = ({
  type = "text",
  name,
  value,
  placeholder,
  onChange,
  onBlur,
  Setter,
  errors = null,
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
          onBlur={onBlur}
          valid={errors == ""}
          invalid={errors !== "" && type == "text"}
        />
        <FormFeedback>{errors}</FormFeedback>
      </Col>
    </FormGroup>
  );
};
