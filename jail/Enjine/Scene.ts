/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Scene {
  /**
   * Gestion des sprites
   * @type {SpriteManager}
   */
  public spriteManager: SpriteManager = new SpriteManager();

  public character: Character = undefined;

  public score: Score = undefined;

  /**
   * Ajoutes buttonExit dans spriteManager
   * @return {void} nothing
   */
  constructor() {}

  public Start():void {}

  public Update(delta: number):void {
    if (this.spriteManager) {
      this.spriteManager.Update(delta);
    }
  }

  public Draw(context: any):void {
    if (this.spriteManager) {
      this.spriteManager.Draw(context);
    }

    if (this.score) {
      this.score.Draw(context);
    }
  }

  public Clear():void {
    this.spriteManager.Clear();
    delete this.spriteManager;

  }

  public InitCharacter(triggerElement: any):void {}
  public RemoveCharacter():void {}
  public Delivery():void {}
  public ChangeScene():void {}
}
