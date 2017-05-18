var Scene = (function () {
    function Scene() {
        this.spriteManager = new SpriteManager();
        this.character = undefined;
        this.score = undefined;
    }
    Scene.prototype.Start = function () { };
    Scene.prototype.Update = function (delta) {
        if (this.spriteManager) {
            this.spriteManager.Update(delta);
        }
    };
    Scene.prototype.Draw = function (context) {
        if (this.spriteManager) {
            this.spriteManager.Draw(context);
        }
        if (this.score) {
            this.score.Draw(context);
        }
    };
    Scene.prototype.Clear = function () {
        this.spriteManager.Clear();
        delete this.spriteManager;
    };
    Scene.prototype.InitCharacter = function (triggerElement) { };
    Scene.prototype.RemoveCharacter = function () { };
    Scene.prototype.Delivery = function () { };
    Scene.prototype.ChangeScene = function () { };
    return Scene;
}());
//# sourceMappingURL=Scene.js.map