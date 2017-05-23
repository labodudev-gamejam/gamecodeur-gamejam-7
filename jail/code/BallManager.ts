/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class BallManager {
  balls: Array<Ball> = [];
  constructor() {}

  public Update(deltaTime: number):void {
		for (var key in this.balls) {
			this.balls[key].Update(deltaTime);
		}
  }

  public Draw(context: any):void {
		for (var key in this.balls) {
			this.balls[key].Draw(context);
		}
  }

  /**
   * Ajoutes un sprites dans le tableau listSprite
   * @param {Sprite} sprite Le sprite a ajouter
   */
  Add(ball: Ball): void {
		if (ball) {
	    this.balls.push(ball);
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

  Clear():void {}
}
