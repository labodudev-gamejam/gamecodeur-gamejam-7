/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var ShipsManager = (function () {
    function ShipsManager(grid) {
        this.grid = grid;
        this.ships = [];
        this.onSwitch = false;
    }
    ShipsManager.prototype.Update = function (deltaTime) {
        for (var key in this.ships) {
            this.ships[key].Update();
        }
    };
    ShipsManager.prototype.Draw = function (context) {
        for (var key in this.ships) {
            this.ships[key].Draw(context);
        }
    };
    ShipsManager.prototype.Add = function (sprite) {
        if (sprite) {
            this.ships.push(sprite);
        }
    };
    ShipsManager.prototype.Remove = function (sprite) {
    };
    ShipsManager.prototype.GoSwitch = function (direction) {
        if ('left' === direction) {
            var currentShip = this.grid.GetElementInGrid(this.ships, 2);
            var middleShip = this.grid.GetElementInGrid(this.ships, 1);
            if (currentShip) {
                currentShip.GoSwitch(1, 0);
            }
            if (middleShip) {
                middleShip.GoSwitch(2, 1);
            }
            this.onSwitch = true;
        }
        else {
            var currentShip = this.grid.GetElementInGrid(this.ships, 0);
            var middleShip = this.grid.GetElementInGrid(this.ships, 1);
            if (currentShip) {
                currentShip.GoSwitch(1, 1);
            }
            if (middleShip) {
                middleShip.GoSwitch(0, 0);
            }
            this.onSwitch = true;
        }
    };
    ShipsManager.prototype.Clear = function () { };
    return ShipsManager;
})();
//# sourceMappingURL=ShipsManager.js.map