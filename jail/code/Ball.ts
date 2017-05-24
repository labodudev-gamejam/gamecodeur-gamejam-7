/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Ball {
	private speed: number = 500;
  /**
  * Le constructeur initialise les collisions du personnage
  * @return {void}
  */
  constructor(public pos: any, public color: string, public direction: string, public grid: Grid, public ship: Ship) {}
  /**
  *
  */
	public Update(deltaTime: number):any {
		if ( this.direction === 'down' ) {
			this.pos.y += this.speed * deltaTime;
		} else {
	    this.pos.y -= this.speed * deltaTime;
		}

		this.grid.CheckColliderGridAndColor(this.pos, this.color);
		var brick = this.grid.CheckColliderBrickGridAndColor(this.pos, this.color );
		if ( brick ) {
			if ( brick.object && brick.object.toColor && brick.switchColor ) {
				this.ship.SetColor( brick.object.toColor );
				brick.brickManager.Remove(brick.object);
			}
			this.Clear();
		}

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
    context.arc(this.pos.x + 5, this.pos.y + 5, 10, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
    context.lineWidth = 2;
    context.strokeStyle = '#003300';
    context.stroke();
		context.restore();
  }

  /**
  * Nettoies toutes les variables
  */
  public Clear():void {
		this.ship.RemoveMissile(this);
  }
}
