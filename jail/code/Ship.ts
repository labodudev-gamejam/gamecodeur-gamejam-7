/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Ship extends Sprite {
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
    console.log('shoot');
  }

	public Clear():void {

	}
}
