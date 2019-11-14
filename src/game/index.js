import Phaser from 'phaser';

export default (parent) => {
  const game = new Phaser.Game({
    parent,
    scale: {
      mode: Phaser.Scale.ScaleModes.FIT,
      autoCenter: Phaser.Scale.Center.CENTER_BOTH
    },
    physics: { default: 'arcade' },
    scene: {
      preload() {
        this.load.setBaseURL('http://labs.phaser.io');

        this.load.image('logo', 'assets/sprites/phaser3-logo.png');
        this.load.image('red', 'assets/particles/red.png');
      },
      create() {
        const particles = this.add.particles('red');

        const emitter = particles.createEmitter({
          speed: 100,
          scale: { start: 1, end: 0 },
          blendMode: 'ADD'
        });

        const logo = this.physics.add.image(400, 100, 'logo');

        logo.setVelocity(100, 100);
        logo.setBounce(1, 1);
        logo.setCollideWorldBounds(true);

        emitter.startFollow(logo);
      }
    }
  });

  return game;
};
