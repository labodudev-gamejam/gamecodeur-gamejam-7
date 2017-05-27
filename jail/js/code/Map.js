var Map = (function () {
    function Map(spriteManager) {
        this.spriteManager = spriteManager;
        this.Exec();
    }
    Map.prototype.Exec = function () {
        for (var key in Data.Object.map) {
            var sprite = new Sprite(Data.Images.spriteSheet, { x: Data.Object.map[key].x, y: Data.Object.map[key].y });
            sprite.SetZone(Data.Object.element[Data.Object.map[key].name]);
            this.spriteManager.Add(sprite);
        }
    };
    return Map;
}());
//# sourceMappingURL=Map.js.map