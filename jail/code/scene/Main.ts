/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class MainScene extends Scene {
	private grid: Grid = undefined;
	private shipManager: ShipManager = undefined;
	private spawnManager: SpawnManager = undefined;
	private ia: IA = undefined;
	private canShoot: boolean = true;
	private startTimeShoot: number = 0;
  constructor() {
    super();

    this.Start();
  }

  public Start():void {
    super.Start();

		this.grid = new Grid();
		this.shipManager = new ShipManager(this.grid);
		this.grid.SetShipManager(this.shipManager);
		this.spawnManager = new SpawnManager(this.grid, this.shipManager);
		this.ia = new IA(this.grid, this.shipManager);
	}

  public Update(deltaTime: number):void {
    super.Update(deltaTime);

		if (new Date().getTime() - this.startTimeShoot > 500 ) {
			this.canShoot = true;
		}

		if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
			this.shipManager.GoSwitch('left', 9);
		}

		if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
			this.shipManager.GoSwitch('right', 9);
		}

		if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.space) && this.canShoot && !this.shipManager.onSwitch ) {
			var ships = this.shipManager.GetShipByAngle( 0 );
			for ( var key in ships ) {
				ships[key].AddMissile( new Ball( {x: ships[key].x + 45, y: ships[key].y}, ships[key].color, 'top', this.grid ) );
			}

			this.startTimeShoot = new Date().getTime();
			this.canShoot = false;
		}

		this.ia.Update(deltaTime);
		this.shipManager.Update(deltaTime);
  }

  public Draw(context: any):void {
    super.Draw(context);

		this.grid.Draw(context);
		this.shipManager.Draw(context);
  }

	public Clear():void {
    super.Clear();
	}

  public ChangeScene():void {
    this.Clear();
  }
}
