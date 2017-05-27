/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class Map {
	constructor() {
		this.Exec();
	}

	/**
	 * Lances le chargement de la map
	 */
	public Exec():void {
		for (var key in Data.Object.map) {
			let sprite = new Sprite(Data.Images.spriteSheet, {x: 0, y: 0});
			sprite.grid.x = Data.Object.map[key].x;
			sprite.grid.y = Data.Object.map[key].y;
			sprite.offset.x = (Data.Object.element[Data.Object.map[key].name].width / 2) - 10;
			sprite.offset.y = (Data.Object.element[Data.Object.map[key].name].height / 2) - 10;
			sprite.tag = 'asteroid';
			sprite.scale.x = 0.8;
			sprite.scale.y = 0.8;
			sprite.speedAngle = (Math.random() * 10) + 10;
			sprite.SetZone(Data.Object.element[Data.Object.map[key].name]);
			global['spriteManager'].Add(sprite);
		}
	}

	/**
	 * Met à jour les coordonées par rapport à la grille.
	 * @type {[type]}
	 */
	public Update(deltaTime: number):void {
		var elements: Array<Sprite> = global['spriteManager'].GetByTag('asteroid');
		for (var key in elements) {
			elements[key].GridToCoordinate();
		}
	}
}
