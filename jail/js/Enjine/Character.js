/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
Gères le personnage du jeu:
-Gères les différentes parties d'un personnage: Corps, Tête, Bras, Jambe.
-Gères la collision du corps vers les autres parties humaines.
-Gères le déplacement par rapport au curseur de la souris.
-Gères la rotation par rapport au clique de la souris, ou au clavier.
*/
var Character = (function () {
    function Character() {
        this.pos = {
            x: 0,
            y: 0
        };
    }
    Character.prototype.Update = function () {
        this.pos.x = EventMouse.Mouse.move.x;
        this.pos.y = EventMouse.Mouse.move.y;
    };
    Character.prototype.Draw = function (context) {
        context.save();
        context.restore();
    };
    Character.prototype.Clear = function () {
        this.pos.x = 0;
        this.pos.y = 0;
        delete this.pos;
    };
    return Character;
})();
//# sourceMappingURL=Character.js.map