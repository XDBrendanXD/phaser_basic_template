export default class SceneThree extends Phaser.Scene {
  constructor() {
    //Scene reference name
    super('sceneThree');
  }

  create() {
<<<<<<< HEAD
    this.add.text(100, 100, 'yo');
=======
    this.add.text(100, 100, 'Hello from Ian');
>>>>>>> 0e7a01228c323dc8b968a9c329246faa815bfc6d
    console.log('Hello from Scene Three');
  }
}
