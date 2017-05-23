var IA = (function () {
    function IA(grid, shipManager) {
        this.grid = grid;
        this.shipManager = shipManager;
        var currentShip = this.grid.GetElementInGrid(this.shipManager.ships, 2, 0);
        var middleShip = this.grid.GetElementInGrid(this.shipManager.ships, 1, 0);
        if (currentShip) {
            currentShip.GoSwitch(1, 0, 0);
        }
        if (middleShip) {
            middleShip.GoSwitch(2, 0, 1);
        }
    }
    IA.prototype.Update = function (deltaTime) {
    };
    IA.prototype.Clear = function () { };
    return IA;
}());
//# sourceMappingURL=IA.js.map