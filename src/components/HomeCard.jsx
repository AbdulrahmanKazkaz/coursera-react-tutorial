import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
} from "reactstrap";

export const HomeCard = ({ item }) => {
  return (
    <Card className="home__card">
      <CardImg src={item?.image} alt={item?.name} />
      <CardBody>
        <CardTitle tag="h5">{item?.name}</CardTitle>
        {item?.designation ? (
          <CardSubtitle>{item?.designation}</CardSubtitle>
        ) : null}
        <CardText>{item?.description}</CardText>
      </CardBody>
    </Card>
  );
};
