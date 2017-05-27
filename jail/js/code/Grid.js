var Grid = (function () {
    function Grid() {
    }
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
}());
//# sourceMappingURL=Grid.js.map