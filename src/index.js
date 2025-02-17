import PreloadScene from "./scenes/PreloadScene.js";
import IntroScene from "./scenes/IntroScene.js";
import Level1Scene from "./scenes/Level1Scene.js";
import MainScene from "./scenes/MainScene.js";

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    parent: 'game-container',
    scene: [MainScene, PreloadScene, IntroScene, Level1Scene],
    physics: {
        default: 'arcade',
        arcade: {
            debug: false
        }
    }
};

const game = new Phaser.Game(config);
