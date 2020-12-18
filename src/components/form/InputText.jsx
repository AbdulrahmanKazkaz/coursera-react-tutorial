import { Control } from "react-redux-form";

import { Row, Label, Col } from "reactstrap";

export const InputText = ({ name, placeholder }) => {
  return (
    <Row className="form-group">
      <Label htmlFor={name} md={2}>
        {placeholder}
      </Label>
      <Col md={10}>
        <Control.text
          model={`.${name}`}
          id={name}
          name={name}
          placeholder={placeholder}
          className="form-control"
        />
      </Col>
    </Row>
  );
};
