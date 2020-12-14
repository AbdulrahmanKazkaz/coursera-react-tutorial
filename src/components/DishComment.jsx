import { useState, useEffect } from "react";
import { COMMENTS } from "../shared/comments";

export const DishComment = () => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    setComments(COMMENTS);
  }, []);

  return (
    <div className="comments">
      <h4>Comments</h4>
      {comments.map((comment) => (
        <div className="comment mb-3" key={comment.id}>
          <div className="text mb-2">{comment.text}</div>
          <div className="author">
            <span className="user"> -- {comment.author} </span>,
            <span className="date"> {comment.date} </span>
          </div>
        </div>
      ))}
    </div>
  );
};
