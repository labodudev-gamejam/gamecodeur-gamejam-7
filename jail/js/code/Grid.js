var Grid = (function () {
    function Grid() {
        this.shipManager = undefined;
        this.brickManager = undefined;
    }
    Grid.prototype.GetElementInGrid = function (ships, x, y) {
        for (var key in this.shipManager.ships) {
            if (this.shipManager.ships[key].grid.x == x && this.shipManager.ships[key].grid.y == y) {
                return this.shipManager.ships[key];
            }
        }
        for (var key in this.brickManager.bricks) {
            if (this.brickManager.bricks[key].grid.x == x && this.brickManager.bricks[key].grid.y == y) {
                return this.brickManager.bricks[key];
            }
        }
    };
    Grid.prototype.CheckColliderGridAndColor = function (pos, color) {
        for (var key in this.shipManager.ships) {
            if (this.shipManager.ships[key].grid.x == parseInt(pos.x / 100) && this.shipManager.ships[key].grid.y == parseInt(pos.y / 80) && this.shipManager.ships[key].color == color) {
                this.shipManager.Remove(this.shipManager.ships[key]);
            }
        }
        return undefined;
    };
    Grid.prototype.CheckColliderBrickGridAndColor = function (pos, color) {
        for (var key in this.brickManager.bricks) {
            if (this.brickManager.bricks[key].grid.x == parseInt(pos.x / 100) && this.brickManager.bricks[key].grid.y == parseInt(pos.y / 80)) {
                if (this.brickManager.bricks[key].color == color) {
                    return {
                        brickManager: this.brickManager,
                        switchColor: true,
                        destroy: true,
                        object: this.brickManager.bricks[key]
                    };
                }
                return {
                    switchColor: false,
                    destroy: false,
                    object: this.brickManager.bricks[key]
                };
            }
        }
        return undefined;
    };
    Grid.prototype.SetShipManager = function (shipManager) {
        this.shipManager = shipManager;
    };
    Grid.prototype.SetBrickManager = function (brickManager) {
        this.brickManager = brickManager;
    };
    Grid.prototype.Update = function (deltaTime) {
    };
    Grid.prototype.Draw = function (context) {
        for (var i = 0; i < (global['width'] / 100) + 1; i++) {
            context.beginPath();
            context.moveTo(i * 100, 0);
            context.lineTo(i * 100, global["height"]);
            context.stroke();
        }
        for (var i = 0; i < (global['height'] / 80) + 1; i++) {
            context.beginPath();
            context.moveTo(0, i * 80);
            context.lineTo(global['width'], i * 80);
            context.stroke();
        }
    };
    Grid.prototype.Clear = function () {
    };
    return Grid;
}());
//# sourceMappingURL=Grid.js.map