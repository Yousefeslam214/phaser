export default class IntroScene extends Phaser.Scene {
    constructor() {
        super("IntroScene");
    }

    create() {
        this.setupScene();
        this.createStartButton();
        this.setupInputHandler();
    }

    setupScene() {
        this.scene.stop("MainScene"); // Stop MainScene when IntroScene starts
        this.cameras.main.setBackgroundColor("#f5f5f5");

        this.add.image(400, 300, "splash").setOrigin(0.6).setScale(0.15);
    }

    createStartButton() {
        this.startButton = this.add.image(400, 500, "start").setOrigin(0.5).setScale(0.25);
        this.startButton.setInteractive();

        this.startButton.on("pointerover", () => this.startButton.setScale(0.2));
        this.startButton.on("pointerout", () => this.startButton.setScale(0.25));
    }

    setupInputHandler() {
        this.startButton.on("pointerdown", () => this.scene.start("Level1Scene"));
    }
}
