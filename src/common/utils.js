export const convertUpperCamelCase = (text) => {
  return text.replace(/\w+/g, function (w) {
    return w[0].toUpperCase() + w.slice(1).toLowerCase();
  });
};
