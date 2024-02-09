class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    
    preload() {

        this.load.image('player', 'assets/bird.png');
    }
        
    create() {
        this.player = this.physics.add.sprite(100, 150, 'player');
        this.cursors = this.input.keyboard.createCursorKeys();
    }
    
    update() {
        this.player.setVelocity(0);
        let moveX = 0;
        let moveY = 0;
        if (this.input.gamepad.total) {
            const gamepad = this.input.gamepad.gamepads[0];
            const xAxis = gamepad.axes[0].getValue();
            const yAxis = gamepad.axes[1].getValue();
            moveX = xAxis;
            moveY = yAxis;
        }
        if (moveX === 0 && moveY === 0) {
            if (this.cursors.left.isDown) {
                moveX = -1;
            } else if (this.cursors.right.isDown) {
                moveX = 1;
            }
    
            if (this.cursors.up.isDown) {
                moveY = -1;
            } else if (this.cursors.down.isDown) {
                moveY = 1;
            }
        }
        this.player.setVelocityX(moveX * 160);
        this.player.setVelocityY(moveY * 160);
    }
}
