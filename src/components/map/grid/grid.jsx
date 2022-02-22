
import React from 'react';
import PropTypes from 'prop-types';
import './grid.css';
import { Cell } from "../cell/Cell";

/**
 * A single cell in the grid
 */
export const Grid = ({  data, width, height}) => {

  return (
    <div className="wrapper">
      {data.map((cell, index) => (
        <Cell key={index} cellType={cell.cellType} label={cell.label}/>
      ))}
    </div>
  );
};

Grid.propTypes = {
  /**
   * Array of type MapCell
   */
  data: PropTypes.array.isRequired,


};