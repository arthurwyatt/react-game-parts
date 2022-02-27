import React from "react";
import PropTypes from "prop-types";
import "./Mobs.css";
import { indexToXy } from "../../../utils/mapUtils";

/**
 * A grid of cells rendered from data
 */
export const Mobs = ({ mobs, rows, cols, width, height }) => {
  const styles = {
    width: `${width}px`,
    height: `${height}px`,
  };

  const cellWidth = width / cols;
  const cellHeight = width / rows;

  const getMobStyles = (mob) => {
    const pos = indexToXy(mob.position, cols);
    console.log(mob.label, mob.position, pos);
    return {
      left: `${pos.x * cellWidth}px`,
      top: `${pos.y * cellHeight}px`,
      width: `${cellWidth}px`,
      height: `${cellHeight}px`,
    };
  };

  return (
    <div className="map-mobs" style={styles} data-testid="map-mobs">
      {mobs.map((mob, index) => (
        <div style={getMobStyles(mob)} key={mob.id}>
          <div className={mob.mobType}>{mob.label}</div>
        </div>
      ))}
    </div>
  );
};

Mobs.propTypes = {
  /**
   * Mobile units to go on the layer
   */
  mobs: PropTypes.array,
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
