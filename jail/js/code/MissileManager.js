var MissileManager = (function () {
    function MissileManager() {
        this.missiles = [];
    }
    MissileManager.prototype.Update = function (deltaTime) {
        for (var key in this.missiles) {
            this.missiles[key].Update(deltaTime);
        }
    };
    MissileManager.prototype.Draw = function (context) {
        for (var key in this.missiles) {
            this.missiles[key].Draw(context);
        }
    };
    MissileManager.prototype.Add = function (missile) {
        this.missiles.push(missile);
    };
    MissileManager.prototype.Remove = function (missile) {
    };
    MissileManager.prototype.Clear = function () {
    };
    return MissileManager;
}());
//# sourceMappingURL=MissileManager.js.map