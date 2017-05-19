/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

module Data {
  export class Images {
    static spriteSheet: HTMLImageElement = new Image();
    static buttons: any = [];
    static backgrounds: any = [];
    static staticImages: any = [];

    static Load(cb: () => void):void {
      this.LoadSpriteSheet(() => {
        Data.Images.LoadButton(() => {
          Data.Images.LoadBackground(() => {
            Data.Images.LoadStaticElement(() => {
              cb();
            });
          });
        });
      });
    }

    static LoadSpriteSheet(cb: () => void):void {
      Data.Images.spriteSheet.src = 'jail/images/vaisseau.png';
      cb();
    }

    static LoadButton(cb: () => void):void {
      cb();
    }

    static LoadBackground(cb: () => void):void {
      cb();
    }

    static LoadStaticElement(cb: () => void):void {
      cb();
    }
  }
}
