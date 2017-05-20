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

	private x:number = 0;
	private y:number = 0;
	private x1:number = 0;
	private y1:number = 0;
	private x2:number = 0;
	private y2:number = 0;
	private f:number = 0;
	private speed:number = 0;
	private dist:number = 0;
	private steps:number = 50;
	private onSwitch:boolean = false;
	private direction:number = 0;
  /**
  * Le constructeur initialise les collisions du personnage
  * @return {void}
  */
  constructor(public image: any,
							public pos: any,
							public zone: any,
							public angle: number,
							public shipManager: ShipsManager) {
			super(image, pos);

			this.grid.x = pos.x;
			this.grid.y = pos.y;
			this.x = pos.x * 100;
			this.y = pos.y * 80;
		}

		public GoSwitch(x: number, direction:number):void {
			if ( ! this.shipManager.onSwitch && ! this.onSwitch && this.f == 0 ) {
				this.onSwitch = true;
				this.direction = direction;

				this.x1 = this.x;
				this.y1 = this.y;

				var rect = global['canvas'].getBoundingClientRect();
				this.x2 = x * 100;
				this.y2 = 720 ;

				this.grid.x = x;

				/// get and adjust mouse position

				 /// calc distance
				 var dx = this.x2 - this.x1;
				var dy = this.y2 - this.y1;

				 this.dist = Math.abs(Math.sqrt(dx * dx + dy * dy));

				 /// speed will be number of steps / distance
				 this.speed = 20 / this.dist;
			}
		}

  /**
  *
  */
  public Update():void {
		if ( this.onSwitch ) {
			this.f+= this.speed;

		if ( this.x < 0.5 ) {
			this.y += this.direction == 0 ? -5 : 5;
		}
		else {
			this.y += this.direction == 0 ? 5 : -5;
		}


	 /// calc current x/y position
		if ( this.f < 1  ) {
		 this.x = this.x1 + (this.x2 - this.x1) * this.f;
	 } else {
		 this.x = this.x2;
		 this.y = this.y2;
		 this.f = 0;
		 this.shipManager.onSwitch = false;
		 this.onSwitch = false;
	 }

			// console.log( Math.sqrt((this.pos.x - this.goTo.x) ^ 2 + (this.pos.y - this.goTo.y) ^ 2) );
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
    context.translate(this.x + 49.5, this.y + 37.5);
    context.rotate(this.angle*Math.PI/180);

    context.drawImage(
      this.image,
      this.zone.x,
      this.zone.y,
      this.zone.width,
      this.zone.height,
      -(this.zone.width / 2),
      -(this.zone.height / 2),
      this.zone.width,
      this.zone.height
    );

    context.restore();

  }

  /**
  * Nettoies toutes les variables
  */
  public Clear():void {
  }
}
