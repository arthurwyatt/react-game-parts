import React from 'react';

import { Overlay } from '../components/map/overlay/Overlay';



export default {
  title: 'Example/Map/Overlay',
  component: Overlay,
  args: {
    cols: 4,
    rows: 4,
    height: "400px",
    width: "400px",
    selected: [],
    showGrid: true,
  }
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <Overlay {...args}></Overlay>
  )};

export const Unselected = Template.bind({});
Unselected.args = {
  cols: 4,
  rows: 4,
  height: "400px",
  width: "400px",
  selected: [],
  showGrid: true
};

export const Selected = Template.bind({});
Selected.args = {
  cols: 4,
  rows: 4,
  height: "400px",
  width: "400px",
  selected: [5, 6, 9, 10],
  showGrid: true
};

export const HideGrid = Template.bind({});
HideGrid.args = {
  cols: 4,
  rows: 4,
  height: "400px",
  width: "400px",
  selected: [0, 1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15],
  showGrid: false
};