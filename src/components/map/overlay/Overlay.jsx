
import React from 'react';
import PropTypes from 'prop-types';
import './Overlay.css';

/**
 * A grid of cells rendered from data
*/
export const Overlay = ({  selected, rows, cols, width, height, showGrid, onClick}) => {



  const classes = `map-overlay ${ showGrid ? "showGrid" : "" }`

  const styles = {
    height: height,
    width: width,
    gridTemplateColumns: `repeat(${cols}, 1fr)`,
    gridTemplateRows: `repeat(${rows}, 1fr)`,
  };

const data = [];

const length = cols * rows;

const handleClick = (index) => {
  if (onClick) {
    onClick(index);
  }
}

for (let i=0; i < length; i++) {
  data.push(selected.includes(i));
}

  return (
    <div className={classes} style={styles}>
      {data.map((selected, index) => (
        <div 
        className={selected ? "selected": ""} 
        data-testid="overlayCell" 
        key={`overlay-${index}`} 
        onClick={() => handleClick(index)}></div>
      ))}
    </div>
  );
};

Overlay.propTypes = {
  /**
   * indexes of selected cells
   */
  selected: PropTypes.array,
  /**
   * Onclick event
   */
   onClick: PropTypes.func.isRequired,
  /**
   * Cells wide
   */
  cols: PropTypes.number.isRequired,
  /**
   * Cells High
   */
   rows: PropTypes.number.isRequired,
   /**
   * container height 
   */
   height: PropTypes.string,
   /**
   * container width 
   */
  width: PropTypes.string,
   /**
   * show the grid
   */
  showGrid: PropTypes.bool,
};

