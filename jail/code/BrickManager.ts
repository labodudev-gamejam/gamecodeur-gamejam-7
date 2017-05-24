/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class BrickManager {
  bricks: Array<Brick> = [];
  constructor(public grid: Grid) {}

	public Update(deltaTime: number):void {

	}

	public Draw(context: any):void {
		for (var key in this.bricks) {
			this.bricks[key].Draw(context);
		}
	}

  /**
   * Ajoutes un sprites dans le tableau listSprite
   * @param {Sprite} sprite Le sprite a ajouter
   */
  Add(sprite: Brick): void {
		if (sprite) {
			this.bricks.push(sprite);
		}
  }

  Remove(ship: Brick): void {
    for (var key in this.bricks) {
      if (this.bricks[key] == ship) {
        let aKey: any = key;
        ship.Clear();
        this.bricks.splice(aKey, 1);
      }
    }
  }

  Clear():void {}
}
