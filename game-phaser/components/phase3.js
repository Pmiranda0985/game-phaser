import { Phase } from './phase.js'
//tercer nivel
export class Phase3 extends Phase {

  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup();

  
    this.bricks.create(110, 270, 'orangebrick');
    this.bricks.create(170, 225, 'bluebrick');
    this.bricks.create(230, 180, 'yellowbrick');
    this.bricks.create(290, 135, 'blackbrick');
    this.bricks.create(350, 90, 'greenbrick');

    this.bricks.create(680, 270, 'orangebrick');
    this.bricks.create(620, 225, 'bluebrick');
    this.bricks.create(560, 180, 'yellowbrick');
    this.bricks.create(500, 135, 'blackbrick');
    this.bricks.create(440, 90, 'greenbrick');

    //Aquí yo añadí un bloque fijo para fastidiar un poco, al ponerlo lo creamos igual que los anteriores pero con fixedbricks, y tenemos que poner
    this.fixedBricks = this.relatedScene.physics.add.staticGroup();
    this.fixedBricks.create(395,40, 'greybrick');


    this.configureColisions();
    this.configureColisionsFixed();// este comando para que lo añada y cuente la colision cmo fixed paras que no se quite como los demas.

  }
}