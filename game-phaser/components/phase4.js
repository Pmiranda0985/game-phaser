import { Phase } from './phase.js'

export class Phase4 extends Phase {
//cuaro nivel
  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup({
      key: ['bluebrick', 'greenbrick', 'orangebrick','blackbrick','whitebrick','yellowbrick'],
      frameQuantity: 5,
      gridAlign: {
        width: 10,
        height: 4,
        cellWidth: 67,
        cellHeight: 60,
        x: 95,
        y: 100
      }
    });

    this.configureColisions();

  }
}