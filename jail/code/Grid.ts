/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Grid {
	private shipManager: ShipManager = undefined;
	private brickManager: BrickManager = undefined;
  constructor() {

  }

	public GetElementInGrid(ships: Array<Ship>, x: number, y: number):any {
		for(var key in this.shipManager.ships) {
			if ( this.shipManager.ships[key].grid.x == x && this.shipManager.ships[key].grid.y == y ) {
				return this.shipManager.ships[key];
			}
		}

		for(var key in this.brickManager.bricks) {
			if ( this.brickManager.bricks[key].grid.x == x && this.brickManager.bricks[key].grid.y == y ) {
				return this.brickManager.bricks[key];
			}
		}

	}

	public CheckColliderGridAndColor(pos: any, color: string):Ship {
		for(var key in this.shipManager.ships) {
			if ( this.shipManager.ships[key].grid.x == parseInt(pos.x / 100) && this.shipManager.ships[key].grid.y == parseInt(pos.y / 80) && this.shipManager.ships[key].color == color ) {
				this.shipManager.Remove(this.shipManager.ships[key]);
			}
		}

		return undefined;
	}

	public CheckColliderBrickGridAndColor(pos: any, color: string):any {
		for(var key in this.brickManager.bricks) {
			if ( this.brickManager.bricks[key].grid.x == parseInt(pos.x / 100) && this.brickManager.bricks[key].grid.y == parseInt(pos.y / 80) ) {
				if ( this.brickManager.bricks[key].color == color ) {
					return {
						brickManager: this.brickManager,
						switchColor: true,
						destroy: true,
						object: this.brickManager.bricks[key]
					};
				}

				return {
					switchColor: false,
					destroy: false,
					object: this.brickManager.bricks[key]
				};
			}
		}

		return undefined;
	}

	public SetShipManager(shipManager: ShipManager):void {
		this.shipManager = shipManager;
	}

	public SetBrickManager(brickManager: BrickManager):void {
		this.brickManager = brickManager;
	}

  public Update(deltaTime: number):void {
  }

  public Draw(context: any):void {
		for( var i = 0; i < (global['width'] / 100) + 1; i++ ) {
			context.beginPath();
			context.moveTo( i * 100, 0 );
			context.lineTo( i * 100, global["height"] );
			context.stroke();
		}

		for( var i = 0; i < (global['height'] / 80) + 1; i++ ) {
			context.beginPath();
			context.moveTo( 0, i * 80 );
			context.lineTo( global['width'], i * 80 );
			context.stroke();
		}


  }

	public Clear():void {
	}
}
