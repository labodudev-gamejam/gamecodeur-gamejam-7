var Map = (function () {
    function Map() {
        this.Exec();
    }
    Map.prototype.Exec = function () {
        for (var key in Data.Object.map) {
            var sprite = new Sprite(Data.Images.spriteSheet, { x: 0, y: 0 });
            sprite.grid.x = Data.Object.map[key].x;
            sprite.grid.y = Data.Object.map[key].y;
            sprite.offset.x = (Data.Object.element[Data.Object.map[key].name].width / 2) - 10;
            sprite.offset.y = (Data.Object.element[Data.Object.map[key].name].height / 2) - 10;
            sprite.tag = 'asteroid';
            sprite.scale.x = 0.8;
            sprite.scale.y = 0.8;
            sprite.speedAngle = (Math.random() * 10) + 2;
            sprite.SetZone(Data.Object.element[Data.Object.map[key].name]);
            global['spriteManager'].Add(sprite);
        }
    };
    Map.prototype.Update = function (deltaTime) {
        var elements = global['spriteManager'].GetByTag('asteroid');
        for (var key in elements) {
            elements[key].GridToCoordinate();
        }
    };
    return Map;
}());
//# sourceMappingURL=Map.js.map