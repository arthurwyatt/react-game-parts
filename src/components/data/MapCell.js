export default class MapCell {
    constructor (cellType, label, isWall) {
        this.cellType = cellType;
        this.label = label;
        this.isWall = isWall;
    }
}
