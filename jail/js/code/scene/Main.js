var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        var _this = _super.call(this) || this;
        _this.grid = undefined;
        _this.shipManager = undefined;
        _this.spawnManager = undefined;
        _this.ia = undefined;
        _this.canShoot = true;
        _this.startTimeShoot = 0;
        _this.reloadTime = 0;
        _this.Start();
        return _this;
    }
    MainScene.prototype.Start = function () {
        _super.prototype.Start.call(this);
        this.grid = new Grid();
        this.shipManager = new ShipManager(this.grid);
        this.spawnManager = new SpawnManager(this.grid, this.shipManager);
        this.ia = new IA(this.grid, this.shipManager);
    };
    MainScene.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (new Date().getTime() - this.startTimeShoot > 1000) {
            this.canShoot = true;
        }
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
            this.shipManager.GoSwitch('left', 9);
        }
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
            this.shipManager.GoSwitch('right', 9);
        }
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.space) && this.canShoot && !this.shipManager.onSwitch) {
            var ships = this.shipManager.GetShipByAngle(0);
            for (var key in ships) {
                ships[key].AddMissile(new Ball(ships[key].pos, ships[key].color));
            }
            this.startTimeShoot = new Date().getTime();
            this.canShoot = false;
        }
        this.ia.Update(deltaTime);
        this.shipManager.Update(deltaTime);
    };
    MainScene.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
        this.grid.Draw(context);
        this.shipManager.Draw(context);
    };
    MainScene.prototype.Clear = function () {
        _super.prototype.Clear.call(this);
    };
    MainScene.prototype.ChangeScene = function () {
        this.Clear();
    };
    return MainScene;
}(Scene));
//# sourceMappingURL=Main.js.map