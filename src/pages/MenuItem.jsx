import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDishes } from "../redux/actions";
// Import Menu Components
import { DishDetails } from "../components/menu/DishDetails";
import { DishComments } from "../components/menu/DishComments";
import { BreadCrumb } from "../components/BreadCrumb";
import { Loading } from "../components/Loading";

export const MenuItem = ({ match }) => {
  const dispatch = useDispatch();
  const [dish, setDish] = useState(null);

  const dishes = useSelector((state) => state.dishes);
  const comments = useSelector((state) => state.comments).filter(
    (comment) => comment.dishId == match.params.dishId
  );

  useEffect(() => {
    dispatch(fetchDishes());
  }, []);

  useEffect(() => {
    if (dishes.dishes) {
      setDish(
        dishes.dishes.filter((dish) => dish.id == match.params.dishId)[0]
      );
    }
  }, [dishes.dishes]);

  return (
    <>
      {dish && (
        <div className="container">
          <BreadCrumb menuComponent={dish?.name} />
          <div className="row m-1">
            <div className="col-12 col-md-6">
              <DishDetails dish={dish} />
            </div>
            <div className="col-12 col-md-6 pt-1">
              <h3>Comments </h3>
              <hr />
              {comments && (
                <DishComments comments={comments} dishId={dish.id} />
              )}
            </div>
          </div>
        </div>
      )}
      {dishes.isLoading && (
        <div className="row">
          <Loading />
        </div>
      )}
      {!dish && dishes.isLoading == false && <h2>Not Found</h2>}
    </>
  );
};
