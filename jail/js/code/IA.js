var IA = (function () {
    function IA() {
        this.initColorShip = ['blueShip', 'redShip', 'greenShip'];
        this.Init();
    }
    IA.prototype.Init = function () {
        for (var key in this.initColorShip) {
            var ship = new Ship(Data.Images.spriteSheet, { x: 0, y: 0 });
            ship.grid.x = key;
            ship.grid.y = 0;
            ship.offset.x = 49.5;
            ship.offset.y = 37.5;
            ship.tag = 'ia';
            ship.angle = 180;
            ship.SetZone(Data.Object.element[this.initColorShip[key]]);
            global['spriteManager'].Add(ship);
        }
    };
    IA.prototype.Update = function (deltaTime) {
    };
    IA.prototype.Clear = function () { };
    return IA;
}());
//# sourceMappingURL=IA.js.map