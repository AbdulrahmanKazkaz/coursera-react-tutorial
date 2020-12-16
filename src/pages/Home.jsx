import { useState, useEffect } from "react";

import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { DISHES } from "../shared/dishes";

import { HomeCard } from "../components/HomeCard";

export const Home = () => {
  const [dishes, setDishes] = useState([]);
  const [promotion, setPromotion] = useState([]);
  const [leaders, setLeaders] = useState([]);

  useEffect(() => {
    setDishes(DISHES.filter((dish) => dish.featured)[0]);
    setPromotion(PROMOTIONS.filter((promo) => promo.featured)[0]);
    setLeaders(LEADERS.filter((leader) => leader.featured)[0]);
  }, []);

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
