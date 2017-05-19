/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Ship extends Sprite {
	/**
  * La grille du personnage
  * @type {any}
  */
  public grid: any = {
    x: 0,
    y: 0
  }

  /**
  * Le constructeur initialise les collisions du personnage
  * @return {void}
  */
  constructor(public image: any,
							public pos: any,
							public zone: any) {
			super(image, pos);

			this.grid.x = pos.x;
			this.grid.y = pos.y;
			pos.x *= 100;
			pos.y *= 80;
		}

		public SetGridX(x: number):void {
			this.grid.x = x;
			this.pos.x = this.grid.x * 100;
		}

  /**
  *
  */
  public Update():void {
  }

  /**
  * Déplaces le canvas pour le centrer sur le personnage.
  * Fait une rotation selon son angle.
  * Appelle la méthode Draw de tous ses enfants.
  * @param {any} context [description]
  */
  public Draw(context: any):void {
		context.drawImage(
      this.image,
      this.zone.x,
      this.zone.y,
      this.zone.width,
      this.zone.height,
      this.pos.x,
      this.pos.y,
      this.zone.width,
      this.zone.height
    );
  }

  /**
  * Nettoies toutes les variables
  */
  public Clear():void {
  }
}
