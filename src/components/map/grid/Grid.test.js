import { render, screen } from "@testing-library/react";
import { Grid } from "./Grid";
import { cellType } from "../../../data/cellType";
import MapCell from "../../../data/MapCell";
import { threeBythreeMap } from "../../../data/testdata/threeBythreeMap";

test("renders single cell grid", () => {
  const data = [new MapCell(cellType.wall, "test cell", true)];
  render(<Grid data={data} cols="1" rows="1" height="100px" width="200px" />);
  const cellText = screen.getByText("test cell");
  expect(cellText).toBeInTheDocument();
});

test("renders 3x3 grid", () => {
  render(
    <Grid
      data={threeBythreeMap}
      cols="3"
      rows="3"
      height="400px"
      width="400px"
    />
  );
  const cells = screen.getAllByTestId("map-grid-cell");
  expect(cells.length).toEqual(9);
});

test("does not render grid with height and width that don't match data", () => {
  render(
    <Grid
      data={threeBythreeMap}
      cols="2"
      rows="2"
      height="400px"
      width="400px"
    />
  );
  const errorText = screen.getByText("Invalid grid.");
  expect(errorText).toBeInTheDocument();
});
