/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
Gères le personnage du jeu:
-Gères les différentes parties d'un personnage: Corps, Tête, Bras, Jambe.
-Gères la collision du corps vers les autres parties humaines.
-Gères le déplacement par rapport au curseur de la souris.
-Gères la rotation par rapport au clique de la souris, ou au clavier.
*/

class Character {
  /**
  * La position du personnage
  * @type {any}
  */
  public pos: any = {
    x: 0,
    y: 0
  }

  /**
  * Le constructeur initialise les collisions du personnage
  * @return {void}
  */
  constructor() {}

  /**
  * Met à jour la position du personnage selon la souris.
  * Si on presse le clavier ou les cliques de la souris, fait une rotation
  * au personnage.
  * Met à jour les collisions du personnage.
  */
  public Update():void {
    this.pos.x = EventMouse.Mouse.move.x;
    this.pos.y = EventMouse.Mouse.move.y;
  }

  /**
  * Déplaces le canvas pour le centrer sur le personnage.
  * Fait une rotation selon son angle.
  * Appelle la méthode Draw de tous ses enfants.
  * @param {any} context [description]
  */
  public Draw(context: any):void {
    context.save();

    context.restore();
  }

  /**
  * Nettoies toutes les variables
  */
  public Clear():void {
    this.pos.x = 0;
    this.pos.y = 0;
    delete this.pos;
  }
}
