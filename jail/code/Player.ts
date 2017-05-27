/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Player {
  private initColorShip: Array<string> = ['blue', 'red', 'green'];

  private canShoot: Boolean = true;
	private lastShootTime: number = 0;
	private timeForShoot: number = 200;
	constructor() {
	   this.Init();
	}

	/**
	 * Initialise les vaisseaux du joueur.
	 */
	public Init():void {
    for (var key in this.initColorShip) {
      let ship = new Ship(Data.Images.spriteSheet, {x: 0, y: 0});
      ship.grid.x = key;
      ship.grid.y = 9;
      ship.offset.x = 49.5;
      ship.offset.y = 37.5;
      ship.tag = 'ally';
			ship.color = this.initColorShip[key];
      ship.SetZone(Data.Object.element[ship.color + 'Ship']);
      global['spriteManager'].Add(ship);
    }
	}

  /**
   * Les contrôles de l'utilisateur.
   */
  public Update(deltaTime: number):void {
    if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
      this.GoSwitch('left');
    }

    if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
      this.GoSwitch('right');
    }

		if (new Date().getTime() - this.lastShootTime > this.timeForShoot ) {
			this.canShoot = true;
		}

    if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.space) && this.canShoot ) {
      this.Shoot();
    }
  }

  /**
   * Intervertis de position deux vaisseaux.
   */
  public GoSwitch(direction: string):void {

  }

  public Shoot():void {
    var ships: Array<Ship> = global['spriteManager'].GetByTag('ally');

    for (var key in ships) {
      ships[key].Shoot();
    }

		this.lastShootTime = new Date().getTime();
		this.canShoot = false;
  }
}
