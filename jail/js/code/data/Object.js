var Data;
(function (Data) {
    var Object = (function () {
        function Object() {
        }
        Object.Load = function (cb) {
            Data.Object.LoadJSON(function () {
                cb();
            });
        };
        Object.LoadJSON = function (cb) {
            Data.JSONLoader.Exec('jail/json/spritesheet.json', function (data) {
                Data.Object.ships = data;
                cb();
            });
        };
        Object.ships = undefined;
        return Object;
    }());
    Data.Object = Object;
})(Data || (Data = {}));
//# sourceMappingURL=Object.js.map