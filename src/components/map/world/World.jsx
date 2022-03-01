
import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '../grid/Grid';
import { Overlay } from '../overlay/Overlay';
import { Mobs }  from '../mobs/Mobs';
import './World.css';



/**
 * A grid of cells and its overlay combined
*/
export const World = ({  mapData, mobs, selected, rows, cols, width, height, showGrid, onClick}) => {

  if (cols * rows !== mapData.length) {
    return (
      <div>Invalid grid.</div>
    )
  }

  const styles = {
    width: `${width}px`,
    height: `${height}px`,
  };

  return (
    <div style={styles} className="map-world">
      <Grid data={mapData} width={width} height={height} rows={rows} cols={cols}></Grid>
      <Mobs mobs={mobs} width={width} height={height} rows={rows} cols={cols}></Mobs>
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
   * Array of type Mob
   */
        mobs: PropTypes.array,
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
   * container height in pixels
   */
   height: PropTypes.number,
   /**
   * container width in pixels
   */
  width: PropTypes.number,
   /**
   * show the grid
   */
  showGrid: PropTypes.bool,
};

World.defaultProps = {
  mobs: [],
  selected: [],
};

