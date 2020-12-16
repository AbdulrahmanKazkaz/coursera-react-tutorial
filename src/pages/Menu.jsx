import { useState, useEffect } from "react";
// Get Data
import { DISHES } from "../shared/dishes";
// Import Components
import { Dish } from "../components/menu/Dish";
import { BreadCrumb } from "../components/BreadCrumb";

export const Menu = () => {
  // Define State
  const [dishes, setDishes] = useState([]);

  // Effect
  useEffect(() => {
    setDishes(DISHES);
  }, []);

  return (
    <div className="container">
      <BreadCrumb name="Menu" />
      <div className="row">
        {dishes &&
          dishes.map((dish) => (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
              <Dish dish={dish} />
            </div>
          ))}
      </div>
    </div>
  );
};
