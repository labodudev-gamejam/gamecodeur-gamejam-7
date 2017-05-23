/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/
var Ball = (function () {
    function Ball(pos, color, direction) {
        this.pos = pos;
        this.color = color;
        this.direction = direction;
        this.speed = 500;
    }
    Ball.prototype.Update = function (deltaTime) {
        if (this.direction === 'down') {
            this.pos.y += this.speed * deltaTime;
        }
        else {
            this.pos.y -= this.speed * deltaTime;
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
    };
    return Ball;
})();
//# sourceMappingURL=Ball.js.map