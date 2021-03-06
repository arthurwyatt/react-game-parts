import React from 'react';

import { World } from '../components/map/world/World';
import  Mob  from '../data/Mob';
import { mobType } from '../data/mobType';

import { fourByFourMap } from "../data/testdata/fourByFourMap"

export default {
  title: 'Components/Map/World',
  component: World,
  args: {
    cols: 4,
    rows: 4,
    height: 400,
    width: 400,
    mapData: fourByFourMap,
    showGrid: true,
    selected: [],
    mobs: [
      new Mob("joe1", mobType.freindly ,"joe", 5),
      new Mob( "bob1", mobType.enemy ,"bobby", 10)],
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
