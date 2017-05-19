var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ship = (function (_super) {
    __extends(Ship, _super);
    function Ship(key, image, pos, zone) {
        _super.call(this, image, pos);
        this.key = key;
        this.image = image;
        this.pos = pos;
        this.zone = zone;
        this.grid = {
            x: 0,
            y: 0
        };
        this.x = 0;
        this.y = 0;
        this.x1 = 0;
        this.y1 = 0;
        this.x2 = 0;
        this.y2 = 0;
        this.f = 0;
        this.speed = 0;
        this.dist = 0;
        this.steps = 50;
        this.onSwitch = false;
        this.direction = 0;
        this.grid.x = pos.x;
        this.grid.y = pos.y;
        this.x = pos.x * 100;
        this.y = pos.y * 80;
    }
    Ship.prototype.GoSwitch = function (x, direction) {
        if (!this.onSwitch && this.f == 0) {
            this.onSwitch = true;
            this.direction = direction;
            this.x1 = this.x;
            this.y1 = this.y;
            var rect = global['canvas'].getBoundingClientRect();
            this.x2 = x * 100;
            this.y2 = 720;
            this.grid.x = x;
            var dx = this.x2 - this.x1;
            var dy = this.y2 - this.y1;
            this.dist = Math.abs(Math.sqrt(dx * dx + dy * dy));
            this.speed = 30 / this.dist;
        }
    };
    Ship.prototype.Update = function () {
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
                this.onSwitch = false;
            }
        }
    };
    Ship.prototype.Draw = function (context) {
        context.drawImage(this.image, this.zone.x, this.zone.y, this.zone.width, this.zone.height, this.x, this.y, this.zone.width, this.zone.height);
    };
    Ship.prototype.Clear = function () {
    };
    return Ship;
}(Sprite));
//# sourceMappingURL=Ship.js.map