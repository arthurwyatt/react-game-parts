import { cellType } from "../cellType";
import MapCell from "../MapCell";

export const fourByFourMap = [
  // row 1
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.wall, "", true),
  // row 2
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.empty, "A", false),
  new MapCell(cellType.empty, "B", false),
  new MapCell(cellType.wall, "", true),
  // row 3
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.empty, "C", false),
  new MapCell(cellType.empty, "D", false),
  new MapCell(cellType.wall, "", true),
  // row 4
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.wall, "", true),
  new MapCell(cellType.wall, "", true),
];
