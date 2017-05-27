var Player = (function () {
    function Player() {
        this.initColorShip = ['blueShip', 'redShip', 'greenShip'];
        this.canShoot = true;
        this.Init();
    }
    Player.prototype.Init = function () {
        for (var key in this.initColorShip) {
            var ship = new Ship(Data.Images.spriteSheet, { x: 0, y: 0 });
            ship.grid.x = key;
            ship.grid.y = 8;
            ship.offset.x = 49.5;
            ship.offset.y = 37.5;
            ship.tag = 'ally';
            ship.SetZone(Data.Object.element[this.initColorShip[key]]);
            global['spriteManager'].Add(ship);
        }
    };
    Player.prototype.Update = function (deltaTime) {
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
            this.GoSwitch('left');
        }
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
            this.GoSwitch('right');
        }
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.space) && this.canShoot) {
            this.Shoot();
        }
    };
    Player.prototype.GoSwitch = function (direction) {
    };
    Player.prototype.Shoot = function () {
        this.canShoot = false;
        var ships = global['spriteManager'].GetByTag('ally');
        for (var key in ships) {
            ships[key].Shoot();
        }
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map