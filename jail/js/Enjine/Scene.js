var Scene = (function () {
    function Scene() {
        this.spriteManager = new SpriteManager();
    }
    Scene.prototype.Start = function () { };
    Scene.prototype.Update = function (delta) {
        this.spriteManager.Update(delta);
    };
    Scene.prototype.Draw = function (context) {
        this.spriteManager.Draw(context);
    };
    Scene.prototype.Clear = function () { };
    Scene.prototype.ChangeScene = function () { };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map