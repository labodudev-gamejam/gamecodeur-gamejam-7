var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MainScene = (function (_super) {
    __extends(MainScene, _super);
    function MainScene() {
        _super.call(this);
        this.map = undefined;
        this.grid = undefined;
        this.map = new Map(this.spriteManager);
        this.grid = new Grid();
    }
    MainScene.prototype.Start = function () {
        _super.prototype.Start.call(this);
    };
    MainScene.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
    };
    MainScene.prototype.Draw = function (context) {
        this.grid.Draw(context);
        _super.prototype.Draw.call(this, context);
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