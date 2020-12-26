import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchDishes, fetchLeaders, fetchPromotions } from '../redux/actions';
// Import Components
import { HomeCard } from '../components/HomeCard';
import { Loading } from '../components/Loading';

export const Home = () => {
  const dispatch = useDispatch();

  const dishes = useSelector((state) => state.dishes);

  const leaders = useSelector((state) => state.leaders);

  const promotion = useSelector((state) => state.promotion);

  useEffect(() => {
    dispatch(fetchDishes());
    dispatch(fetchLeaders());
    dispatch(fetchPromotions());
  }, []);

  return (
    <div className='container'>
      {dishes?.isLoading && (
        <div className='row'>
          <Loading />
        </div>
      )}

      <div className='row align-item-start my-2'>
        {dishes?.dishes && (
          <div className='col-12 col-md m-1'>
            <HomeCard
              item={dishes?.dishes.filter((dish) => dish.featured)[0]}
            />
          </div>
        )}
        {leaders?.leaders && (
          <div className='col-12 col-md m-1'>
            <HomeCard
              item={leaders?.leaders.filter((leader) => leader.featured)[0]}
            />
          </div>
        )}
        {promotion?.promos && (
          <div className='col-12 col-md m-1'>
            <HomeCard
              i
              item={promotion?.promos.filter((promo) => promo.featured)[0]}
            />
          </div>
        )}
      </div>
    </div>
  );
};
