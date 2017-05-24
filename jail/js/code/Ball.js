/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/
var Ball = (function () {
    function Ball(pos, color, direction, grid, ship) {
        this.pos = pos;
        this.color = color;
        this.direction = direction;
        this.grid = grid;
        this.ship = ship;
        this.speed = 500;
    }
    Ball.prototype.Update = function (deltaTime) {
        if (this.direction === 'down') {
            this.pos.y += this.speed * deltaTime;
        }
        else {
            this.pos.y -= this.speed * deltaTime;
        }
        this.grid.CheckColliderGridAndColor(this.pos, this.color);
        var brick = this.grid.CheckColliderBrickGridAndColor(this.pos, this.color);
        if (brick) {
            if (brick.object) {
                if (brick.object.toColor && brick.switchColor) {
                    this.ship.SetColor(brick.object.toColor);
                }
                if (brick.destroy) {
                    brick.brickManager.Remove(brick.object);
                }
            }
            this.Clear();
        }
    };
    Ball.prototype.Draw = function (context) {
        context.save();
        context.beginPath();
        context.arc(this.pos.x + 5, this.pos.y + 5, 10, 0, 2 * Math.PI, false);
        context.fillStyle = this.color;
        context.fill();
        context.lineWidth = 2;
        context.strokeStyle = '#003300';
        context.stroke();
        context.restore();
    };
    Ball.prototype.Clear = function () {
        this.ship.RemoveMissile(this);
    };
    return Ball;
})();
//# sourceMappingURL=Ball.js.map