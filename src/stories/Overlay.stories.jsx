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
  },
  argTypes: { onClick: { action: `clicked` } },
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <Overlay {...args}></Overlay>
  )};

export const Unselected = Template.bind({});
Unselected.args = {
};

export const Selected = Template.bind({});
Selected.args = {
  selected: [5, 6, 9, 10],
};

export const HideGrid = Template.bind({});
HideGrid.args = {
  selected: [0, 1, 2, 3, 4, 7, 8, 11, 12, 13, 14, 15],
  showGrid: false
};