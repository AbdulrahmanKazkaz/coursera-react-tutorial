import { Control, Errors } from "react-redux-form";

import { Row, Label, Col } from "reactstrap";

export const InputText = ({ name, holder, validators = {}, messages = {} }) => {
  return (
    <Row className="form-group">
      <Label htmlFor={name} md={2}>
        {holder}
      </Label>
      <Col md={10}>
        <Control.text
          model={`.${name}`}
          id={name}
          name={name}
          placeholder={holder}
          className="form-control"
          validators={validators}
        />
        <Errors
          className="text-danger"
          model={`.${name}`}
          show="touched"
          messages={messages}
        />
      </Col>
    </Row>
  );
};
