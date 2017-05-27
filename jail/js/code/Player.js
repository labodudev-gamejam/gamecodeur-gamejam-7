var Player = (function () {
    function Player() {
        this.initColorShip = ['blue', 'red', 'green'];
        this.canShoot = true;
        this.lastShootTime = 0;
        this.timeForShoot = 200;
        this.Init();
    }
    Player.prototype.Init = function () {
        for (var key in this.initColorShip) {
            var ship = new Ship(Data.Images.spriteSheet, { x: 0, y: 0 });
            ship.grid.x = key;
            ship.grid.y = 9;
            ship.offset.x = 49.5;
            ship.offset.y = 37.5;
            ship.tag = 'ally';
            ship.color = this.initColorShip[key];
            ship.SetZone(Data.Object.element[ship.color + 'Ship']);
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
        if (new Date().getTime() - this.lastShootTime > this.timeForShoot) {
            this.canShoot = true;
        }
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.space) && this.canShoot) {
            this.Shoot();
        }
    };
    Player.prototype.GoSwitch = function (direction) {
    };
    Player.prototype.Shoot = function () {
        var ships = global['spriteManager'].GetByTag('ally');
        for (var key in ships) {
            ships[key].Shoot();
        }
        this.lastShootTime = new Date().getTime();
        this.canShoot = false;
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map