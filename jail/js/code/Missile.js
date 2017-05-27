var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Missile = (function (_super) {
    __extends(Missile, _super);
    function Missile(image, pos) {
        _super.call(this, image, pos);
        this.image = image;
        this.pos = pos;
        this.speed = 500;
    }
    Missile.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        this.pos.y -= this.speed * deltaTime;
    };
    Missile.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
    };
    Missile.prototype.Clear = function () {
    };
    return Missile;
}(Sprite));
//# sourceMappingURL=Missile.js.map