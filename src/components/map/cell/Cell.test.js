import { render, screen } from "@testing-library/react";
import { Cell } from "./Cell";
import { cellType } from "../../../data/cellType";

test("renders cell", () => {
  render(<Cell label="test cell" cellType={cellType.empty} />);
  const cellText = screen.getByText("test cell");
  expect(cellText).toBeInTheDocument();
});
