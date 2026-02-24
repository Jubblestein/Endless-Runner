// Justin Fogo
// Rat Run!
// ~12 hours spent
// Audio: https://opengameart.org/content/funny-chase-8-bit-chiptune
//        https://opengameart.org/content/meowing-cat-made-in-labchirp
//        https://opengameart.org/content/mouse-imitation
// Font:  https://www.dafont.com/upheaval.font
// An endless runner w/ objects to dodge and collectibles
// Created: 2/19/26

'use strict'

// game configuration
const config = {
    parent: 'myGame',
    type: Phaser.AUTO,
    height: 560,
    width: 720,
    pixelArt: true,
    physics: {
        default: "arcade",
        arcade: {
            debug: true
        }
    },
    scene: [ Load, Title ],
};

// define game
let game = new Phaser.Game(config);

let w = game.config.width;
let h = game.config.height;
const textBorder = 64;

let timeScore;
let cheeseScore;
let keySPACE;
