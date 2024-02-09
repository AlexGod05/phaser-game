class MenuMain extends Phaser.Scene {
    constructor() {
        super({ key: 'MenuMain', active: true });
    }

    create() {
        // Fondo del menú
        this.add.rectangle(0, 0, this.sys.game.config.width, this.sys.game.config.height, 0x000000, 0.5).setOrigin(0);

        // Texto del título
        this.add.text(this.sys.game.config.width / 2, 100, 'Mi Juego', {
            fontFamily: 'Arial',
            fontSize: 48,
            color: '#ffffff'
        }).setOrigin(0.5);

        // Botón para iniciar el juego
        const startButton = this.add.text(this.sys.game.config.width / 2, 200, 'Iniciar Juego', {
            fontFamily: 'Arial',
            fontSize: 24,
            color: '#ffffff',
            backgroundColor: '#000000',
            padding: {
                x: 10,
                y: 5
            }
        }).setOrigin(0.5).setInteractive();

        // Cambiar a la escena de juego cuando se haga clic en el botón
        startButton.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
    
}