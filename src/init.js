import Bootloader from './bootloader.js';
import GameMain from "./scenes/gameMain.js";

const config = {
    type: Phaser.AUTO,
    width: 600,
    height: 400,
    parent: 'container',
    backgroundColor: '#252525',
    scene: [Bootloader, GameMain],
    physics: {
        default: 'arcade',
    },
    input: {
        gamepad: true
    },
};

const game = new Phaser.Game(config);