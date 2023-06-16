export default function getUniqueItems(arrays) {
  const flatArray = arrays.flatMap((array) => array);
  const uniqueItems = [...new Set(flatArray)];
  return uniqueItems;
}
