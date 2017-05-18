/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
Appelle les méthodes Load des Objets global Ressources.Images et Ressources.Sounds
*/
var Loader = (function () {
    function Loader() {
    }
    Loader.prototype.Exec = function (cb) {
        Data.Images.Load(function () {
            Data.Sounds.Load(function () {
                Data.Object.Load(function () {
                    cb();
                });
            });
        });
    };
    return Loader;
})();
//# sourceMappingURL=Loader.js.map