/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class MainScene extends Scene {
  constructor() {
    super();
  }

  public Start():void {
    super.Start();
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
    SceneManager.Manager.SetScene(new EndScene(SceneManager.Manager.currentScene.orderManager));
  }
}
