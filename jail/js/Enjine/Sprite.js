/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var Sprite = (function () {
    function Sprite(image, pos) {
        this.image = image;
        this.pos = pos;
        this.offset = { x: 0, y: 0 };
        this.spriteManager = undefined;
        this.scale = { x: 1.0, y: 1.0 };
        this.angle = 0;
        this.zone = undefined;
        this.clickable = undefined;
        this.movable = undefined;
    }
    Sprite.prototype.Update = function (deltaTime) {
        if (this.clickable) {
            this.clickable.ClickIn(this);
        }
        if (this.movable) {
            var infos = this.movable.Update(this.pos, this.angle);
            this.pos = infos.pos;
            this.angle = infos.angle;
        }
    };
    Sprite.prototype.Draw = function (context) {
        if (this.image != undefined) {
            if (this.zone) {
                this.DrawSpriteSheet(context);
            }
            else {
                context.drawImage(this.image, this.pos.x, this.pos.y);
            }
        }
    };
    Sprite.prototype.DrawSpriteSheet = function (context) {
        context.drawImage(this.image, this.zone.x, this.zone.y, this.zone.width, this.zone.height, this.pos.x, this.pos.y, this.zone.width, this.zone.height);
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
    Sprite.prototype.SetClickable = function (size, offset, event) {
        this.clickable = new Clickable(this.pos, offset, size);
        if (event) {
            this.clickable.SetClickEvent(event);
        }
    };
    Sprite.prototype.SetMovable = function (speed, speedAngle) {
        this.movable = new Movable(speed, speedAngle);
    };
    Sprite.prototype.SetCollider = function () {
    };
    Sprite.prototype.SetOffset = function (offset) {
        this.offset = offset;
    };
    return Sprite;
})();
//# sourceMappingURL=Sprite.js.map