/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Scene {
	protected spriteManager: SpriteManager = new SpriteManager();
  /**
   * Ajoutes buttonExit dans spriteManager
   * @return {void} nothing
   */
  constructor() {}

  public Start():void {}

  public Update(delta: number):void {
		this.spriteManager.Update(delta);
	}

  public Draw(context: any):void {
		this.spriteManager.Draw(context);
	}

  public Clear():void {}

  public ChangeScene():void {}
}
