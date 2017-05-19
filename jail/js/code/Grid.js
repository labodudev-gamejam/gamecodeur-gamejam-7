/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/
var Grid = (function () {
    function Grid() {
        this.ships = [];
    }
    Grid.prototype.AddElement = function (element) {
        this.ships.push(element);
    };
    Grid.prototype.GetElementInGrid = function (x) {
        for (var key in this.ships) {
            if (this.ships[key].grid.x == x) {
                return this.ships[key];
            }
        }
    };
    Grid.prototype.Update = function (deltaTime) {
    };
    Grid.prototype.Draw = function (context) {
        for (var i = 0; i < (global['width'] / 100) + 1; i++) {
            context.beginPath();
            context.moveTo(i * 100, 0);
            context.lineTo(i * 100, global["height"]);
            context.stroke();
        }
        for (var i = 0; i < (global['height'] / 80) + 1; i++) {
            context.beginPath();
            context.moveTo(0, i * 80);
            context.lineTo(global['width'], i * 80);
            context.stroke();
        }
    };
    Grid.prototype.Clear = function () {
    };
    return Grid;
})();
//# sourceMappingURL=Grid.js.map