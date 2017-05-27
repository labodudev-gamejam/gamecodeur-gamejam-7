var Scene = (function () {
    function Scene() {
        global['spriteManager'] = new SpriteManager();
    }
    Scene.prototype.Start = function () { };
    Scene.prototype.Update = function (delta) {
        global['spriteManager'].Update(delta);
    };
    Scene.prototype.Draw = function (context) {
        global['spriteManager'].Draw(context);
    };
    Scene.prototype.Clear = function () { };
    Scene.prototype.ChangeScene = function () { };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map