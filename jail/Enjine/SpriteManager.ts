/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class SpriteManager {
  public listSprite: any = [];
  constructor() {}

  public Update(deltaTime: number):void {
    for (var key in this.listSprite) {
      this.listSprite[key].Update(deltaTime);
    }
  }

  public Draw(context: any):void {
    for (var key in this.listSprite) {
      this.listSprite[key].Draw(context);
    }
  }

  /**
   * Ajoutes un sprites dans le tableau listSprite
   * @param {Sprite} sprite Le sprite a ajouter
   */
  Add(sprite: Sprite): void {
		if (sprite) {
	    this.listSprite.push(sprite);
		}
  }

  Remove(sprite: Sprite): void {
    for (var type in this.listSprite) {
      for (var i = 0; i < this.listSprite[type].length; i++) {
        if (this.listSprite[type][i] == sprite) {
          this.listSprite[type].splice(i, 1);
        }
      }
    }
  }

  Clear():void {

  }

  Resize():void {
    for (var i = 0; i < this.listSprite["body"].length; i++) {
        this.listSprite["body"][i].Resize();
    }
  }

  public GetByTag(tag: string):Array<Sprite> {
    var elements: Array<Sprite> = [];
    for(var key in this.listSprite) {
      if(this.listSprite[key].tag === tag) {
        elements.push(this.listSprite[key]);
      }
    }

    return elements;
  }
}
