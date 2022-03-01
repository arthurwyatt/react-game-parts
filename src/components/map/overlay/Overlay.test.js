import { render, screen, fireEvent } from "@testing-library/react";
import { Overlay } from "./Overlay";

test("renders 3x3 grid", () => {
  render(
    <Overlay
      selected={[]}
      cols={3}
      rows={3}
      height={400}
      width={400}
      onClick={() => {}}
    />
  );
  const cells = screen.getAllByTestId("map-overlay-cell");
  expect(cells.length).toEqual(9);
});

test("Overlay cells are clickable", () => {
  const onClick = jest.fn();
  render(
    <Overlay
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
