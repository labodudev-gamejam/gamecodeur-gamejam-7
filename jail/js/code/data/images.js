var Data;
(function (Data) {
    var Images = (function () {
        function Images() {
        }
        Images.Load = function (cb) {
            this.LoadSpriteSheet(function () {
                Data.Images.LoadButton(function () {
                    Data.Images.LoadBackground(function () {
                        Data.Images.LoadStaticElement(function () {
                            cb();
                        });
                    });
                });
            });
        };
        Images.LoadSpriteSheet = function (cb) {
            Data.Images.spriteSheet.src = 'jail/images/vaisseau.png';
            cb();
        };
        Images.LoadButton = function (cb) {
            cb();
        };
        Images.LoadBackground = function (cb) {
            cb();
        };
        Images.LoadStaticElement = function (cb) {
            cb();
        };
        return Images;
    }());
    Images.spriteSheet = new Image();
    Images.buttons = [];
    Images.backgrounds = [];
    Images.staticImages = [];
    Data.Images = Images;
})(Data || (Data = {}));
//# sourceMappingURL=Images.js.map