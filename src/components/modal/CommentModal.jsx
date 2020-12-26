import { LocalForm, Control, Errors } from 'react-redux-form';
import { textValidation } from '../../helpers/validation';
import { useDispatch } from 'react-redux';
import { addComment } from '../../redux/actions';
import {
  Modal,
  ModalBody,
  ModalHeader,
  Row,
  Label,
  Col,
  Button,
} from 'reactstrap';

export const CommentModal = ({ ModalIsOpen, toggleModal, dishId }) => {
  const validText = textValidation(2, 12, true);
  const dispatch = useDispatch();

  const handleLogin = (value) => {
    toggleModal();
    let rating = value?.rating;
    if (!rating) {
      rating = 1;
    }
    dispatch(addComment(dishId, value.name, value.comment, rating));
  };

  return (
    <Modal isOpen={ModalIsOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Submit Comment</ModalHeader>
      <ModalBody>
        <LocalForm onSubmit={(val) => handleLogin(val)}>
          <Row className='form-group'>
            <Label htmlFor='rating' md={12}>
              Rating
            </Label>
            <Col md={12}>
              <Control.select
                model='.rating'
                name='rating'
                id='rating'
                className='form-control'
              >
                <option value='1'>1</option>
                <option value='2'>2</option>
                <option value='3'>3</option>
                <option value='4'>4</option>
                <option value='5'>5</option>
              </Control.select>
            </Col>
          </Row>
          <Row className='form-group'>
            <Label htmlFor='name' md={12}>
              Your Name
            </Label>
            <Col md={12}>
              <Control.text
                model='.name'
                id='name'
                name='name'
                placeholder='Your Name'
                className='form-control'
                validators={validText.role}
              />
              <Errors
                className='text-danger'
                model='.name'
                show='touched'
                messages={validText.messages}
              />
            </Col>
          </Row>
          <Row className='form-group'>
            <Label htmlFor='comment' md={12}>
              Comment
            </Label>
            <Col md={12}>
              <Control.textarea
                model='.comment'
                id='comment'
                name='comment'
                rows='5'
                className='form-control'
              />
            </Col>
          </Row>
          <Row className='form-group'>
            <Col md={12}>
              <Button type='submit' color='primary'>
                Submit
              </Button>
            </Col>
          </Row>
        </LocalForm>
      </ModalBody>
    </Modal>
  );
};
