import { Row, Label, Col } from 'reactstrap';
import { Form, Control, actions } from 'react-redux-form';
import {
  textValidation,
  numberValidation,
  emailValidation,
} from '../helpers/validation';
import { InputText } from '../components/form/InputText';
import { InputSubmit } from '../components/form/InputSubmit';
import { useDispatch } from 'react-redux';

export const ContactForm = () => {
  // Use Form Validation
  const validText = textValidation(3, 15, true);
  const validNumber = numberValidation(9, 12, true);
  const validEmail = emailValidation(6, 20, true);
  const dispatch = useDispatch();

  const resetFeedback = actions.reset('feedback');

  // Form Submition Event
  const handleSubmit = (values) => {
    alert(JSON.stringify(values));
    dispatch(resetFeedback);
  };

  return (
    <div className='row row-content'>
      <div className='col-12'>
        <h3>Send us Your Feedback</h3>
      </div>
      <div className='col-12 col-md-9 mt-3'>
        <Form model='feedback' onSubmit={(val) => handleSubmit(val)}>
          <InputText
            name='firstname'
            holder='First Name'
            validators={validText.role}
            messages={validText.messages}
          />
          <InputText
            name='lastname'
            holder='Last Name'
            validators={validText.role}
            messages={validText.messages}
          />
          <InputText
            name='telnun'
            holder='Tel. Number'
            validators={validNumber.role}
            messages={validNumber.messages}
          />
          <InputText
            name='email'
            holder='Email'
            validators={validEmail.role}
            messages={validEmail.messages}
          />
          <Row className='form-group'>
            <Col md={{ size: 6, offset: 2 }}>
              <div className='form-check'>
                <Label check>
                  <Control.checkbox
                    model='.agree'
                    name='agree'
                    className='form-check-input'
                  />
                  <b>May we Contact you ?</b>
                </Label>
              </div>
            </Col>
            <Col md={{ size: 3, offset: 1 }}>
              <Control.select
                model='.contactType'
                name='contactType'
                className='form-control'
              >
                <option value='1'>Tel.</option>
                <option value='2'>Email</option>
              </Control.select>
            </Col>
          </Row>
          <Row className='form-group'>
            <Label htmlFor='message' md={2}>
              Your Feedback
            </Label>
            <Col md={10}>
              <Control.textarea
                model='.message'
                id='message'
                name='message'
                rows='7'
                className='form-control'
              />
            </Col>
          </Row>
          <InputSubmit color='success' />
        </Form>
      </div>
    </div>
  );
};
