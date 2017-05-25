var SpawnManager = (function () {
    function SpawnManager(grid, shipManager, brickManager) {
        this.grid = grid;
        this.shipManager = shipManager;
        this.brickManager = brickManager;
        this.shipManager.Add(new Ship(Data.Images.spriteSheet, {
            x: 0,
            y: 9
        }, Data.Object.ships['redShip'], 0, "red", this.shipManager, this.brickManager, this.grid));
        this.shipManager.Add(new Ship(Data.Images.spriteSheet, {
            x: 1,
            y: 9
        }, Data.Object.ships['blueShip'], 0, "blue", this.shipManager, this.brickManager, this.grid));
        this.shipManager.Add(new Ship(Data.Images.spriteSheet, {
            x: 2,
            y: 9
        }, Data.Object.ships['greenShip'], 0, "green", this.shipManager, this.brickManager, this.grid));
        this.shipManager.Add(new Ship(Data.Images.spriteSheet, {
            x: 0,
            y: 0
        }, Data.Object.ships['redShip'], 180, "red", this.shipManager, this.brickManager, this.grid));
        this.shipManager.Add(new Ship(Data.Images.spriteSheet, {
            x: 1,
            y: 0
        }, Data.Object.ships['blueShip'], 180, "blue", this.shipManager, this.brickManager, this.grid));
        this.shipManager.Add(new Ship(Data.Images.spriteSheet, {
            x: 2,
            y: 0
        }, Data.Object.ships['greenShip'], 180, "green", this.shipManager, this.brickManager, this.grid));
    }
    SpawnManager.prototype.Exec = function () {
        var _this = this;
        setInterval(function () { _this.Update(); }, 1000);
    };
    SpawnManager.prototype.Update = function () {
        console.log('ok');
    };
    SpawnManager.prototype.Clear = function () { };
    return SpawnManager;
}());
//# sourceMappingURL=SpawnManager.js.map