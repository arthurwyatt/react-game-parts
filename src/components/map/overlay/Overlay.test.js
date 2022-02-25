import { render, screen } from "@testing-library/react";
import { Overlay } from "./Overlay";

test("renders 3x3 grid", () => {
  render(
    <Overlay selected={[]} cols="3" rows="3" height="400px" width="400px" />
  );
  const cells = screen.getAllByTestId("overlayCell");
  expect(cells.length).toEqual(9);
});
