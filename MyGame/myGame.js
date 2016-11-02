/*global Phaser*/


var game = new Phaser.Game(800, 600, Phaser.AUTO, '');
var game_state = {}


game_state.main = function() {};
game_state.main.prototype = {


    preload: function() {
        game.load.image('sky', 'assets/sky.png');
        game.load.image('ground','assets/platform.png');
        game.load.image('star','assets/star.png');
        game.load.spritesheet('dude','assets/dude.png', 32, 48);

    },


    create: function() {
        game.add.sprite(0,0,'sky');
        game.add.sprite(0,0,'star');
        
        this.platforms = game.add.group();
        this.platforms.enableBody = true;
        
        var ground = this.platforms.create(0,game.world.height - 64,'ground');
        ground.scale.setTo(2,2);
        ground.body.immovable = true;
        
        var ledge = this.platforms.create(1,370,'ground');
        ledge.body.immovable = true;
         var ledge = this.platforms.create(300,200,'ground');
        ledge.body.immovable = true;
        
        this.player = game.add.sprite(32,game.world.height - 150,'dude');
        game.physics.arcade.enable(this.player);
        
        this.player.body.bounce.y = BOUNCE-Value;
        this.player.body.gravity.y = GRAVITY-Value;
        this.player.body.collideWorldBounds = true;
        this.player.animations.add('left',[0,1,2,3],10,true);
        this.player.animations.add('right',[5,6,7,8],10,true);
        game.physics.arcade.collide(this.player, this.platforms)
        this.cursors


    },


    update: function() {


    },


}
game.state.add('main', game_state.main);
game.state.start('main');
