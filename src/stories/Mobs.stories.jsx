import React from 'react';
import { Mobs } from '../components/map/mobs/Mobs';
import  Mob  from '../data/Mob'
import { mobType } from '../data/mobType';


export default {
  title: 'Components/Map/Mobs',
  component: Mobs,
  args: {
    cols: 3,
    rows: 3,
    height: 300,
    width: 300,
    mobs: [
      new Mob("joe1", mobType.freindly ,"joe", 0),
      new Mob( "bob1", mobType.enemy ,"bobby", 8)],
  },
};


// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => {
  return (
    <div style={{border: "1px solid black", display: "inline-block"}}>
    <Mobs {...args}></Mobs>
    </div>
  )};

export const Simple = Template.bind({});
