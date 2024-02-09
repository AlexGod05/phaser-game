const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    backgroundColor: '#252525',
    scene: [MenuMain, GameScene],
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
    input: {
        gamepad: true
    },
};

const game = new Phaser.Game(config);