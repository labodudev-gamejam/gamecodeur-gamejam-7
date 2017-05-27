/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class MainScene extends Scene {
	private player: Player = undefined;
	private ia: IA = undefined;
	constructor() {
		super();

		global['map'] = new Map();
		global['grid'] = new Grid();
		global['missileManager'] = new MissileManager();

		this.player = new Player();
		this.ia = new IA();
	}

	public Start():void {
		super.Start();
	}

	public Update(deltaTime: number):void {
		super.Update(deltaTime);

		this.player.Update(deltaTime);
		this.ia.Update(deltaTime);
		global['missileManager'].Update(deltaTime);
		global['map'].Update(deltaTime);
	}

	public Draw(context: any):void {
		global['grid'].Draw(context);

		super.Draw(context);

		global['missileManager'].Draw(context);
	}

	public Clear():void {
		super.Clear();
	}

	public ChangeScene():void {
		this.Clear();
	}
}
