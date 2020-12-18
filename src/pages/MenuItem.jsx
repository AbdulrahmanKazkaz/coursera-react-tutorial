import { useSelector } from "react-redux";

// Import Menu Components
import { DishDetails } from "../components/menu/DishDetails";
import { DishComments } from "../components/menu/DishComments";
import { BreadCrumb } from "../components/BreadCrumb";

export const MenuItem = ({ match }) => {
  // Get All Dishes
  const dish = useSelector((state) => state.dishes).filter(
    (dish) => dish.id == match.params.dishId
  )[0];
  // Git All Comments
  const comments = useSelector((state) => state.comments).filter(
    (comment) => comment.dishId == match.params.dishId
  );

  return (
    <>
      {dish && (
        <div className="container">
          <BreadCrumb menuComponent={dish.name} />
          <div className="row m-1">
            <div className="col-12 col-md-6">
              <DishDetails dish={dish} />
            </div>
            <div className="col-12 col-md-6 pt-1">
              <h3>Comments </h3>
              <hr />
              {comments && <DishComments comments={comments} />}
            </div>
          </div>
        </div>
      )}
      {!dish && (
        <h4 className="text-center text-danger my-5">item not found - 404</h4>
      )}
    </>
  );
};
