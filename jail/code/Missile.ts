/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Missile extends Sprite {
  constructor(
		public image: any,
		public pos: any) {

		super(image, pos);
	}

	public Update(deltaTime: number):void {
    this.pos.y--;
		super.Update(deltaTime);
	}

	public Draw(context: any):void {
		super.Draw(context);
	}

	public Clear():void {

	}
}
