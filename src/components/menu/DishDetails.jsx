import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap';

export const DishDetails = ({ dish }) => {
  return (
    <Card>
      <CardImg width='100%' src={dish?.image} alt={dish?.name} />
      <CardBody>
        <CardTitle tag='h4'>{dish?.name}</CardTitle>
        <CardText>{dish?.description}</CardText>
      </CardBody>
    </Card>
  );
};
