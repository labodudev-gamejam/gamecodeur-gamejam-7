/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Scene {
  /**
   * Ajoutes buttonExit dans spriteManager
   * @return {void} nothing
   */
  constructor() {
		global['spriteManager'] = new SpriteManager();
	}

  public Start():void {}

  public Update(delta: number):void {
		global['spriteManager'].Update(delta);
	}

  public Draw(context: any):void {
		global['spriteManager'].Draw(context);
	}

  public Clear():void {}

  public ChangeScene():void {}
}
