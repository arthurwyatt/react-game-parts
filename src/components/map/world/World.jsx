
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../grid/Grid';
import { Overlay } from '../overlay/Overlay';
import './World.css';



/**
 * A grid of cells and its overlay combined
*/
export const World = ({  mapData, selected, rows, cols, width, height, showGrid, onClick}) => {

  if (cols * rows !== mapData.length) {
    return (
      <div>Invalid grid.</div>
    )
  }

  const styles = {
    height: height,
    width: width,
  };

  return (
    <div style={styles} className="map-world">
      <Grid data={mapData} width={width} height={height} rows={rows} cols={cols}></Grid>
      <Overlay selected={selected} width={width} height={height} rows={rows} cols={cols} showGrid={showGrid} onClick={onClick}></Overlay>
    </div>
  );
};

World.propTypes = {
  /**
   * Array of type MapCell
   */
     mapData: PropTypes.array.isRequired,
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

