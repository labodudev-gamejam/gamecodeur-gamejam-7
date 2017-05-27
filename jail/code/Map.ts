/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Map {
	constructor(public spriteManager: SpriteManager) {
		this.Exec();
	}

	/**
	 * Lances le chargement de la map
	 */
	public Exec():void {
		for (var key in Data.Object.map) {
			let sprite = new Sprite(Data.Images.spriteSheet, {x: Data.Object.map[key].x, y: Data.Object.map[key].y});
			sprite.SetZone(Data.Object.element[Data.Object.map[key].name]);
			this.spriteManager.Add(sprite);
		}
	}
}
