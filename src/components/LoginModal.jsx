import { useState } from "react";
import {
  Modal,
  ModalBody,
  ModalHeader,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

export const LoginModal = ({ ModalIsOpen, toggleModal }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    toggleModal();
    e.preventDefault();
    console.log(username, password);
  };

  return (
    <Modal isOpen={ModalIsOpen} toggle={toggleModal}>
      <ModalHeader toggle={toggleModal}>Login</ModalHeader>
      <ModalBody>
        <Form onSubmit={handleLogin}>
          <FormGroup>
            <Label htmlFor="username">Username</Label>
            <Input
              type="text"
              id="username"
              name="username"
              autoComplete="off"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label htmlFor="password">Password</Label>
            <Input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormGroup>
          <Button type="submit" color="success">
            Login
          </Button>
        </Form>
      </ModalBody>
    </Modal>
  );
};
