/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

module Data {
  export class Object {
    static bodies: any = undefined;
    static humanParts: any = undefined;
    static bodiesSpawn: any = undefined;
    static ordersSpawn: any = undefined;

    static Load(cb: () => void):void {
      Data.Object.LoadJSON(() => {
        cb();
      });
    }

    static LoadJSON(cb: () => void):void {
    }
  }
}
