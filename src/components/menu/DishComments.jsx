import { useState } from 'react';
import { Button } from 'reactstrap';
import { showDate } from '../../mixins/date';
import { CommentModal } from '../modal/CommentModal';
import { Fade, Stagger } from 'react-animation-components';

export const DishComments = ({ comments, dishId }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Stagger in>
        {comments.map((comment) => (
          <Fade in>
            <div className='comment mb-3' key={comment.id}>
              <div className='text mb-2'>{comment.comment}</div>
              <div className='author comment__text'>
                <span className='user'> {comment.author} , </span>
                <span className='date'>{showDate(comment.date)}</span>
              </div>
            </div>
          </Fade>
        ))}
        <Button outline onClick={() => toggle()}>
          <i className='fa fa-edit fa-lg'></i> Submit Comment
        </Button>
        <CommentModal
          ModalIsOpen={isOpen}
          toggleModal={toggle}
          dishId={dishId}
        />
      </Stagger>
    </>
  );
};
