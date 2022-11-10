var pipe = function(game){
  this.game = game;
  this.image = null;
  this.loaded = false;

  this.x = 300;
  this.y = 320;

  var self = this;

  this.init = function(){
    this.loadImage(); 
  }

  this.loadImage = function(){
    this.image = new Image();
    this.image.onload = function(){
      self.loaded = true;
    }
    this.image.src = "../assets/sprites/pipe-green.png";
  }
  
  this.update = function(){
    this.x -= 2;
    if (this.x == -54){
      this.x = 300;
      this.y = Math.floor(200 + (Math.random()) * 200);
    }
  }

  this.draw = function(){
    if (this.loaded == false){
      return;
    }
    this.game.context.drawImage(this.image, this.x, this.y - 100 - 320);
    this.game.context.drawImage(this.image, this.x, this.y);
  }
}