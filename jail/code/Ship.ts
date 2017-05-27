/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Ship extends Sprite {
	public color: string = '';
  constructor(
		public image: any,
		public pos: any) {

		super(image, pos);
	}

	public Update(deltaTime: number):void {
		this.GridToCoordinate();
		super.Update(deltaTime);
	}

	public Draw(context: any):void {
		super.Draw(context);
	}

  public Shoot():void {
		let missile = new Missile(Data.Images.spriteSheet, {x: this.pos.x + this.offset.x, y: this.pos.y - this.offset.y + 10});
		missile.SetZone(Data.Object.element[this.color + 'Missile']);
		global['missileManager'].Add(missile);
  }

	public Clear():void {

	}
}
