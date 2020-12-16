import { useState } from "react";
import { Form, FormGroup, Label, Input, Col } from "reactstrap";
import { InputText } from "../components/form/InputText";
import { InputSelect } from "../components/form/InputSelect";
import { InputSubmit } from "../components/form/InputSubmit";
export const ContactForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [telNum, setTelNum] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);
  const [contactType, setContactType] = useState(1);
  const [message, setMessage] = useState("");

  const handleInputChange = (e, setter) => {
    const target = e.target;
    const value = target.type == "chechbox" ? target.checked : target.value;
    setter(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("done");
  };

  return (
    <div className="row row-content">
      <div className="col-12">
        <h3>Send us Your Feedback</h3>
      </div>
      <div className="col-12 col-md-9 mt-3">
        <Form onSubmit={handleSubmit}>
          <InputText
            name="firstname"
            value={firstName}
            placeholder="First Name"
            onChange={handleInputChange}
            Setter={setFirstName}
          />
          <InputText
            name="lastname"
            value={lastName}
            placeholder="Last Name"
            onChange={handleInputChange}
            Setter={setLastName}
          />
          <InputText
            name="telnun"
            value={telNum}
            placeholder="Tel. Number"
            onChange={handleInputChange}
            Setter={setTelNum}
          />
          <InputText
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleInputChange}
            Setter={setEmail}
          />

          <FormGroup row>
            <Col md={{ size: 6, offset: 2 }}>
              <FormGroup check>
                <Label check>
                  <Input
                    type="checkbox"
                    name="agree"
                    checked={agree}
                    onChange={() => handleInputChange(event, setAgree)}
                  />
                  <b>May we Contact you ?</b>
                </Label>
              </FormGroup>
            </Col>
            <InputSelect
              name="contactType"
              value={contactType}
              onChange={handleInputChange}
              Setter={setContactType}
              options={[
                { val: 1, text: "Tel. Number" },
                { val: 2, text: "Email" },
              ]}
            />
          </FormGroup>
          <InputText
            type="textarea"
            name="message"
            value={message}
            placeholder="Your Feedback"
            onChange={handleInputChange}
            Setter={setMessage}
          />
          <InputSubmit />
        </Form>
      </div>
    </div>
  );
};
