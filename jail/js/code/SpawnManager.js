var SpawnManager = (function () {
    function SpawnManager() {
        this.Exec();
    }
    SpawnManager.prototype.Exec = function () {
        var _this = this;
        setInterval(function () { _this.Update(); }, 1000);
    };
    SpawnManager.prototype.Update = function () {
    };
    SpawnManager.prototype.Clear = function () { };
    return SpawnManager;
}());
//# sourceMappingURL=SpawnManager.js.map