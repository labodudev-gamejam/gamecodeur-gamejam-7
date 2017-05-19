/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/
var SpawnManager = (function () {
    function SpawnManager() {
        this.spriteToAdd = [];
        this.spriteGenerator = new SpriteGenerator();
    }
    SpawnManager.prototype.Exec = function (currentTime) {
    };
    SpawnManager.prototype.Clear = function () {
    };
    SpawnManager.prototype.Add = function (listName) {
        for (var key in listName) {
            var infos = listName[key].split('_');
            var number = parseInt(infos[0]) + 10;
            var doublonInfos = [number, infos[1]];
            if (!this.spriteToAdd[infos[0]]) {
                this.spriteToAdd[infos[0]] = [];
            }
            if (!this.spriteToAdd[doublonInfos[0]]) {
                this.spriteToAdd[doublonInfos[0]] = [];
            }
            this.spriteToAdd[infos[0]].push(infos[1]);
            this.spriteToAdd[doublonInfos[0]].push(doublonInfos[1]);
        }
    };
    return SpawnManager;
})();
//# sourceMappingURL=SpawnManager.js.map