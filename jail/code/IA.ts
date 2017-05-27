/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class IA {
	private startTimeShoot: number = 0;
	private canShoot: boolean = true;
	private onSwitch: boolean = false;
	private goSwitch: boolean = false;
	private goSwitchTo: any = { x1: 0, x2: 0 };

  constructor(public grid: Grid, public shipManager: ShipManager) {
	}

	public Update(deltaTime: number):void {
		var hasTarget = this.HasTarget();
		if ( !hasTarget && !this.goSwitch) {
			this.LookForSwitch();
		}
		if (!hasTarget && this.goSwitch) {
			var currentShip: Ship = this.grid.GetElementInGrid(undefined, this.goSwitchTo.x1, 0);
			var middleShip: Ship = this.grid.GetElementInGrid(undefined, this.goSwitchTo.x2, 0);

			if (currentShip) {
				currentShip.GoSwitch( this.goSwitchTo.x2, 0, 0, () => {
					this.onSwitch = false;
				} );
			}
			if (middleShip) {
				middleShip.GoSwitch( this.goSwitchTo.x1, 0, 1, () => {
					this.onSwitch = false;
				} );
			}

      this.onSwitch = true;
		}

		if ( new Date().getTime() - this.startTimeShoot > 1500 ) {
			this.canShoot = true;
		}

		if (this.canShoot && !this.onSwitch && hasTarget) {
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

	/**
	 * Si l'IA n'a pas de cible, cherches pour le vaisseau du milieu, un élement à sa gauche ou droite qui correspondent à sa couleur.
	 */
	public LookForSwitch():void {
		this.goSwitch = false
		var ships = this.shipManager.GetShipByAngle( 180 );
		var tmpX: number = 0;

		for (var key in ships) {
			tmpX = ships[key].grid.x + 1;

			if (tmpX > 2) {
				tmpX = 0;
			}

			for (var y = 1; y < (global['height'] / 80) + 1; y++) {
				var element = this.grid.GetElementInGrid(undefined, tmpX, y);

				if ( element && element.color == ships[key].color ) {
					var direction = tmpX == 0 ? 'left': 'right';
					this.goSwitchTo.x1 = ships[key].grid.x;
					this.goSwitchTo.x2 = tmpX;
					this.goSwitch = true
					break;
				}
			}
		}
	}

  Clear():void {}
}
