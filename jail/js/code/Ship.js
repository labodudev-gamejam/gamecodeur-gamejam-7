var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Ship = (function (_super) {
    __extends(Ship, _super);
    function Ship(image, pos, zone, angle, color, shipManager) {
        var _this = _super.call(this, image, pos) || this;
        _this.image = image;
        _this.pos = pos;
        _this.zone = zone;
        _this.angle = angle;
        _this.color = color;
        _this.shipManager = shipManager;
        _this.grid = {
            x: 0,
            y: 0
        };
        _this.x = 0;
        _this.y = 0;
        _this.x1 = 0;
        _this.y1 = 0;
        _this.x2 = 0;
        _this.y2 = 0;
        _this.f = 0;
        _this.speed = 0;
        _this.dist = 0;
        _this.steps = 200;
        _this.onSwitch = false;
        _this.direction = 0;
        _this.balls = [];
        _this.grid.x = pos.x;
        _this.grid.y = pos.y;
        _this.x = pos.x * 100;
        _this.y = pos.y * 80;
        return _this;
    }
    Ship.prototype.GoSwitch = function (x, y, direction) {
        if (!this.shipManager.onSwitch && !this.onSwitch && this.f == 0) {
            this.onSwitch = true;
            this.direction = direction;
            this.x1 = this.x;
            this.y1 = this.y;
            var rect = global['canvas'].getBoundingClientRect();
            this.x2 = x * 100;
            this.y2 = y * 80;
            this.grid.x = x;
            var dx = this.x2 - this.x1;
            var dy = this.y2 - this.y1;
            this.dist = Math.abs(Math.sqrt(dx * dx + dy * dy));
            this.speed = 30 / this.dist;
        }
    };
    Ship.prototype.Update = function (deltaTime) {
        if (this.onSwitch) {
            this.f += this.speed;
            if (this.x < 0.5) {
                this.y += this.direction == 0 ? -5 : 5;
            }
            else {
                this.y += this.direction == 0 ? 5 : -5;
            }
            if (this.f < 1) {
                this.x = this.x1 + (this.x2 - this.x1) * this.f;
            }
            else {
                this.x = this.x2;
                this.y = this.y2;
                this.f = 0;
                this.shipManager.onSwitch = false;
                this.onSwitch = false;
            }
        }
        for (var key in this.balls) {
            this.balls[key].Update(deltaTime);
        }
    };
    Ship.prototype.Draw = function (context) {
        context.save();
        context.translate(this.x + 49.5, this.y + 37.5);
        context.rotate(this.angle * Math.PI / 180);
        context.drawImage(this.image, this.zone.x, this.zone.y, this.zone.width, this.zone.height, -(this.zone.width / 2), -(this.zone.height / 2), this.zone.width, this.zone.height);
        context.restore();
        for (var key in this.balls) {
            this.balls[key].Draw(context);
        }
    };
    Ship.prototype.Clear = function () {
    };
    Ship.prototype.AddMissile = function (ball) {
        ball.pos.x = this.x + 45;
        ball.pos.y = this.y;
        this.balls.push(ball);
    };
    return Ship;
}(Sprite));
//# sourceMappingURL=Ship.js.map