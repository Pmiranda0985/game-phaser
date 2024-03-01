//Esta es la clase base de nuetros niveles, 
//1º importamos las clases de los niveles
import { Phase1 } from './phase1.js'
import { Phase2 } from './phase2.js'
import { Phase3 } from './phase3.js'
import { Phase4 } from './phase4.js'
import { Phase5 } from './phase5.js'
import { Phase6 } from './phase6.js'
//y este el último, >>>>es util saber que podemos cambiarlos aquí direcctamente para verlos sin tener que pasarnos el juego entero<<<<
//aquí ponemos el orden de los niveles
export class PhaseConstructor {
  constructor(scene) {
    this.relatedScene = scene;
    this.phases = [
      Phase6,
      Phase5,
      Phase4,
      Phase3,
      Phase2,
      Phase1,
    ];
  }
  //npx es-dev-server --node-resolve –watch (PARA INICIAR EL SERVER)
  create() {
    let CurrenPhaseClass = this.phases.pop();
    this.currentPhase = new CurrenPhaseClass(this.relatedScene);
    return this.currentPhase.create();
  }
//aqui pasamos de nivel
  nextLevel() {
    this.currentPhase.deleteFixedBricks();
    if(this.phases.length == 0) {
      this.relatedScene.endGame(true);
    } else {
      return this.create();
    }
  }
// y esto es para cuando terminamos todos los niveles, termine el juego
  isPhaseFinished() {
    return this.currentPhase.isPhaseFinished();
  }
}