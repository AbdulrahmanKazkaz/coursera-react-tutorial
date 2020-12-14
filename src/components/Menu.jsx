import { useState, useEffect } from "react";
import { dishesItems } from "../shared/dishes";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

export const Menu = () => {
  // Define State
  const [dishes, setDishes] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);

  // Effect
  useEffect(() => {
    setDishes(dishesItems);
  }, []);

  return (
    <div className="container">
      <div className="row">
        {dishes.map((dish) => (
          <div className="col-12 col-md-5 m-1" key={dish.id}>
            <Card onClick={() => setSelectedDish(dish)}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Card>
          </div>
        ))}
      </div>
      {selectedDish && (
        <div className="row">
          <Card>
            <CardImg
              width="100%"
              src={selectedDish.image}
              alt={selectedDish.name}
            />
            <CardBody>
              <CardTitle>{selectedDish.name}</CardTitle>
              <CardText>{selectedDish.description}</CardText>
            </CardBody>
          </Card>
        </div>
      )}
    </div>
  );
};
