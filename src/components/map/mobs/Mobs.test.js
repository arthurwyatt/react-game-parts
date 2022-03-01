import { render, screen } from "@testing-library/react";
import { Mobs } from "./Mobs";
import Mob from "../../../data/Mob";

test("mobs layer renders with sinlge mob", () => {
  render(
    <Mobs
      mobs={[new Mob("mob1", "enemy", "A", "4")]}
      cols={3}
      rows={3}
      height={400}
      width={400}
    />
  );
  const mobs = screen.getByTestId("map-mobs");
  expect(mobs).toBeInTheDocument();
  const aMob = screen.getByText("A");
  expect(aMob).toBeInTheDocument();
});
