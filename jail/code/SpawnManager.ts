/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class SpawnManager {
  constructor(public grid: Grid, public shipManager: ShipManager) {
		this.shipManager.Add(new Ship(
			Data.Images.spriteSheet,
			{
				x: 0,
				y: 9
			},
			Data.Object.ships['redShip'],
			0,
			"red",
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
			"blue",
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
			"green",
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
			"red",
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
			"blue",
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
			"green",
			this.shipManager
		));
	}

  Clear():void {}
}
