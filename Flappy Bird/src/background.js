var background = function(game){
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
    this.image.src = "../assets/sprites/background-day.png";
  }
  
  this.update = function(){
    this.x--;
    if (this.x == -288){
      this.x = 0;
    }
  }

  this.draw = function(){
    if (this.loaded == false){
      return;
    }
    this.game.context.drawImage(this.image, this.x, 0);
    this.game.context.drawImage(this.image, this.x + 288, 0);
  }
}