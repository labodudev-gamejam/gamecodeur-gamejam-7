/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/
var IA = (function () {
    function IA(grid, shipManager) {
        this.grid = grid;
        this.shipManager = shipManager;
        this.startTimeShoot = 0;
        this.canShoot = true;
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
        if (new Date().getTime() - this.startTimeShoot > 500) {
            this.canShoot = true;
        }
        if (this.canShoot) {
            var ships = this.shipManager.GetShipByAngle(180);
            for (var key in ships) {
                ships[key].AddMissile(new Ball({ x: ships[key].x + 45, y: ships[key].y }, ships[key].color, 'down'));
            }
            this.startTimeShoot = new Date().getTime();
            this.canShoot = false;
        }
    };
    IA.prototype.Clear = function () { };
    return IA;
})();
//# sourceMappingURL=IA.js.map