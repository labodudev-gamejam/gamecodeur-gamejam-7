/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class MissileManager {
  private missiles: Array<Missile> = [];
  constructor() {
	}

	public Update(deltaTime: number):void {
		for (var key in this.missiles) {
			this.missiles[key].Update(deltaTime);
		}
	}

	public Draw(context: any):void {
		for (var key in this.missiles) {
			this.missiles[key].Draw(context);
		}
	}

  public Add(missile: Missile):void {
		this.missiles.push(missile);
  }

  public Remove(missile: Missile):void {

  }

	public Clear():void {

	}
}
