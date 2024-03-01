import { Phase } from './phase.js'
//segund nivel
export class Phase2 extends Phase {

  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup();

    this.bricks.create(400, 270, 'blackbrick');
    this.bricks.create(360, 225, 'blackbrick');
    this.bricks.create(440, 225, 'blackbrick');
    this.bricks.create(480, 180, 'blackbrick');
    this.bricks.create(400, 180, 'blackbrick');
    this.bricks.create(320, 180, 'blackbrick');
    this.bricks.create(280, 135, 'blackbrick');
    this.bricks.create(360, 135, 'blackbrick');
    this.bricks.create(440, 135, 'blackbrick');
    this.bricks.create(520, 135, 'blackbrick');
    this.bricks.create(330, 90, 'blackbrick');
    this.bricks.create(470, 90, 'blackbrick');

    this.configureColisions();
  }
}