import { indexToXy, xYtoIndex } from "./mapUtils";

test("indexToXy", () => {
  expect(xYtoIndex(0, 0, 3)).toEqual(0);
  expect(xYtoIndex(2, 0, 3)).toEqual(2);
  expect(xYtoIndex(0, 1, 3)).toEqual(3);
  expect(xYtoIndex(2, 2, 3)).toEqual(8);
});

test("indexToXy", () => {
  expect(indexToXy(0, 3)).toMatchObject({
    x: 0,
    y: 0,
  });
  expect(indexToXy(2, 3)).toMatchObject({
    x: 2,
    y: 0,
  });
  expect(indexToXy(6, 3)).toMatchObject({
    x: 0,
    y: 2,
  });
  expect(indexToXy(8, 3)).toMatchObject({
    x: 2,
    y: 2,
  });
});
