
import React from 'react';
import PropTypes from 'prop-types';
import './Grid.css';
import { Cell } from "../cell/Cell";

/**
 * A grid of cells rendered from data
*/
export const Grid = ({  data, rows, cols, width, height}) => {

  if (cols * rows !== data.length) {
    return (
      <div>Invalid grid.</div>
    )
  }

  const styles = {
    height: height,
    width: width,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };

  return (
    <div className="wrapper" style={styles}>
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
  cols: PropTypes.number.isRequired,
  /**
   * Cells High
   */
   rows: PropTypes.number.isRequired,
   /**
   * Cells High
   */
   height: PropTypes.string,
   /**
   * Cells Width
   */
  width: PropTypes.string,
};

Cell.defaultProps = {
  cellSize: 100,
};