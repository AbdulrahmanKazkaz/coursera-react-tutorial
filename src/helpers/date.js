export const showDate = (date) => {
  const opts = {
    year: "numeric",
    month: "short",
    day: "2-digit",
  };
  const newData = new Date(Date.parse(date));
  return Intl.DateTimeFormat("en-US", opts).format(newData);
};
