/**
Créer par Jimmy Latour, 2017
http://jimmylatour.com
*/

class ParticleManager {
  private particles: Array<Particle> = [];
  constructor() {
	}

	public Update(deltaTime: number):void {
		for (var key in this.particles) {
			this.particles[key].Update(deltaTime);
		}
	}

	public Draw(context: any):void {
		for (var key in this.particles) {
			this.particles[key].Draw(context);
		}
	}

  public Add(missile: Particle):void {
		this.particles.push(missile);
  }

  public Remove(missile: Particle):void {

  }

	public Clear():void {

	}
}
