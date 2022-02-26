
import React from 'react';
import PropTypes from 'prop-types';
import './Cell.css';
import { cellType } from  '../../../data/cellType';

/**
 * A single cell in the grid
 */
export const Cell = ({  cellType, label}) => {
    const cellClass = cellType == "wall" ? "wall" : "empty";


  return (
    <div className={cellClass} data-testid="map-grid-cell" >
      {label}
    </div>
  );
};



Cell.propTypes = {
  /**
   * Cell Type - wall or ground
   */
  cellType: PropTypes.oneOf(Object.values(cellType)).isRequired,
  /**
   * Optional label
   */
  label: PropTypes.string,

};

Cell.defaultProps = {
    cellType: "empty",
    label: ""
};