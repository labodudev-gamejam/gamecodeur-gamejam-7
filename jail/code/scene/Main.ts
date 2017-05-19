/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class MainScene extends Scene {
	private ships: Array<Ship> = [];
	private grid: Grid = undefined;
  constructor() {
    super();

    this.Start();
  }

  public Start():void {
    super.Start();

		this.grid = new Grid();

    this.ships.push(new Ship(0,
      Data.Images.spriteSheet,
      {
        x: 0,
        y: 9
      },
			Data.Object.ships['redShip']
    ));

		this.grid.AddElement(this.ships[0]);

    this.ships.push(new Ship(1,
      Data.Images.spriteSheet,
      {
        x: 1,
        y: 9
      },
			Data.Object.ships['blueShip']
    ));

		this.grid.AddElement(this.ships[1]);

    this.ships.push(new Ship(2,
      Data.Images.spriteSheet,
      {
        x: 2,
        y: 9
      },
			Data.Object.ships['greenShip']
    ));

		this.grid.AddElement(this.ships[2]);
  }

  public Update(deltaTime: number):void {
    super.Update(deltaTime);

		if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.left) || EventMouse.Mouse.pressedClics.left) {
			this.Switch( 'left' );
		}

		if (EventKeyboard.Input.IsKeyDown(EventKeyboard.Input.keys.right) || EventMouse.Mouse.pressedClics.right) {
			this.Switch( 'right' );
		}

		for (var key in this.ships) {
      this.ships[key].Update();
    }
  }

  public Draw(context: any):void {
    super.Draw(context);

		this.grid.Draw( context );

		for (var key in this.ships) {
      this.ships[key].Draw(context);
    }
  }

	public Clear():void {
    super.Clear();
	}

  public ChangeScene():void {
    this.Clear();
  }

	public Switch( direction: String ):void {
		if ( 'left' === direction ) {
			var currentShip: Ship = this.grid.GetElementInGrid( 2 );
			var middleShip: Ship = this.grid.GetElementInGrid( 1 );

			if (currentShip) {
				currentShip.GoSwitch( 1, 0 );
			}
			if (middleShip) {
				middleShip.GoSwitch( 2, 1 );
			}
		} else {
			var currentShip: Ship = this.grid.GetElementInGrid( 0 );
			var middleShip: Ship = this.grid.GetElementInGrid( 1 );

			if (currentShip) {
				currentShip.GoSwitch( 1, 1 );
			}
			if (middleShip) {
				middleShip.GoSwitch ( 0, 0 );
			}
		}
	}
}
