/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var Data;
(function (Data) {
    var Sounds = (function () {
        function Sounds() {
        }
        Sounds.Load = function (cb) {
            cb();
        };
        Sounds.AddSound = function (name, src, maxChannels) {
            Data.Sounds.sounds[name] = [];
            Data.Sounds.sounds[name].index = 0;
            if (!maxChannels) {
                maxChannels = 3;
            }
            for (var i = 0; i < maxChannels; i++) {
                Data.Sounds.sounds[name][i] = new Audio(src);
            }
            return Data.Sounds;
        };
        Sounds.PlaySound = function (name, loop) {
            var _this = this;
            if (Data.Sounds.sounds[name].index >= Data.Sounds.sounds[name].length) {
                Data.Sounds.sounds[name].index = 0;
            }
            if (loop) {
                Data.Sounds.sounds[name][Data.Sounds.sounds[name].index].addEventListener("ended", function () { _this.PlaySound(name, false); }, false);
            }
            Data.Sounds.sounds[name][Data.Sounds.sounds[name].index++].play();
            return Data.Sounds.sounds[name].index;
        };
        Sounds.sounds = [];
        return Sounds;
    })();
    Data.Sounds = Sounds;
})(Data || (Data = {}));
;
//# sourceMappingURL=Sounds.js.map