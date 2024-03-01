import { RestartButton } from "../components/restart-button.js";
//ESTA CLASE EN TOTAL ES PARA LA ESCENA DE GAMEOVER AL GANAR, LA IMAGEN QUE SALE, EL BOTON DE RESETEAR
export class Gameover extends Phaser.Scene {
  constructor() {
    super({ key: 'gameover' });
    this.restartButton = new RestartButton(this);
  }

  //aqui cargamos la imagen
  preload() {
    this.load.image('gameover', 'images/gameover.png');
    this.restartButton.preload();
  }
  // y aquí se crea para que se vea por pantalla
  create() {
    this.add.image(410, 250, 'background');
    this.restartButton.create();
    this.gameoverImage = this.add.image(400, 90, 'gameover');
  }
}