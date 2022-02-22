
import React from 'react';
import PropTypes from 'prop-types';
import './grid.css';
import { Cell } from "../cell/Cell";

/**
 * A grid of cells rendered from data
*/
export const Grid = ({  data, width, height}) => {

  if (width * height !== data.length) {
    return (
      <div>Invalid grid.</div>
    )
  }
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
  /**
   * Cells wide
   */
  width: PropTypes.number.isRequired,
  /**
   * Cells High
   */
   height: PropTypes.number.isRequired,
};