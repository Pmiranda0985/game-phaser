export class Phase {
  constructor(scene) {
    this.relatedScene = scene;
  }
//este método es para configurar la colisión con los bloques que queremos que se vayan quitando
  configureColisions() {
    this.relatedScene.physics.add.collider(this.relatedScene.ball, this.bricks, this.relatedScene.brickImpact, null, this.relatedScene);
  }
//y este es para lo mismo del anterior pero para cuando queremos poner bloques fijos para aumentar la dificultad.
  configureColisionsFixed() {
    this.relatedScene.physics.add.collider(this.relatedScene.ball, this.fixedBricks, this.relatedScene.fixedBrickImpact, null, this.relatedScene);
  }

  deleteFixedBricks() {
    if(this.fixedBricks) {
      this.fixedBricks.getChildren().forEach(item => {
        item.disableBody(true, true);
      })
    }
  }

  isPhaseFinished() {
    return (this.bricks.countActive() === 0)
  }
}