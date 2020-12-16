import { useState, useEffect } from "react";

import { PROMOTIONS } from "../shared/promotions";
import { LEADERS } from "../shared/leaders";
import { DISHES } from "../shared/dishes";

import { RenderCard } from "../components/RenderCard";

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
      <div className="row align-item-start">
        <div className="col-12 col-md m-1">
          <RenderCard item={dishes} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={promotion} />
        </div>
        <div className="col-12 col-md m-1">
          <RenderCard item={leaders} />
        </div>
      </div>
    </div>
  );
};
