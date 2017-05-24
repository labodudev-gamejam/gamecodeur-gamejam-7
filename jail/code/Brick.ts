/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Brick {
	/**
  * La grille du personnage
  * @type {any}
  */
  public grid: any = {
    x: 0,
    y: 0
  }

	public toColor: string = undefined;
  /**
  * Le constructeur initialise les collisions du personnage
  * @return {void}
  */
  constructor(public pos: any,
							public color: string,
							public brickManager: BrickManager) {
			this.grid.x = pos.x;
			this.grid.y = pos.y;
			this.pos.x = pos.x * 100;
			this.pos.y = pos.y * 80;
		}

  /**
  *
  */
  public Update(deltaTime: number):void {
  }

  /**
  * Déplaces le canvas pour le centrer sur le personnage.
  * Fait une rotation selon son angle.
  * Appelle la méthode Draw de tous ses enfants.
  * @param {any} context [description]
  */
  public Draw(context: any):void {
		context.save();
		context.beginPath();
		context.rect(this.pos.x,this.pos.y,100,80);
		context.fillStyle=this.color;
		context.fill();
		context.restore();
  }

  /**
  * Nettoies toutes les variables
  */
  public Clear():void {
  }
}
