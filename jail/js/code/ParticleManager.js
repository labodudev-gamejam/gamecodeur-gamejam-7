var ParticleManager = (function () {
    function ParticleManager() {
        this.particles = [];
    }
    ParticleManager.prototype.Update = function (deltaTime) {
        for (var key in this.particles) {
            this.particles[key].Update(deltaTime);
        }
    };
    ParticleManager.prototype.Draw = function (context) {
        for (var key in this.particles) {
            this.particles[key].Draw(context);
        }
    };
    ParticleManager.prototype.Add = function (missile) {
        this.particles.push(missile);
    };
    ParticleManager.prototype.Remove = function (missile) {
    };
    ParticleManager.prototype.Clear = function () {
    };
    return ParticleManager;
}());
//# sourceMappingURL=ParticleManager.js.map