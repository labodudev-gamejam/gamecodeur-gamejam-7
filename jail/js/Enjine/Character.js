var Character = (function () {
    function Character() {
        this.pos = {
            x: 0,
            y: 0
        };
    }
    Character.prototype.Update = function () {
        this.pos.x = EventMouse.Mouse.move.x;
        this.pos.y = EventMouse.Mouse.move.y;
    };
    Character.prototype.Draw = function (context) {
        context.save();
        context.restore();
    };
    Character.prototype.Clear = function () {
        this.pos.x = 0;
        this.pos.y = 0;
        delete this.pos;
    };
    return Character;
}());
//# sourceMappingURL=Character.js.map