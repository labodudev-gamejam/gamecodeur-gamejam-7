/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class IA {
	private initColorShip: Array<String> = ['blueShip', 'redShip', 'greenShip'];
  constructor() {
		this.Init();
	}

	/**
	 * Initialise les vaisseaux de l'IA.
	 */
	public Init():void {
		for (var key in this.initColorShip) {
			let ship = new Ship(Data.Images.spriteSheet, {x: 0, y: 0});
			ship.grid.x = key;
			ship.grid.y = 0;
			ship.offset.x = 49.5;
			ship.offset.y = 37.5;
			ship.tag = 'ia';
			ship.angle = 180;
			ship.SetZone(Data.Object.element[this.initColorShip[key]]);
			global['spriteManager'].Add(ship);
		}
	}

	public Update(deltaTime: number):void {

	}

  Clear():void {}
}
