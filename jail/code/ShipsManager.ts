/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class ShipsManager {
  ships: Array<Ship> = [];
  onSwitch: boolean = false;
  constructor(public grid: Grid) {}

  public Update(deltaTime: number):void {
    for (var key in this.ships) {
      this.ships[key].Update();
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

  GoSwitch( direction: String ):void {
		if ( 'left' === direction ) {
			var currentShip: Ship = this.grid.GetElementInGrid(this.ships, 2);
			var middleShip: Ship = this.grid.GetElementInGrid(this.ships, 1);

			if (currentShip) {
				currentShip.GoSwitch( 1, 0 );
			}
			if (middleShip) {
				middleShip.GoSwitch( 2, 1 );
			}

      this.onSwitch = true;
		} else {
			var currentShip: Ship = this.grid.GetElementInGrid(this.ships, 0);
			var middleShip: Ship = this.grid.GetElementInGrid(this.ships, 1);

			if (currentShip) {
				currentShip.GoSwitch( 1, 1 );
			}
			if (middleShip) {
				middleShip.GoSwitch ( 0, 0 );
			}
      this.onSwitch = true;
		}
	}

  Clear():void {}
}
