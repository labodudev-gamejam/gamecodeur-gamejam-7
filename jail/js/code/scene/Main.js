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
        _this.ships = [];
        _this.grid = undefined;
        _this.Start();
        return _this;
    }
    MainScene.prototype.Start = function () {
        _super.prototype.Start.call(this);
        this.grid = new Grid();
        this.ships.push(new Ship(Data.Images.spriteSheet, {
            x: 0,
            y: 9
        }, Data.Object.ships['redShip']));
        this.grid.AddElement(this.ships[0]);
        this.ships.push(new Ship(Data.Images.spriteSheet, {
            x: 1,
            y: 9
        }, Data.Object.ships['blueShip']));
        this.grid.AddElement(this.ships[1]);
        this.ships.push(new Ship(Data.Images.spriteSheet, {
            x: 2,
            y: 9
        }, Data.Object.ships['greenShip']));
        this.grid.AddElement(this.ships[2]);
    };
    MainScene.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
            this.Switch('left');
        }
        if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
            this.Switch('right');
        }
    };
    MainScene.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
        this.grid.Draw(context);
        for (var key in this.ships) {
            this.ships[key].Draw(context);
        }
    };
    MainScene.prototype.Clear = function () {
        _super.prototype.Clear.call(this);
    };
    MainScene.prototype.ChangeScene = function () {
        this.Clear();
    };
    MainScene.prototype.Switch = function (direction) {
        if ('left' === direction) {
            var currentShip = this.grid.GetElementInGrid(2);
            var middleShip = this.grid.GetElementInGrid(1);
            if (currentShip) {
                currentShip.SetGridX(1);
            }
            if (middleShip) {
                middleShip.SetGridX(2);
            }
        }
        else {
        }
    };
    return MainScene;
}(Scene));
//# sourceMappingURL=Main.js.map