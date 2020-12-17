import { useState } from "react";

import { Nav } from "./Nav";
import { LoginModal } from "../components/LoginModal";

import { Jumbotron } from "reactstrap";

export const Header = () => {
  const [ModalIsOpen, setModalIsOpen] = useState(false);
  const toggleModal = () => setModalIsOpen(!ModalIsOpen);

  return (
    <>
      <Nav toggleModal={toggleModal} />
      <LoginModal ModalIsOpen={ModalIsOpen} toggleModal={toggleModal} />
      <Jumbotron>
        <div className="container">
          <div className="row row-header">
            <div className="col-12 col-sm-6">
              <h1>Ristorante con Fusion</h1>
              <p>
                We take inspiration from the World's best cuisines, and create a
                unique fusion experience. Our lipsmacking creations will tickle
                your culinary senses!
              </p>
            </div>
          </div>
        </div>
      </Jumbotron>
    </>
  );
};
