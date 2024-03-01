export class LiveCounter {
  //TODO ESTO TRATA DE LAS VIDAS DEL JUEGO Y LOS MÉTODOS DE COMO SE PIERDEN, LAS IMAGENES Y COMO SE RESEA EL JUEGO AL PERDER CADA VIDA
  constructor(scene, initialLives) {
    this.relatedScene = scene;
    this.initialLives = initialLives;
  }
//aquí creamos las vidas
  create() {
    let displacement = 60;
    let firstPosition = 800 - ((this.initialLives - 1) * displacement);
    this.liveImages = this.relatedScene.physics.add.staticGroup({
      setScale: { x: 0.5, y: 0.5 },
      key: 'heart',
      frameQuantity: this.initialLives-1,
      gridAlign: {
        width: this.initialLives - 1,
        height: 1,
        cellWidth: displacement,
        cellHeight: 30,
        x: firstPosition,
        y: 10
      }
    });
  }
//y aquí las perdemos
  liveLost() {
    if (this.liveImages.countActive() == 0) {
      this.relatedScene.endGame();
      return true;
    }
    let currentLiveLost = this.liveImages.getFirstAlive();
    currentLiveLost.disableBody(true, true);
    return false;
  }
}