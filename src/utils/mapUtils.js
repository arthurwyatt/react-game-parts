export const xYtoIndex = (x, y, width) => {
  return x + y * width;
};

export const indexToXy = (index, width) => {
  const x = index % width;
  const y = Math.floor(index / width);
  return { x: x, y: y };
};
