import { useSelector } from "react-redux";

import { HomeCard } from "../components/HomeCard";

export const Home = () => {
  // Get All Leaders
  const leaders = useSelector((state) => state.leaders).filter(
    (leader) => leader.featured
  )[0];
  // Get All Dishes
  const dishes = useSelector((state) => state.dishes).filter(
    (dish) => dish.featured
  )[0];
  // Get All Promotion
  const promotion = useSelector((state) => state.promotion).filter(
    (promo) => promo.featured
  )[0];

  return (
    <div className="container">
      <div className="row align-item-start my-2">
        <div className="col-12 col-md m-1">
          <HomeCard item={dishes} />
        </div>
        <div className="col-12 col-md m-1">
          <HomeCard item={promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <HomeCard item={leaders} />
        </div>
      </div>
    </div>
  );
};
