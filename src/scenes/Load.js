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
    }
}