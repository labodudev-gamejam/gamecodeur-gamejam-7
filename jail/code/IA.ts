/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class IA {
  constructor(public grid: Grid, public shipManager: ShipManager) {
		var currentShip: Ship = this.grid.GetElementInGrid(this.shipManager.ships, 2, 0);
		var middleShip: Ship = this.grid.GetElementInGrid(this.shipManager.ships, 1, 0);

		if (currentShip) {
			currentShip.GoSwitch( 1, 0, 0 );
		}
		if (middleShip) {
			middleShip.GoSwitch( 2, 0, 1 );
		}
	}

	public Update(deltaTime: number):void {
	}

  Clear():void {}
}
