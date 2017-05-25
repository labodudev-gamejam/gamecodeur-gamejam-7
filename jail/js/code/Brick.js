var Brick = (function () {
    function Brick(pos, color, brickManager) {
        this.pos = pos;
        this.color = color;
        this.brickManager = brickManager;
        this.grid = {
            x: 0,
            y: 0
        };
        this.toColor = undefined;
        this.grid.x = pos.x;
        this.grid.y = pos.y;
        this.pos.x = pos.x * 100;
        this.pos.y = pos.y * 80;
    }
    Brick.prototype.Update = function (deltaTime) {
    };
    Brick.prototype.Draw = function (context) {
        context.save();
        context.beginPath();
        context.rect(this.pos.x, this.pos.y, 100, 80);
        context.fillStyle = this.color;
        context.fill();
        context.restore();
    };
    Brick.prototype.Clear = function () {
    };
    return Brick;
}());
//# sourceMappingURL=Brick.js.map