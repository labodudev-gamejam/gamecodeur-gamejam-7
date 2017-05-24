/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/
var IA = (function () {
    function IA(grid, shipManager) {
        var _this = this;
        this.grid = grid;
        this.shipManager = shipManager;
        this.startTimeShoot = 0;
        this.canShoot = true;
        this.onSwitch = false;
        var currentShip = this.grid.GetElementInGrid(this.shipManager.ships, 2, 0);
        var middleShip = this.grid.GetElementInGrid(this.shipManager.ships, 1, 0);
        if (currentShip) {
            currentShip.GoSwitch(1, 0, 0, function () {
                _this.onSwitch = false;
            });
        }
        if (middleShip) {
            middleShip.GoSwitch(2, 0, 1, function () {
                _this.onSwitch = false;
            });
        }
        this.onSwitch = true;
    }
    IA.prototype.Update = function (deltaTime) {
        if (new Date().getTime() - this.startTimeShoot > 1500) {
            this.canShoot = true;
        }
        if (this.canShoot && !this.onSwitch) {
            var ships = this.shipManager.GetShipByAngle(180);
            for (var key in ships) {
                ships[key].AddMissile(new Ball({ x: ships[key].x + 45, y: ships[key].y + 80 }, ships[key].color, 'down', this.grid, ships[key]));
            }
            this.startTimeShoot = new Date().getTime();
            this.canShoot = false;
        }
    };
    IA.prototype.Clear = function () { };
    return IA;
})();
//# sourceMappingURL=IA.js.map