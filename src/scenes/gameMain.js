import Palas from "../gameObjects/pallete.js";

class GameMain extends Phaser.Scene {
    constructor() {
        super({ key: 'GameMain' });
    }

    preload() {
        this.load.image('player', '../assets/bird.png');
    }

    create() {
        this.setupGameObjects();
        this.setupControls();
    }

    update() {
        this.resetBall();
        this.controllerRightPallete();
        this.controllerLeftPallete();
    }

    setupGameObjects() {
        let center_width = this.sys.game.config.width;
        let center_height = this.sys.game.config.height / 2;

        this.leftPallete = new Palas(this, 50, center_height, 'left_pallete');
        this.rightPallete = new Palas(this, center_width - 50, center_height, 'right_pallete');
        this.rightPallete.flipX = true;

        this.physics.world.setBoundsCollision(false, false, true, true);

        this.ball = this.physics.add.image(center_width / 2, center_height, 'ball');
        this.ball.setCollideWorldBounds(true);
        this.ball.setBounce(1);
        this.ball.setVelocityX(-180);

        this.physics.add.collider(this.ball, this.leftPallete, this.colliderPallete, null, this);
        this.physics.add.collider(this.ball, this.rightPallete, this.colliderPallete, null, this);
    }

    setupControls() {
        this.cursors = this.input.keyboard.createCursorKeys();
        this.cursor_W = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W);
        this.cursor_S = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S);
    }

    controllerRightPallete() {
        this.rightPallete.body.setVelocity(0);
        let moveUp = 0;
        let moveDown = 0;

        if (this.input.gamepad.total) {
            const gamepad = this.input.gamepad.gamepads[0];
            const yAxis = gamepad.axes[1].getValue();
            moveUp = yAxis;
        }

        if (this.cursors.up.isDown) {
            moveUp = -1;
        } else if (this.cursors.down.isDown) {
            moveDown = 1;
        }

        this.rightPallete.body.setVelocityY(moveUp * 160 + moveDown * 160);
    }

    controllerLeftPallete() {
        this.leftPallete.body.setVelocity(0);
        let moveUp = 0;
        let moveDown = 0;

        if (this.input.gamepad.total) {
            const gamepad = this.input.gamepad.gamepads[1];
            const yAxis = gamepad.axes[1].getValue();
            moveUp = yAxis;
        }

        if (this.cursor_W.isDown) {
            moveUp = -1;
        } else if (this.cursor_S.isDown) {
            moveDown = 1;
        }

        this.leftPallete.body.setVelocityY(moveUp * 160 + moveDown * 160);
    }

    resetBall() {
        if (this.ball.x < 0 || this.ball.x > this.sys.game.config.width) {
            this.ball.setPosition(this.sys.game.config.width / 2, this.sys.game.config.height / 2);
        }
    }

    colliderPallete() {
        this.ball.setVelocityY(Phaser.Math.Between(-120, 120));
    }
}

export default GameMain;
