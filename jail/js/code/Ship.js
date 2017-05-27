var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Ship = (function (_super) {
    __extends(Ship, _super);
    function Ship(image, pos) {
        _super.call(this, image, pos);
        this.image = image;
        this.pos = pos;
    }
    Ship.prototype.Update = function (deltaTime) {
        this.GridToCoordinate();
        _super.prototype.Update.call(this, deltaTime);
    };
    Ship.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
    };
    Ship.prototype.Shoot = function () {
        console.log('shoot');
    };
    Ship.prototype.Clear = function () {
    };
    return Ship;
}(Sprite));
//# sourceMappingURL=Ship.js.map