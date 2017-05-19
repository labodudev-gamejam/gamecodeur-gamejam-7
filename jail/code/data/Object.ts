/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

module Data {
  export class Object {
    static ships: any = undefined;

    static Load(cb: () => void):void {
      Data.Object.LoadJSON(() => {
        cb();
      });
    }

    static LoadJSON(cb: () => void):void {
      Data.JSONLoader.Exec('jail/json/spritesheet.json', (data: Array<any>) => {
        Data.Object.ships = data;
        cb();
      });
    }
  }
}
