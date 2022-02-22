import { render, screen } from "@testing-library/react";
import { Grid } from "./Grid";
import { cellType } from "../../../data/cellType";
import MapCell from "../../../data/MapCell";

test("renders single cell grid", () => {
  const data = [new MapCell(cellType.wall, "test cell", true)];
  render(<Grid data={data} width={1} height={1} />);
  const cellText = screen.getByText("test cell");
  expect(cellText).toBeInTheDocument();
});

test("renders 3x3 grid", () => {
  const cell = new MapCell(cellType.wall, "3 x 3", true);
  const data = [cell, cell, cell, cell, cell, cell, cell, cell, cell];
  render(<Grid data={data} width="3" height="3" />);
  const cells = screen.getAllByText("3 x 3");
  expect(cells.length).toEqual(9);
});

test("does not render grid with height and width that don't match data", () => {
  const cell = new MapCell(cellType.wall, "3 x 3", true);
  const data = [cell, cell, cell, cell, cell, cell, cell];
  render(<Grid data={data} width="3" height="3" />);
  const errorText = screen.getByText("Invalid grid.");
  expect(errorText).toBeInTheDocument();
});
