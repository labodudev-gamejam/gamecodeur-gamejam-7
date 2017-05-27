/**
Créer par Jimmy Latour, 2016
http://labodudev.fr
*/

class Sprite {
	public offset: any = {x: 0, y: 0};
	public scale: any = {x: 1.0, y: 1.0};
	public angle: number = 0;
	public zone: any = {x: 0, y: 0, w: 0, h: 0};

	constructor(public image: any,
							public pos: any) {
  }

  public Update(deltaTime: number):void {}

  public Draw(context: any):void {
		if (this.zone) {
			this.DrawSpriteSheet(context);
		}
  }

  public DrawSpriteSheet(context: any):void {
		context.save();
    context.translate(this.pos.x, this.pos.y);
    context.rotate(this.angle*Math.PI/180);

    context.drawImage(
      this.image,
      this.zone.x,
      this.zone.y,
      this.zone.width,
      this.zone.height,
      -(this.zone.width / 2),
      -(this.zone.height / 2),
      this.zone.width,
      this.zone.height
    );

    context.restore();
  }

  public Clear():void {
    delete this.offset;
  }

  public SetPos(pos: any):void {
    this.pos = pos;
  }

  public SetZone(zone: any):void {
    this.zone = zone;
  }

  public SetOffset(offset:any):void {
    this.offset = offset;
  }
}
