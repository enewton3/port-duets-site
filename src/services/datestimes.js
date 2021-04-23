export const processDateTime = (str) => {
  var date = new Date(str);
  return date.toLocaleString();
};
