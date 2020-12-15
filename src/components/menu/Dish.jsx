import { Card, CardImg, CardImgOverlay, CardTitle } from "reactstrap";

export const Dish = ({ dish, onClick }) => {
  return (
    <Card onClick={() => onClick()}>
      <CardImg width="100%" src={dish.image} alt={dish.name} />
      <CardImgOverlay>
        <CardTitle>{dish.name}</CardTitle>
      </CardImgOverlay>
    </Card>
  );
};
