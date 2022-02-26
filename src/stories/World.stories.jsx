import React from 'react';

import { World } from '../components/map/world/World';

import { cellType } from '../data/cellType'
import MapCell from "../data/MapCell";

export default {
  title: 'Components/Map/World',
  component: World,
  args: {
    cols: 4,
    rows: 4,
    height: "400px",
    width: "400px",
    mapData: [
      // row 1
      new MapCell(cellType.wall, "", true),
      new MapCell(cellType.wall, "", true),
      new MapCell(cellType.wall, "", true),
      new MapCell(cellType.wall, "", true),
      // row 2
      new MapCell(cellType.wall, "", true),
      new MapCell(cellType.empty, "1", true),
      new MapCell(cellType.empty, "2", true),
      new MapCell(cellType.wall, "", true),
      // row 3
      new MapCell(cellType.wall, "", true),
      new MapCell(cellType.empty, "3", true),
      new MapCell(cellType.empty, "4", true),
      new MapCell(cellType.wall, "", true),
      // row 4
      new MapCell(cellType.wall, "", true),
      new MapCell(cellType.wall, "", true),
      new MapCell(cellType.wall, "", true),
      new MapCell(cellType.wall, "", true),
    ],
    showGrid: true,
    selected: []
  },
  argTypes: { onClick: { action: `clicked` } },
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <World {...args}></World>
  )};

export const Simple = Template.bind({});
World.args = {};
