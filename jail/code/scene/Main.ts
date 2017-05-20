/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class MainScene extends Scene {
	private grid: Grid = undefined;
	private shipManager: ShipsManager = undefined;
  constructor() {
    super();

    this.Start();
  }

  public Start():void {
    super.Start();

		this.grid = new Grid();
		this.shipManager = new ShipsManager(this.grid);

    this.shipManager.Add(new Ship(
			Data.Images.spriteSheet,
      {
        x: 0,
        y: 9
      },
			Data.Object.ships['redShip'],
			0,
			this.shipManager
    ));

    this.shipManager.Add(new Ship(
      Data.Images.spriteSheet,
      {
        x: 1,
        y: 9
      },
			Data.Object.ships['blueShip'],
			0,
			this.shipManager
    ));

    this.shipManager.Add(new Ship(
      Data.Images.spriteSheet,
      {
        x: 2,
        y: 9
      },
			Data.Object.ships['greenShip'],
			0,
			this.shipManager
    ));

    this.shipManager.Add(new Ship(
			Data.Images.spriteSheet,
      {
        x: 0,
        y: 0
      },
			Data.Object.ships['redShip'],
			180,
			this.shipManager
    ));

    this.shipManager.Add(new Ship(
      Data.Images.spriteSheet,
      {
        x: 1,
        y: 0
      },
			Data.Object.ships['blueShip'],
			180,
			this.shipManager
    ));

    this.shipManager.Add(new Ship(
      Data.Images.spriteSheet,
      {
        x: 2,
        y: 0
      },
			Data.Object.ships['greenShip'],
			180,
			this.shipManager
    ));
  }

  public Update(deltaTime: number):void {
    super.Update(deltaTime);

		if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
			this.shipManager.GoSwitch('left');
		}

		if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
			this.shipManager.GoSwitch('right');
		}

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
