
import React from 'react';
import PropTypes from 'prop-types';
import './cell.css';

/**
 * A single cell in the grid
 */
export const Cell = ({  cellType, label}) => {
    const cellClass = cellType == "wall" ? "wall" : "empty";


  return (
    <div className={cellClass}>
      {label}
    </div>
  );
};

Cell.propTypes = {
  /**
   * Cell Type - wall or ground
   */
  cellType: PropTypes.oneOf(['wall', 'empty']).isRequired,
  /**
   * Optional label
   */
  label: PropTypes.string,

};

Cell.defaultProps = {
    cellType: "empty",
    label: ""
};