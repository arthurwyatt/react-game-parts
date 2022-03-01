import React from 'react';

import { Grid } from '../components/map/grid/Grid';

import { fourByFourMap } from "../data/testdata/fourByFourMap"

export default {
  title: 'Components/Map/Grid',
  component: Grid,
  args: {
    cols: 1,
    rows: 1,
    height: 100,
    width: 100,
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
  height: 400,
  width: 400,
  data: fourByFourMap
};

export const Invalid = Template.bind({});
Invalid.args = {
  rows: 1,
  cols: 1,
  data: []
};