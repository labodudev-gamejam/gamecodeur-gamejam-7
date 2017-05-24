/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class MainScene extends Scene {
	private grid: Grid = undefined;
	private shipManager: ShipManager = undefined;
	private brickManager: BrickManager = undefined;
	private spawnManager: SpawnManager = undefined;
	private ia: IA = undefined;
	private canShoot: boolean = true;
	private startTimeShoot: number = 0;
	public started: boolean = false;
	public countdown: Countdown;

  constructor() {
    super();

		this.grid = new Grid();
		this.shipManager = new ShipManager(this.grid);
		this.brickManager = new BrickManager(this.grid);
		this.grid.SetShipManager(this.shipManager);
		this.grid.SetBrickManager(this.brickManager);
		this.spawnManager = new SpawnManager(this.grid, this.shipManager);

		this.countdown = new Countdown();
		this.countdown.SetEndFuncToCall(this.Start);
		this.countdown.Start(1);

		this.ia = new IA(this.grid, this.shipManager);

		this.brickManager.Add( new BrickChangeColor({x:0, y:4}, 'blue', 'red', this.brickManager) );
		this.brickManager.Add( new BrickChangeColor({x:0, y:5}, 'green', 'red', this.brickManager) );
  }

  public Start():void {
    super.Start();

		this.started = true;
	}

  public Update(deltaTime: number):void {
    super.Update(deltaTime);

		if ( this.shipManager && this.started ) {
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
					ships[key].AddMissile( new Ball( {x: ships[key].x + 45, y: ships[key].y}, ships[key].color, 'top', this.grid, ships[key] ) );
				}

				this.startTimeShoot = new Date().getTime();
				this.canShoot = false;
			}

			this.shipManager.Update(deltaTime);
		}

		if ( this.ia && this.started ) {
			this.ia.Update(deltaTime);
		}
  }

  public Draw(context: any):void {
    super.Draw(context);

		if ( this.grid ) {
			this.grid.Draw(context);
		}

		if ( this.shipManager ) {
			this.shipManager.Draw(context);
		}

		if ( this.brickManager ) {
			this.brickManager.Draw(context);
		}

		if ( ! this.started ) {
			this.countdown.Draw(context);
		}
  }

	public Clear():void {
    super.Clear();
	}

  public ChangeScene():void {
    this.Clear();
  }
}
