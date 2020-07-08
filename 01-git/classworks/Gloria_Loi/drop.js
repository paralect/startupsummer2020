export const drop = (arr, index) => {
  if (!Array.isArray(arr)) {
    throw new Error("Unexception error: first parameter should be an array");
  }

  if (typeof index !== "number") {
    throw new Error("Unexception error: second parameter should be a number");
  }

  return arr.filter((_, i) => i + 1 > index);
};
