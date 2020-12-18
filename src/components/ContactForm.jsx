import { Row, Label, Col } from "reactstrap";
import { LocalForm, Control } from "react-redux-form";
import { InputText } from "../components/form/InputText";
import { InputSubmit } from "../components/form/InputSubmit";

export const ContactForm = () => {
  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div className="row row-content">
      <div className="col-12">
        <h3>Send us Your Feedback</h3>
      </div>
      <div className="col-12 col-md-9 mt-3">
        <LocalForm onSubmit={(val) => handleSubmit(val)}>
          <InputText name="firstname" placeholder="First Name" />
          <InputText name="lastname" placeholder="Last Name" />
          <InputText name="telnun" placeholder="Tel. Number" />
          <InputText name="email" placeholder="Email" />
          <Row className="form-group">
            <Col md={{ size: 6, offset: 2 }}>
              <div className="form-check">
                <Label check>
                  <Control.checkbox
                    model=".agree"
                    name="agree"
                    className="form-check-input"
                  />
                  <b>May we Contact you ?</b>
                </Label>
              </div>
            </Col>
            <Col md={{ size: 3, offset: 1 }}>
              <Control.select
                model=".contactType"
                name="contactType"
                className="form-control"
              >
                <option value="1">Tel.</option>
                <option value="2">Email</option>
              </Control.select>
            </Col>
          </Row>
          <Row className="form-group">
            <Label htmlFor="message" md={2}>
              Your Feedback
            </Label>
            <Col md={10}>
              <Control.textarea
                model=".message"
                id="message"
                name="message"
                rows="7"
                className="form-control"
              />
            </Col>
          </Row>
          <InputSubmit color="success" />
        </LocalForm>
      </div>
    </div>
  );
};
