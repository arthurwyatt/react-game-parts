
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
    width: `${width}px`,
    height: `${height}px`,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };

  return (
    <div className="map-grid" style={styles} data-testid="map-grid" >
      {data.map((cell, index) => (
        <Cell key={`cell-${index}`} cellType={cell.cellType} label={cell.label}/>
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
   * Container Height in pixels
   */
   height: PropTypes.number,
   /**
   * Container Width in pixels
   */
  width: PropTypes.number,
};

Cell.defaultProps = {
  height: 100,
  width: 100
};