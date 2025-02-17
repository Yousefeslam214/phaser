export default class PreloadScene extends Phaser.Scene {
    constructor() {
        super("PreloadScene");
    }

    preload() {
        this.loadAssets();
    }

    loadAssets() {
        const assets = {
            images: [
                { key: "splash", path: "assets/Splash Image.png" },
                { key: "Object", path: "assets/Object 05.png" },
                { key: "background", path: "assets/Background.png" },
                { key: "seed", path: "assets/Seed.png" },
                { key: "slot", path: "assets/Ground 1.png" },
                { key: "slot_2", path: "assets/Ground 2.png" },
                { key: "plant", path: "assets/Plant 1.png" },
                { key: "start", path: "assets/start.png" },
                { key: "Finish", path: "assets/Finish.png" },
                { key: "Ground4", path: "assets/Ground4.png" }
            ],
            audio: [
                { key: "success", path: "assets/Success.mp3" },
                { key: "error", path: "assets/Fail.wav" }
            ]
        };

        assets.images.forEach(image => this.load.image(image.key, image.path));
        assets.audio.forEach(sound => this.load.audio(sound.key, sound.path));
    }

    create() {
        this.scene.start("IntroScene");
    }
}
