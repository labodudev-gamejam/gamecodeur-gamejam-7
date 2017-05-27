var Sprite = (function () {
    function Sprite(image, pos) {
        this.image = image;
        this.pos = pos;
        this.offset = { x: 0, y: 0 };
        this.scale = { x: 1.0, y: 1.0 };
        this.angle = 0;
        this.speedAngle = 0;
        this.zone = { x: 0, y: 0, w: 0, h: 0 };
        this.tag = '';
        this.grid = { x: 0, y: 0 };
    }
    Sprite.prototype.Update = function (deltaTime) {
        this.angle += this.speedAngle * deltaTime;
    };
    Sprite.prototype.Draw = function (context) {
        if (this.zone) {
            this.DrawSpriteSheet(context);
        }
    };
    Sprite.prototype.DrawSpriteSheet = function (context) {
        context.save();
        context.translate(this.pos.x + this.offset.x, this.pos.y + this.offset.y);
        context.rotate(this.angle * Math.PI / 180);
        context.scale(this.scale.x, this.scale.y);
        context.drawImage(this.image, this.zone.x, this.zone.y, this.zone.width, this.zone.height, -(this.zone.width / 2), -(this.zone.height / 2), this.zone.width, this.zone.height);
        context.restore();
    };
    Sprite.prototype.Clear = function () {
        delete this.offset;
    };
    Sprite.prototype.SetPos = function (pos) {
        this.pos = pos;
    };
    Sprite.prototype.SetZone = function (zone) {
        this.zone = zone;
    };
    Sprite.prototype.SetOffset = function (offset) {
        this.offset = offset;
    };
    Sprite.prototype.GridToCoordinate = function () {
        this.pos.x = this.grid.x * 100;
        this.pos.y = this.grid.y * 80;
    };
    return Sprite;
}());
//# sourceMappingURL=Sprite.js.map