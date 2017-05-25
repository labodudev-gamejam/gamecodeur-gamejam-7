var IA = (function () {
    function IA(grid, shipManager) {
        this.grid = grid;
        this.shipManager = shipManager;
        this.startTimeShoot = 0;
        this.canShoot = true;
        this.onSwitch = false;
    }
    IA.prototype.Update = function (deltaTime) {
        if (new Date().getTime() - this.startTimeShoot > 1500) {
            this.canShoot = true;
        }
        if (this.canShoot && !this.onSwitch && this.HasTarget()) {
            var ships = this.shipManager.GetShipByAngle(180);
            for (var key in ships) {
                ships[key].AddMissile(new Ball({ x: ships[key].x + 45, y: ships[key].y + 80 }, ships[key].color, 'down', this.grid, ships[key]));
            }
            this.startTimeShoot = new Date().getTime();
            this.canShoot = false;
        }
    };
    IA.prototype.HasTarget = function () {
        var ships = this.shipManager.GetShipByAngle(180);
        for (var key in ships) {
            if (ships[key].SearchTarget()) {
                return true;
            }
        }
    };
    IA.prototype.Clear = function () { };
    return IA;
}());
//# sourceMappingURL=IA.js.map