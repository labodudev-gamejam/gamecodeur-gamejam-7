/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ship = (function (_super) {
    __extends(Ship, _super);
    function Ship(image, pos, zone) {
        _super.call(this, image, pos);
        this.image = image;
        this.pos = pos;
        this.zone = zone;
        this.grid = {
            x: 0,
            y: 0
        };
        this.grid.x = pos.x;
        this.grid.y = pos.y;
        pos.x *= 100;
        pos.y *= 80;
    }
    Ship.prototype.SetGridX = function (x) {
        this.grid.x = x;
        this.pos.x = this.grid.x * 100;
    };
    Ship.prototype.Update = function () {
    };
    Ship.prototype.Draw = function (context) {
        context.drawImage(this.image, this.zone.x, this.zone.y, this.zone.width, this.zone.height, this.pos.x, this.pos.y, this.zone.width, this.zone.height);
    };
    Ship.prototype.Clear = function () {
    };
    return Ship;
})(Sprite);
//# sourceMappingURL=Ship.js.map