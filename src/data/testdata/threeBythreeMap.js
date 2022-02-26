import { cellType } from "../cellType";
import MapCell from "../MapCell";

export const threeBythreeMap = [
  // row 1
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.wall, "", true),
  // row 2
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.empty, "A", false),
  new MapCell(cellType.wall, "", true),
  // row 3
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.wall, "", true),
];
