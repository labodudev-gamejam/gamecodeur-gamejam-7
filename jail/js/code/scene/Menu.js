var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var MenuScene = (function (_super) {
    __extends(MenuScene, _super);
    function MenuScene() {
        _super.call(this);
        this.Start();
    }
    MenuScene.prototype.Start = function () {
        _super.prototype.Start.call(this);
    };
    MenuScene.prototype.Update = function (deltaTime) {
        _super.prototype.Update.call(this, deltaTime);
    };
    MenuScene.prototype.Draw = function (context) {
        _super.prototype.Draw.call(this, context);
    };
    MenuScene.prototype.Clear = function () {
        _super.prototype.Clear.call(this);
    };
    MenuScene.prototype.ChangeScene = function () {
        this.Clear();
    };
    return MenuScene;
}(Scene));
//# sourceMappingURL=Menu.js.map