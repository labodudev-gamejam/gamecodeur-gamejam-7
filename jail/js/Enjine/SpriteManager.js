var SpriteManager = (function () {
    function SpriteManager() {
        this.listSprite = [];
    }
    SpriteManager.prototype.Update = function (deltaTime) {
        for (var key in this.listSprite) {
            this.listSprite[key].Update(deltaTime);
        }
    };
    SpriteManager.prototype.Draw = function (context) {
        for (var key in this.listSprite) {
            this.listSprite[key].Draw(context);
        }
    };
    SpriteManager.prototype.Add = function (sprite) {
        if (sprite) {
            this.listSprite.push(sprite);
        }
    };
    SpriteManager.prototype.Remove = function (sprite) {
        for (var type in this.listSprite) {
            for (var i = 0; i < this.listSprite[type].length; i++) {
                if (this.listSprite[type][i] == sprite) {
                    this.listSprite[type].splice(i, 1);
                }
            }
        }
    };
    SpriteManager.prototype.Clear = function () {
    };
    SpriteManager.prototype.Resize = function () {
        for (var i = 0; i < this.listSprite["body"].length; i++) {
            this.listSprite["body"][i].Resize();
        }
    };
    SpriteManager.prototype.GetByTag = function (tag) {
        var elements = [];
        for (var key in this.listSprite) {
            if (this.listSprite[key].tag === tag) {
                elements.push(this.listSprite[key]);
            }
        }
        return elements;
    };
    return SpriteManager;
}());
//# sourceMappingURL=SpriteManager.js.map