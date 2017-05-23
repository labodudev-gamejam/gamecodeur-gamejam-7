/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class ShipManager {
  ships: Array<Ship> = [];
  onSwitch: boolean = false;
  constructor(public grid: Grid) {}

	public GetShipByAngle(angle: number):Array<Ship> {
		var list: Array<Ship> = [];

		for (var key in this.ships ) {
			if ( this.ships[key].angle == angle ) {
				list.push( this.ships[key] );
			}
		}

		return list;
	}

	public Update(deltaTime: number):void {
		for (var key in this.ships) {
			this.ships[key].Update(deltaTime);
		}
	}

	public Draw(context: any):void {
		for (var key in this.ships) {
			this.ships[key].Draw(context);
		}
	}

  /**
   * Ajoutes un sprites dans le tableau listSprite
   * @param {Sprite} sprite Le sprite a ajouter
   */
  Add(sprite: Ship): void {
		if (sprite) {
			this.ships.push(sprite);
		}
  }

  Remove(sprite: Sprite): void {
    // for (var key in this.ships) {
    //   if (this.ships[key] == sprite) {
    //     let aKey: any = key;
    //     sprite.Clear();
    //     this.bodies.splice(aKey, 1);
    //   }
    // }
  }

  GoSwitch(direction: String, y: number):void {
		if ( 'left' === direction ) {
			var currentShip: Ship = this.grid.GetElementInGrid(this.ships, 2, y);
			var middleShip: Ship = this.grid.GetElementInGrid(this.ships, 1, y);

			if (currentShip) {
				currentShip.GoSwitch( 1, y, 0 );
			}
			if (middleShip) {
				middleShip.GoSwitch( 2, y, 1 );
			}

      this.onSwitch = true;
		} else {
			var currentShip: Ship = this.grid.GetElementInGrid(this.ships, 0, y);
			var middleShip: Ship = this.grid.GetElementInGrid(this.ships, 1, y);

			if (currentShip) {
				currentShip.GoSwitch( 1, y, 1 );
			}
			if (middleShip) {
				middleShip.GoSwitch ( 0, y, 0 );
			}
      this.onSwitch = true;
		}
	}

  Clear():void {}
}
