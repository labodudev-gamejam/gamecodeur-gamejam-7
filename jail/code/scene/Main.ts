/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class MainScene extends Scene {
  constructor() {
    super();

    this.Start();
  }

  public Start():void {
    super.Start();

    let sprite: Sprite = new Sprite(
      Data.Images.spriteSheet,
      "ships",
      "ships",
      {
        x: 0,
        y: 0
      }
    );

    this.spriteManager.Add(sprite);
  }

  public Update(deltaTime: number):void {
    super.Update(deltaTime);
  }

  public Draw(context: any):void {

    super.Draw(context);
  }

	public Clear():void {
    super.Clear();
	}

  public ChangeScene():void {
    this.Clear();
  }
}
