export default class Level1Scene extends Phaser.Scene {
  constructor() {
    super("Level1Scene");
    this.slots = [];
    this.seeds = [];
    this.originalPositions = new Map();
    this.placedSeeds = 0;
  }

  create() {
    this.createBackground();
    this.createSlots();
    this.createSeeds();
    this.createDraggableObject();
    this.enableDragging();
  }

  createBackground() {
    this.add.image(400, 300, "background");
  }

  createSlots() {
    const slotPositions = [{ x: 400, y: 50 }, { x: 400, y: 300 }, { x: 400, y: 550 }];
    slotPositions.forEach(pos => {
      const slot = this.add.image(pos.x, pos.y, "slot").setScale(0.5);
      this.slots.push(slot);
    });
  }

  createSeeds() {
    const seedPositions = [{ x: 100, y: 50 }, { x: 100, y: 300 }, { x: 100, y: 550 }];
    seedPositions.forEach(pos => {
      const seed = this.add.image(pos.x, pos.y, "seed").setScale(0.05).setInteractive();
      this.seeds.push(seed);
      this.originalPositions.set(seed, { x: seed.x, y: seed.y });
    });
  }

  createDraggableObject() {
    this.draggableObject = this.add.image(700, 285, "Object").setScale(0.05).setInteractive();
    this.originalPositions.set(this.draggableObject, { x: this.draggableObject.x, y: this.draggableObject.y });
  }

  enableDragging() {
    const draggableItems = [...this.seeds, this.draggableObject];

    draggableItems.forEach(obj => this.input.setDraggable(obj));

    this.input.on("drag", (pointer, gameObject, dragX, dragY) => {
      gameObject.x = dragX;
      gameObject.y = dragY;
    });

    this.input.on("dragend", (pointer, gameObject) => this.handleDragEnd(gameObject));
  }

  handleDragEnd(gameObject) {
    let placed = false;

    this.slots.forEach(slot => {
      if (Phaser.Math.Distance.Between(gameObject.x, gameObject.y, slot.x, slot.y) < 50) {
        if (this.seeds.includes(gameObject)) {
          gameObject.destroy();
          slot.setTexture("slot_2");
          this.sound.play("success");
          this.placedSeeds++;

          if (this.placedSeeds === this.seeds.length) {
            this.winGame();
          }
        } else {
          this.showWarning(gameObject);
        }
        placed = true;
      }
    });

    if (!placed) {
      this.resetPosition(gameObject);
    }
  }

  resetPosition(gameObject) {
    const originalPos = this.originalPositions.get(gameObject);
    gameObject.x = originalPos.x;
    gameObject.y = originalPos.y;
    this.sound.play("error");
  }

  showWarning(gameObject) {
    alert("Warning! Only seeds can be placed here.");
    this.resetPosition(gameObject);
  }

  winGame() {
    this.add.text(300, 250, "You Win!", { fontSize: "48px", fill: "#ffffff" });
    this.add.image(400, 300, "Finish").setScale(0.15);

    this.time.delayedCall(2000, () => this.scene.start("IntroScene"));
  }
}
