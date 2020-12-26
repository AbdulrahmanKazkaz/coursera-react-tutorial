import { Link } from 'react-router-dom';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import { FadeTransform } from 'react-animation-components';

export const Dish = ({ dish }) => {
  return (
    <FadeTransform
      in
      transformProps={{
        exitTransform: 'scale(0.5) translateY(-50%)',
      }}
    >
      <Link className='dish__link' to={`/menu/${dish?.id}`}>
        <Card>
          <CardImg width='100%' src={dish?.image} alt={dish?.name} />
          <CardImgOverlay>
            <CardTitle>{dish?.name}</CardTitle>
          </CardImgOverlay>
        </Card>
      </Link>
    </FadeTransform>
  );
};
