/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class MainScene extends Scene {
	private map: Map = undefined;
	private grid: Grid = undefined;
	constructor() {
		super();

		this.map = new Map(this.spriteManager);
		this.grid = new Grid();
	}

	public Start():void {
		super.Start();
	}

	public Update(deltaTime: number):void {
		super.Update(deltaTime);
	}

	public Draw(context: any):void {
		this.grid.Draw(context);

		super.Draw(context);
	}

	public Clear():void {
		super.Clear();
	}

	public ChangeScene():void {
		this.Clear();
	}
}
