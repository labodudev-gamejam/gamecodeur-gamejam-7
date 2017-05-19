/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Grid {
	private ships: Array<Ship> = [];
  constructor() {

  }

	public AddElement(element: Ship):void {
		this.ships.push(element);
	}

	public GetElementInGrid(x: number):Ship {

		for(var key in this.ships) {
			if ( this.ships[key].grid.x == x ) {
				return this.ships[key];
			}
		}

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
