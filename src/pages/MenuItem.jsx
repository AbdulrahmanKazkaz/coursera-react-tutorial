import { useState, useEffect } from "react";

// Get Data
import { DISHES } from "../shared/dishes";
import { COMMENTS } from "../shared/comments";

// Import Menu Components
import { DishDetails } from "../components/menu/DishDetails";
import { DishComment } from "../components/menu/DishComment";
import { BreadCrumb } from "../components/BreadCrumb";

export const MenuItem = ({ match, history }) => {
  const [dish, setDish] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setDish(DISHES.filter((dish) => dish.id == match.params.dishId)[0]);
    setComments(
      COMMENTS.filter((comment) => comment.dishId == match.params.dishId)
    );
  }, []);

  return (
    <>
      {dish && (
        <div className="container">
          <BreadCrumb menuComponent={dish.name} />
          <div className="row m-1">
            <div className="col-12 col-md-6">
              <DishDetails dish={dish} />
            </div>
            <div className="col-12 col-md-6 pt-5">
              {comments && <DishComment comments={comments} />}
            </div>
          </div>
        </div>
      )}
      {!dish && <h3 className="text-center my-5">Item Not Found</h3>}
    </>
  );
};
