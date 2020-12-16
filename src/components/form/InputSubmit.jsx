import { Button, FormGroup, Col } from "reactstrap";

export const InputSubmit = ({
  color = "primary",
  placeholder = " Send Feedback",
}) => {
  return (
    <FormGroup row>
      <Col md={{ size: 10, offset: 2 }}>
        <Button type="submit" color={color}>
          {placeholder}
        </Button>
      </Col>
    </FormGroup>
  );
};
