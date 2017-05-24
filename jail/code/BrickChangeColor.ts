/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class BrickChangeColor extends Brick {
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
  constructor(public pos: any,
							public color: string,
							public toColor: string,
							public brickManager: BrickManager) {
			super(pos, color, brickManager);

			this.grid.x = parseInt(pos.x / 100);
			this.grid.y = parseInt(pos.y / 80);

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

		context.save();
		context.lineWidth = 5;
		context.strokeStyle = this.toColor;
		context.beginPath();
		context.moveTo(this.pos.x + 40, this.pos.y + 20);
		context.lineTo(this.pos.x + 60, this.pos.y + 40);
		context.lineTo(this.pos.x + 40, this.pos.y + 60);
		context.stroke();
		context.restore();
  }

  /**
  * Nettoies toutes les variables
  */
  public Clear():void {
  }
}
