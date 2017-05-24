/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var BrickChangeColor = (function (_super) {
    __extends(BrickChangeColor, _super);
    function BrickChangeColor(pos, color, toColor, brickManager) {
        _super.call(this, pos, color, brickManager);
        this.pos = pos;
        this.color = color;
        this.toColor = toColor;
        this.brickManager = brickManager;
        this.grid = {
            x: 0,
            y: 0
        };
        this.grid.x = parseInt(pos.x / 100);
        this.grid.y = parseInt(pos.y / 80);
    }
    BrickChangeColor.prototype.Update = function (deltaTime) {
    };
    BrickChangeColor.prototype.Draw = function (context) {
        context.save();
        context.beginPath();
        context.rect(this.pos.x, this.pos.y, 100, 80);
        context.fillStyle = this.color;
        context.fill();
        context.restore();
        context.save();
        context.lineWidth = 5;
        context.strokeStyle = this.toColor;
        context.beginPath();
        context.moveTo(this.pos.x + 40, this.pos.y + 20);
        context.lineTo(this.pos.x + 60, this.pos.y + 40);
        context.lineTo(this.pos.x + 40, this.pos.y + 60);
        context.stroke();
        context.restore();
    };
    BrickChangeColor.prototype.Clear = function () {
    };
    return BrickChangeColor;
})(Brick);
//# sourceMappingURL=BrickChangeColor.js.map