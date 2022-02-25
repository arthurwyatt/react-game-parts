import React from 'react';

import { Grid } from '../components/map/grid/Grid';

import { cellType } from '../data/cellType'
import MapCell from "../data/MapCell";

export default {
  title: 'Example/Map/Grid',
  component: Grid,
  args: {
    cols: 1,
    rows: 1,
    height: "100px",
    width: "100px",
    data: []
  }
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <Grid {...args}></Grid>
  )};

export const Valid = Template.bind({});
Valid.args = {
  cols: 4,
  rows: 4,
  height: "400px",
  width: "400px",
  data: [
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
  ]
};

export const Invalid = Template.bind({});
Invalid.args = {
  rows: 1,
  cols: 1,
  data: []
};