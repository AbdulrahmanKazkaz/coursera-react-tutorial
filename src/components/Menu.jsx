import { useState, useEffect } from "react";
import { dishesItems } from "../api/dishes";
import { Media } from "reactstrap";

export const Menu = () => {
  // Define State
  const [dishes, setDishes] = useState([]);

  // Effect
  useEffect(() => {
    setDishes(dishesItems);
  }, []);

  return (
    <div className="container">
      <div className="row">
        <Media list>
          {dishes.map((dish) => (
            <div className="col-12 mt-5" key={dish.id}>
              <Media tag="li">
                <Media left middle>
                  <Media src={dish.image} alt={dish.name} />
                </Media>
                <Media body className="ml-5">
                  <Media heading>{dish.name}</Media>
                  <p>{dish.description}</p>
                </Media>
              </Media>
            </div>
          ))}
        </Media>
      </div>
    </div>
  );
};
