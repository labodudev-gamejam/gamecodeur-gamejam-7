/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class SpawnManager {
  constructor() {
    this.Exec();
  }

	public Exec():void {
		setInterval(() => { this.Update(); }, 1000);
	}

	public Update():void {
	}

  Clear():void {}
}
