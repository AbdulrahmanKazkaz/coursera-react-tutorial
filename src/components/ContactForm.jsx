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
  const [touched, setTouched] = useState({
    firstName: false,
    lastName: false,
    telNum: false,
    email: false,
  });

  const handleInputChange = (e, setter) => {
    const target = e.target;
    const value = target.type == "chechbox" ? target.checked : target.value;
    setter(value);
  };

  const handleBlur = (faild) => (evt) => {
    setTouched({
      ...touched,
      [faild]: true,
    });
  };

  const validate = (first, last, number, email) => {
    const errors = {
      firstName: "",
      lastName: "",
      telNum: "",
      email: "",
    };
    const numberRegex = /^\d+$/;

    if (touched.firstName) {
      if (first.length < 3) {
        errors.firstName = "First Name Should Be > 3 Characters";
      } else if (first.length > 10) {
        errors.firstName = "First Name Should Be < 10 Characters";
      }
    }
    if (touched.lastName) {
      if (last.length < 3) {
        errors.lastName = "First Name Should Be > 3 Characters";
      } else if (last.length > 10) {
        errors.lastName = "First Name Should Be < 10 Characters";
      }
    }

    if (touched.telNum) {
      if (!numberRegex.test(number)) {
        errors.telNum = "Tel. Number Should Contain Only Numbers";
      } else if (number.length > 10) {
        errors.telNum = "Tel. Number Should Be <= 10 Numbers";
      }
    }

    if (touched.email) {
      if (email.split("").filter((x) => x === "@").length !== 1) {
        errors.email = "Invalid Email";
      }
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(valid.errors);
  };

  const errors = validate(firstName, lastName, telNum, email);

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
            onBlur={handleBlur("firstName")}
            Setter={setFirstName}
            errors={errors.firstName}
          />
          <InputText
            name="lastname"
            value={lastName}
            placeholder="Last Name"
            onChange={handleInputChange}
            onBlur={handleBlur("lastName")}
            Setter={setLastName}
            errors={errors.lastName}
          />
          <InputText
            name="telnun"
            value={telNum}
            placeholder="Tel. Number"
            onChange={handleInputChange}
            onBlur={handleBlur("telNum")}
            Setter={setTelNum}
            errors={errors.telNum}
          />
          <InputText
            name="email"
            value={email}
            placeholder="Email"
            onChange={handleInputChange}
            onBlur={handleBlur("email")}
            Setter={setEmail}
            errors={errors.email}
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
          <InputSubmit color="success" />
        </Form>
      </div>
    </div>
  );
};
