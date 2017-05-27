/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Missile extends Sprite {
	private speed: number = 500;
  constructor(
		public image: any,
		public pos: any) {

		super(image, pos);
	}

	public Update(deltaTime: number):void {
		super.Update(deltaTime);

		this.pos.y -= this.speed * deltaTime;
	}

	public Draw(context: any):void {
		super.Draw(context);
	}

	public Clear():void {

	}
}
