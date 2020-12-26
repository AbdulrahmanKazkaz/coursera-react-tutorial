import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDishes, fetchLeaders, fetchPromotions } from '../redux/actions';
import { HomeCard } from '../components/HomeCard';
import { Loading } from '../components/Loading';
import { FadeTransform } from 'react-animation-components';

export const Home = () => {
  const dispatch = useDispatch();

  const dishes = useSelector((state) => state.dishes.dishes);
  const leaders = useSelector((state) => state.leaders.leaders);
  const promotion = useSelector((state) => state.promotion.promos);

  useEffect(() => {
    dispatch(fetchDishes());
    dispatch(fetchLeaders());
    dispatch(fetchPromotions());
  }, []);

  return (
    <div className='container'>
      {(!dishes || !leaders || !promotion) && (
        <div className='row'>
          <Loading />
        </div>
      )}
      {dishes && leaders && promotion && (
        <FadeTransform
          in
          transformProps={{
            exitTransform: 'scale(0.2) translateY(-50%)',
          }}
        >
          <div className='row align-item-start my-2'>
            <div className='col-12 col-md m-1'>
              <HomeCard item={dishes.filter((dish) => dish.featured)[0]} />
            </div>
            <div className='col-12 col-md m-1'>
              <HomeCard item={leaders.filter((leader) => leader.featured)[0]} />
            </div>
            <div className='col-12 col-md m-1'>
              <HomeCard
                i
                item={promotion.filter((promo) => promo.featured)[0]}
              />
            </div>
          </div>
        </FadeTransform>
      )}
    </div>
  );
};
