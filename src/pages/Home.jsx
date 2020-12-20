import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchDishes } from "../redux/actions";
// Import Components
import { HomeCard } from "../components/HomeCard";
import { Loading } from "../components/Loading";

export const Home = () => {
  const dispatch = useDispatch();
  const dishes = useSelector((state) => state.dishes);

  const leaders = useSelector((state) => state.leaders).filter(
    (lead) => lead.featured
  )[0];

  const promotion = useSelector((state) => state.promotion).filter(
    (promo) => promo.featured
  )[0];

  useEffect(() => {
    dispatch(fetchDishes());
  }, []);

  return (
    <div className="container">
      {dishes?.isLoading && (
        <div className="row">
          <Loading />
        </div>
      )}
      {dishes?.dishes && (
        <div className="row align-item-start my-2">
          <div className="col-12 col-md m-1">
            <HomeCard
              item={dishes?.dishes.filter((dish) => dish.featured)[0]}
            />
          </div>
          <div className="col-12 col-md m-1">
            <HomeCard item={promotion} />
          </div>
          <div className="col-12 col-md m-1">
            <HomeCard item={leaders} />
          </div>
        </div>
      )}
    </div>
  );
};
