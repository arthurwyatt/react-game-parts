import { render, screen, fireEvent } from "@testing-library/react";
import { World } from "./World";
import { threeBythreeMap } from "../../../data/testdata/threeBythreeMap";

test("renders 3x3 grid", () => {
  render(
    <World
      mapData={threeBythreeMap}
      selected={[]}
      cols={3}
      rows={3}
      height={400}
      width={400}
      onClick={() => {}}
    />
  );
  const cells = screen.getAllByTestId("map-grid-cell");
  expect(cells.length).toEqual(9);
  const overlaycells = screen.getAllByTestId("map-overlay-cell");
  expect(overlaycells.length).toEqual(9);
});

test("Overlay cells are clickable", () => {
  const onClick = jest.fn();
  render(
    <World
      mapData={threeBythreeMap}
      selected={[]}
      cols={3}
      rows={3}
      height={400}
      width={400}
      onClick={onClick}
    />
  );
  const cell = screen.getAllByTestId("map-overlay-cell")[0];
  fireEvent.click(cell);
  expect(onClick).toHaveBeenCalled();
});
