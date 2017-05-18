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
        };
        Object.bodies = undefined;
        Object.humanParts = undefined;
        Object.bodiesSpawn = undefined;
        Object.ordersSpawn = undefined;
        return Object;
    }());
    Data.Object = Object;
})(Data || (Data = {}));
//# sourceMappingURL=Object.js.map