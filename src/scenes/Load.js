class Load extends Phaser.Scene {
    constructor () {
        super('loadScene')
    }

    preload () {
        this.load.path = './assets/sprites/'
        // load graphics
        this.load.image('railing', 'Railing.png')
        this.load.image('city', 'city-background.png')
        this.load.image('sky', 'night-sky.png')
        this.load.image('obstacle', 'mouse-trap.png')
        this.load.image('cheese', 'cheese.png')

        // load spritesheet
        this.load.spritesheet('rat', 'Rat.png', {
            frameWidth: 80,
            frameHeight: 80
        })

        this.load.path = './assets/audio/'
        // load audio
        this.load.audio('chase', 'funny-chase.wav') // bgm
        this.load.audio('meow', 'meowing-cat.mp3')
        this.load.audio('squeak', 'mouse-squeak.wav')

        this.load.path = './assets/fonts/'
        // load font
        this.load.bitmapFont('upheaval', 'Upheaval.png', 'Upheaval.xml')
    }

    create () {
        // create rat-title animation
        this.anims.create({
            key: 'rat-title',
            frameRate: 4,
            repeat: -1,
            frames: this.anims.generateFrameNumbers('rat', { start: 0, end: 1 }),
        })
        
        // start title screen
        this.scene.start('titleScene')
    }
}