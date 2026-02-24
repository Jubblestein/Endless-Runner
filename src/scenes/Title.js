class Title extends Phaser.Scene {
    constructor () {
        super('titleScene')
    }

    create () {
        // create background
        this.sky = this.add.tileSprite(0, 0, 800, 560, 'sky').setOrigin(0).setAlpha(0.5)
        this.city = this.add.tileSprite(0, 0, 800, 560, 'city').setOrigin(0).setAlpha(0.5)
        this.railing = this.add.tileSprite(0, h-120, 800, 120, 'railing').setOrigin(0)

        // create title text
        this.add.rectangle(w/2, h/2, textBorder*5, textBorder*2, 0x000000).setOrigin(0.5)
        this.gameTitle = this.add.bitmapText(w/2, h/2, 'upheaval', 'RAT RUN!', 72).setOrigin(0.5)

        // play rat-title animation
        let ratTitle = this.add.sprite(w/2, h-(this.railing.height+80), 'rat').setOrigin(0.5, 0)
        ratTitle.anims.play('rat-title')

        // define space key
        keySPACE = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE)
    }
}