class Bootloader extends Phaser.Scene {
    constructor() {
        super({ key: 'Bootloader' });
    }

    preload(){
        this.load.on('complete', () => {
            this.scene.start('GameMain');
        })
        this.load.image('ball', './assets/bird.png');
        this.load.image('left_pallete', './assets/bird.png');
        this.load.image('right_pallete', './assets/bird.png');
        this.load.image('separator', './assets/bird.png');
        
    }

}

export default Bootloader;