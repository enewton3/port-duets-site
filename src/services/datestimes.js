//Make a pretty date time from a timestamp string
export const processDateTime = (str) => {
  var date = new Date(str);
  return date.toLocaleString();
};
