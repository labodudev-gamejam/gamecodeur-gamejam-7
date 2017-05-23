/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var ShipManager = (function () {
    function ShipManager(grid) {
        this.grid = grid;
        this.ships = [];
        this.onSwitch = false;
    }
    ShipManager.prototype.GetShipByAngle = function (angle) {
        var list = [];
        for (var key in this.ships) {
            if (this.ships[key].angle == angle) {
                list.push(this.ships[key]);
            }
        }
        return list;
    };
    ShipManager.prototype.Update = function (deltaTime) {
        for (var key in this.ships) {
            this.ships[key].Update(deltaTime);
        }
    };
    ShipManager.prototype.Draw = function (context) {
        for (var key in this.ships) {
            this.ships[key].Draw(context);
        }
    };
    ShipManager.prototype.Add = function (sprite) {
        if (sprite) {
            this.ships.push(sprite);
        }
    };
    ShipManager.prototype.Remove = function (ship) {
        for (var key in this.ships) {
            if (this.ships[key] == ship) {
                var aKey = key;
                ship.Clear();
                this.ships.splice(aKey, 1);
            }
        }
    };
    ShipManager.prototype.GoSwitch = function (direction, y) {
        var _this = this;
        if ('left' === direction) {
            var currentShip = this.grid.GetElementInGrid(this.ships, 2, y);
            var middleShip = this.grid.GetElementInGrid(this.ships, 1, y);
            if (currentShip) {
                currentShip.GoSwitch(1, y, 0, function () {
                    _this.onSwitch = false;
                });
            }
            if (middleShip) {
                middleShip.GoSwitch(2, y, 1, function () {
                    _this.onSwitch = false;
                });
            }
            this.onSwitch = true;
        }
        else {
            var currentShip = this.grid.GetElementInGrid(this.ships, 0, y);
            var middleShip = this.grid.GetElementInGrid(this.ships, 1, y);
            if (currentShip) {
                currentShip.GoSwitch(1, y, 1, function () {
                    _this.onSwitch = false;
                });
            }
            if (middleShip) {
                middleShip.GoSwitch(0, y, 0, function () {
                    _this.onSwitch = false;
                });
            }
            this.onSwitch = true;
        }
    };
    ShipManager.prototype.Clear = function () { };
    return ShipManager;
})();
//# sourceMappingURL=ShipManager.js.map