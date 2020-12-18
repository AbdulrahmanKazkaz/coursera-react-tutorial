import { useSelector } from "react-redux";

// Import Components
import { Dish } from "../components/menu/Dish";
import { BreadCrumb } from "../components/BreadCrumb";

export const Menu = () => {
  const dishes = useSelector((state) => state.dishes);
  return (
    <div className="container">
      <BreadCrumb name="Menu" />
      <div className="row mb-3">
        {dishes &&
          dishes.map((dish) => (
            <div className="col-6 col-md-3" key={dish.id}>
              <Dish dish={dish} />
            </div>
          ))}
      </div>
    </div>
  );
};
