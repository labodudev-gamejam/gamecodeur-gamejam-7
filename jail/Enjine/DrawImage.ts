/**
Code par Jimmy Latour, 2016
http://labodudev.fr
*/

module Helper {
  export class DrawImage {
    static Draw(name: string, context: any): void {
			let x = 0;
			let y = 0;

			context.drawImage(Data.Images.spriteSheet,
	      Data.Object.ships[name].x,
	      Data.Object.ships[name].y,
	      Data.Object.ships[name].width,
	      Data.Object.ships[name].height,
				x,
				y,
	      Data.Object.ships[name].width,
	      Data.Object.ships[name].height);
    };
  }
}
