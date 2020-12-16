import { useState, useEffect } from "react";
// Get Data
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";
// Import Components
import { Dish } from "../components/menu/Dish";
import { DishDetails } from "../components/menu/DishDetails";
import { DishComment } from "../components/menu/DishComment";
import { BreadCrumb } from "../components/BreadCrumb";

export const Menu = () => {
  // Define State
  const [dishes, setDishes] = useState([]);
  const [comments, setComments] = useState([]);
  const [selectedDish, setSelectedDish] = useState(null);

  // Effect
  useEffect(() => {
    setDishes(DISHES);
    setComments(COMMENTS);
  }, []);

  return (
    <div className="container">
      <BreadCrumb name="Menu" />
      <div className="row">
        {dishes &&
          dishes.map((dish) => (
            <div className="col-12 col-md-5 m-1" key={dish.id}>
              <Dish dish={dish} onClick={() => setSelectedDish(dish)} />
            </div>
          ))}
      </div>
      {selectedDish && (
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            <DishDetails dish={selectedDish} />
          </div>
          <div className="col-12 col-md-5 m-1">
            <DishComment
              comments={comments.filter((com) => com.dishId == selectedDish.id)}
            />
          </div>
        </div>
      )}
    </div>
  );
};
