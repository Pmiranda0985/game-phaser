import { Phase } from './phase.js'
//este es el 1º nivel
export class Phase1 extends Phase {
  //aquí lo creamos como queremos que estén situados los bloques y que bloques queremos
  create() {
    this.bricks = this.relatedScene.physics.add.staticGroup({
      key: ['bluebrick', 'orangebrick', 'greenbrick', 'blackbrick'],
      frameQuantity: 10,
      gridAlign: { 
        width: 10, 
        height: 4, 
        cellWidth: 67, 
        cellHeight: 34, 
        x: 112, 
        y: 100
      }
    });
    this.configureColisions();
  }
}