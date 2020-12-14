import { useState, useEffect } from "react";
import { dishesItems } from "../shared/dishes";
import { DishDetails } from "./DishDetails";
import { DishComment } from "./DishComment";
import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

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
          <div className="col-12 col-md-5 m-1">
            <DishDetails dish={selectedDish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <DishComment />
          </div>
        </div>
      )}
    </div>
  );
};
