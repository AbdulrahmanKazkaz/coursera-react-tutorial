import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchDishes } from "../redux/actions";
// Import Components
import { Dish } from "../components/menu/Dish";
import { BreadCrumb } from "../components/BreadCrumb";
import { Loading } from "../components/Loading";

export const Menu = () => {
  const dispatch = useDispatch();
  const dishesStore = useSelector((state) => state.dishes);

  useEffect(() => {
    dispatch(fetchDishes());
  }, []);

  return (
    <div className="container">
      {dishesStore?.isLoading && (
        <div className="row">
          <Loading />
        </div>
      )}
      {dishesStore?.dishes && (
        <>
          <BreadCrumb name="Menu" />
          <div className="row mb-3">
            {dishesStore?.dishes &&
              dishesStore?.dishes.map((dish) => (
                <div className="col-6 col-md-3" key={dish.id}>
                  <Dish dish={dish} />
                </div>
              ))}
          </div>
        </>
      )}
    </div>
  );
};
