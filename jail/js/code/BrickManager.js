var BrickManager = (function () {
    function BrickManager(grid) {
        this.grid = grid;
        this.bricks = [];
    }
    BrickManager.prototype.Update = function (deltaTime) {
    };
    BrickManager.prototype.Draw = function (context) {
        for (var key in this.bricks) {
            this.bricks[key].Draw(context);
        }
    };
    BrickManager.prototype.Add = function (sprite) {
        if (sprite) {
            this.bricks.push(sprite);
        }
    };
    BrickManager.prototype.Remove = function (ship) {
        for (var key in this.bricks) {
            if (this.bricks[key] == ship) {
                var aKey = key;
                ship.Clear();
                this.bricks.splice(aKey, 1);
            }
        }
    };
    BrickManager.prototype.Clear = function () { };
    return BrickManager;
}());
//# sourceMappingURL=BrickManager.js.map