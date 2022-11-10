var base = function(game){
  this.game = game;
  this.image = null;
  this.loaded = false;

  this.x = 0;

  var self = this;

  this.init = function(){
    this.loadImage(); 
  }

  this.loadImage = function(){
    this.image = new Image();
    this.image.onload = function(){
      self.loaded = true;
    }
    this.image.src = "../assets/sprites/base.png";
  }
  
  this.update = function(){
    this.x -= 2;
    if (this.x == -336){
      this.x = 0;
    }
  }

  this.draw = function(){
    if (this.loaded == false){
      return;
    }
    this.game.context.drawImage(this.image, this.x, this.game.height - 112);
    this.game.context.drawImage(this.image, this.x + 336, this.game.height - 112);
  }
}