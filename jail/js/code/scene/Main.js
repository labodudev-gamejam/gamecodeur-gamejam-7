var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        _super.call(this);
        this.grid = undefined;
        this.shipManager = undefined;
        this.brickManager = undefined;
        this.spawnManager = undefined;
        this.ia = undefined;
        this.canShoot = true;
        this.startTimeShoot = 0;
        this.started = false;
        this.grid = new Grid();
        this.shipManager = new ShipManager(this.grid);
        this.brickManager = new BrickManager(this.grid);
        this.grid.SetShipManager(this.shipManager);
        this.grid.SetBrickManager(this.brickManager);
        this.spawnManager = new SpawnManager(this.grid, this.shipManager, this.brickManager);
        this.countdown = new Countdown();
        this.countdown.SetEndFuncToCall(this.Start);
        this.countdown.Start(1);
        this.ia = new IA(this.grid, this.shipManager);
        this.brickManager.Add(new Brick({ x: 0, y: 4 }, 'blue', this.brickManager));
        this.brickManager.Add(new Brick({ x: 1, y: 4 }, 'green', this.brickManager));
        this.brickManager.Add(new Brick({ x: 2, y: 4 }, 'red', this.brickManager));
        this.brickManager.Add(new Brick({ x: 0, y: 5 }, 'red', this.brickManager));
        this.brickManager.Add(new Brick({ x: 1, y: 5 }, 'green', this.brickManager));
        this.brickManager.Add(new Brick({ x: 2, y: 5 }, 'blue', this.brickManager));
    }
    MainScene.prototype.Start = function () {
        _super.prototype.Start.call(this);
        this.spawnManager.Exec();
        this.started = true;
    };
    MainScene.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (this.shipManager && this.started) {
            if (new Date().getTime() - this.startTimeShoot > 500) {
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
                    ships[key].AddMissile(new Ball({ x: ships[key].x + 45, y: ships[key].y }, ships[key].color, 'top', this.grid, ships[key]));
                }
                this.startTimeShoot = new Date().getTime();
                this.canShoot = false;
            }
            this.shipManager.Update(deltaTime);
        }
        if (this.ia && this.started) {
            this.ia.Update(deltaTime);
        }
    };
    MainScene.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
        if (this.grid) {
            this.grid.Draw(context);
        }
        if (this.shipManager) {
            this.shipManager.Draw(context);
        }
        if (this.brickManager) {
            this.brickManager.Draw(context);
        }
        if (!this.started) {
            this.countdown.Draw(context);
        }
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