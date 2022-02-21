import React from 'react';
import './Cell.css';

import { Cell } from '../components/map/cell/cell';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Map/Cell',
  component: Cell,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    cellType: { options: ['empty', 'wall'], control: { type: 'select'} },

  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
return (
  <div className="wrapper">
  <Cell {...args}></Cell>
  </div>
)};


export const Wall = Template.bind({});
Wall.args = {
  cellType: 'wall',
  label: 'wall'
};

export const Empty = Template.bind({});
Empty.args = {
  cellType: 'empty',
  label: 'empty'
};
