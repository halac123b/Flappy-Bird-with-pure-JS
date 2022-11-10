var bird = function(game){
  this.game = game;
  this.image = [];
  this.img1Loaded = false;
  this.img2Loaded = false;
  this.img3Loaded = false;

  this.currentImage = null;
  this.currentImageIndex = 0;
  this.currentFrame = 0;

  this.x = 70;
  this.y = 0;
  this.speed = 0;
  this.acceleration = 1;

  var self = this;

  this.init = function(){
    this.loadImage();
  }

  this.loadImage = function(){
    var img1 = new Image();
    var img2 = new Image();
    var img3 = new Image();
    img1.onload = function(){
      self.img1Loaded = true;
      self.currentImage = img1;
      self.image.push(img1);
    }
    img2.onload = function(){
      self.img2Loaded = true;
      self.image.push(img2);
    }
    img3.onload = function(){
      self.img3Loaded = true;
      self.image.push(img3);
    }

    // Load all images
    img1.src = "../assets/sprites/bird_1.png";
    img2.src = "../assets/sprites/bird_2.png";
    img3.src = "../assets/sprites/bird_3.png";
  }

  this.update = function(){
    self.currentFrame++;
    if (self.currentFrame == 30){
      self.currentFrame = 0;
    }
    if (self.currentFrame % 5 == 0){
      self.changeImage();
    }

    if (self.y <= 480){
      self.speed += self.acceleration;
      self.y += self.speed;
    }
    if(self.y >= 400){
      self.game.gameOver = true;
    }
    this.checkHitPipe();
  }

  this.draw = function(){
    if (!self.img1Loaded || !self.img2Loaded || !self.img3Loaded){
      return;
    }
      self.game.context.drawImage(self.currentImage, this.x, self.y);
  }

  this.changeImage = function(){
    if (self.currentImageIndex == 2){
      self.currentImageIndex = 0;
    }
    else{
      self.currentImageIndex++;
    }
    self.currentImage = self.image[self.currentImageIndex]
  }

  this.fly = function(){
    self.speed = -15;
  }

  this.checkHitPipe = function(){
    if(
      (
        this.x + 34 > this.game.pipe.x &&
        this.x < this.game.pipe.x + 52
      ) &&
      (
        this.y < this.game.pipe.y - 102 ||
        this.y + 20 > this.game.pipe.y
      )
    )
    this.game.gameOver = true;
  }
}