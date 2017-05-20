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
        this.Start();
    }
    MainScene.prototype.Start = function () {
        _super.prototype.Start.call(this);
        this.grid = new Grid();
        this.shipManager = new ShipsManager(this.grid);
        this.shipManager.Add(new Ship(0, Data.Images.spriteSheet, {
            x: 0,
            y: 9
        }, Data.Object.ships['redShip'], this.shipManager));
        this.shipManager.Add(new Ship(1, Data.Images.spriteSheet, {
            x: 1,
            y: 9
        }, Data.Object.ships['blueShip'], this.shipManager));
        this.shipManager.Add(new Ship(2, Data.Images.spriteSheet, {
            x: 2,
            y: 9
        }, Data.Object.ships['greenShip'], this.shipManager));
    };
    MainScene.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
            this.shipManager.GoSwitch('left');
        }
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
            this.shipManager.GoSwitch('right');
        }
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