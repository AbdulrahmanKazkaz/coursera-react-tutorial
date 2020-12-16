export const DishComment = ({ comments }) => {
  const renderDate = (d) => {
    const opts = {
      year: "numeric",
      month: "short",
      day: "2-digit",
    };
    const date = new Date(Date.parse(d));
    return Intl.DateTimeFormat("en-US", opts).format(date);
  };

  return (
    <>
      {comments.map((comment) => (
        <div className="comment mb-3" key={comment.id}>
          <div className="text mb-2">{comment.comment}</div>
          <div className="author text-warning">
            <span className="user"> {comment.author} : </span>
            <span className="date">{renderDate(comment.date)}</span>
          </div>
        </div>
      ))}
    </>
  );
};
