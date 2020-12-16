import { Link } from "react-router-dom";

import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

export const Dish = ({ dish }) => {
  return (
    <Link to={`/menu/${dish.id}`}>
      <Card>
        <CardImg width="100%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    </Link>
  );
};
