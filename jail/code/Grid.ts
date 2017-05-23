/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Grid {
	private shipManager: ShipManager = undefined;
  constructor() {

  }

	public GetElementInGrid(ships: Array<Ship>, x: number, y: number):Ship {
		for(var key in ships) {
			if ( ships[key].grid.x == x && ships[key].grid.y == y ) {
				return ships[key];
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

	public SetShipManager(shipManager: ShipManager):void {
		this.shipManager = shipManager;
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
