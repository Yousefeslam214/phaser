export default class MainScene extends Phaser.Scene {
    constructor() {
        super("MainScene");
    }

    preload() {
        this.setupBackground();
        this.load.image("loading", "assets/loading.png");
    }

    create() {
        this.showLoadingScreen();
        this.scene.launch("PreloadScene");
    }

    setupBackground() {
        this.cameras.main.setBackgroundColor("#f5f5f5");
    }

    showLoadingScreen() {
        this.add.image(this.scale.width / 2, this.scale.height / 2, "loading")
            .setOrigin(0.5)
            .setScale(0.15);
    }
}
