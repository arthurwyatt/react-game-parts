import React from 'react';

import { Overlay } from '../components/map/overlay/Overlay';



export default {
  title: 'Components/Map/Overlay',
  component: Overlay,
  args: {
    cols: 3,
    rows: 3,
    height: "300px",
    width: "300px",
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
  selected: [4],
};

export const HideGrid = Template.bind({});
HideGrid.args = {
  selected: [0,2,6,,8],
  showGrid: false
};