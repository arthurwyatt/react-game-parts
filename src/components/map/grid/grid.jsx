
import React from 'react';
import PropTypes from 'prop-types';
import './grid.css';

/**
 * A single cell in the grid
 */
export const Grid = ({  data, width, height}) => {

  return (
    <div className="wrapper">
      {data.map(cell, index => (
        <Cell key={index} cellType={cell.cellType} label={cell.label}/>
      ))}
    </div>
  );
};

Cell.propTypes = {
  /**
   * Cell Type - wall or ground
   */
  d: PropTypes.array.isRequired,
  /**
   * Width in cells
   */
  width: PropTypes.numberisRequired,
   /** 
   * Height in cells
   */
  height: PropTypes.numberisRequired,

};