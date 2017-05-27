var IA = (function () {
    function IA(grid, shipManager) {
        this.grid = grid;
        this.shipManager = shipManager;
        this.startTimeShoot = 0;
        this.canShoot = true;
        this.onSwitch = false;
        this.goSwitch = false;
        this.goSwitchTo = { x1: 0, x2: 0 };
    }
    IA.prototype.Update = function (deltaTime) {
        var _this = this;
        var hasTarget = this.HasTarget();
        if (!hasTarget && !this.goSwitch) {
            this.LookForSwitch();
        }
        if (!hasTarget && this.goSwitch) {
            var currentShip = this.grid.GetElementInGrid(undefined, this.goSwitchTo.x1, 0);
            var middleShip = this.grid.GetElementInGrid(undefined, this.goSwitchTo.x2, 0);
            if (currentShip) {
                currentShip.GoSwitch(this.goSwitchTo.x2, 0, 0, function () {
                    _this.onSwitch = false;
                });
            }
            if (middleShip) {
                middleShip.GoSwitch(this.goSwitchTo.x1, 0, 1, function () {
                    _this.onSwitch = false;
                });
            }
            this.onSwitch = true;
        }
        if (new Date().getTime() - this.startTimeShoot > 1500) {
            this.canShoot = true;
        }
        if (this.canShoot && !this.onSwitch && hasTarget) {
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
    IA.prototype.LookForSwitch = function () {
        this.goSwitch = false;
        var ships = this.shipManager.GetShipByAngle(180);
        var tmpX = 0;
        for (var key in ships) {
            tmpX = ships[key].grid.x + 1;
            if (tmpX > 2) {
                tmpX = 0;
            }
            for (var y = 1; y < (global['height'] / 80) + 1; y++) {
                var element = this.grid.GetElementInGrid(undefined, tmpX, y);
                if (element && element.color == ships[key].color) {
                    var direction = tmpX == 0 ? 'left' : 'right';
                    this.goSwitchTo.x1 = ships[key].grid.x;
                    this.goSwitchTo.x2 = tmpX;
                    this.goSwitch = true;
                    break;
                }
            }
        }
    };
    IA.prototype.Clear = function () { };
    return IA;
}());
//# sourceMappingURL=IA.js.map