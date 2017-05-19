/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/
var Helper;
(function (Helper) {
    var DrawImage = (function () {
        function DrawImage() {
        }
        DrawImage.Draw = function (name, context) {
            var x = 0;
            var y = 0;
            context.drawImage(Data.Images.spriteSheet, Data.Object.ships[name].x, Data.Object.ships[name].y, Data.Object.ships[name].width, Data.Object.ships[name].height, x, y, Data.Object.ships[name].width, Data.Object.ships[name].height);
        };
        ;
        return DrawImage;
    })();
    Helper.DrawImage = DrawImage;
})(Helper || (Helper = {}));
//# sourceMappingURL=DrawImage.js.map