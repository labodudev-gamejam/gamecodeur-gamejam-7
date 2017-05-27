/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

module Data {
  export class Object {
    static element: any = undefined;
    static map: any = undefined;

    static Load(cb: () => void):void {
      Data.Object.LoadJSON(() => {
        cb();
      });
    }

		static LoadJSON(cb: () => void):void {
      Data.JSONLoader.Exec('jail/json/spritesheet.json', (data: Array<any>) => {
        Data.Object.element = data;
				Data.JSONLoader.Exec('jail/json/map.json', (data: Array<any>) => {
	        Data.Object.map = data;
					cb();
	      });
      });

    }
  }
}
