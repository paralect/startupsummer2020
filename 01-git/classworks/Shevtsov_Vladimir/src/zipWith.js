const zipWithIndex = (xs) => {
  if (!Array.isArray(xs)) return [];
  return xs.map((x, i) => [x, i]);
}
module.exports = zipWithIndex; 
