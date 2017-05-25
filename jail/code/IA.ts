/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class IA {
	private startTimeShoot: number = 0;
	private canShoot: boolean = true;
	private onSwitch: boolean = false;

  constructor(public grid: Grid, public shipManager: ShipManager) {

	}

	public Update(deltaTime: number):void {
		if ( new Date().getTime() - this.startTimeShoot > 1500 ) {
			this.canShoot = true;
		}

		if ( this.canShoot && !this.onSwitch && this.HasTarget() ) {
			var ships = this.shipManager.GetShipByAngle( 180 );
			for ( var key in ships ) {
				ships[key].AddMissile( new Ball( {x: ships[key].x + 45, y: ships[key].y + 80}, ships[key].color, 'down', this.grid, ships[key] ) );
			}

			this.startTimeShoot = new Date().getTime();
			this.canShoot = false;
		}
	}

	public HasTarget():boolean {
		var ships = this.shipManager.GetShipByAngle( 180 );
		for ( var key in ships ) {
			if ( ships[key].SearchTarget() ) {
				return true;
			}
		}
	}

  Clear():void {}
}
