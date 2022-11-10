var game = function(){
  this.canvas = null;
  this.context = null;
  this.width = 288;
  this.height = 512;

  this.bird = null;
  this.background = null;
  this.base = null;
  this.pipe = null;

  this.gameOver = false;

  var self = this;
  
  this.init = function(){
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    document.body.appendChild(this.canvas);

    // Create new bird
    this.bird = new bird(this);
    this.bird.init();
    // Create background
    this.background = new background(this);
    this.background.init();
    // Create base
    this.base = new base(this);
    this.base.init();
    // // Create pipes
    this.pipe = new pipe(this);
    this.pipe.init();

    // Listen mouse event
    this.listenMouse();

    this.loop();
  }

  this.loop = function(){
    self.update();
    self.draw();
    setTimeout(self.loop, 33);
  }

  this.update = function(){
    if (self.gameOver == true){
      return;
    }
    this.bird.update();
    this.base.update();
    this.background.update();
    this.pipe.update();
  }
  
  this.draw = function(){
    if (self.gameOver == true){
      return;
    }
    this.background.draw();
    this.pipe.draw();
    this.base.draw();
    this.bird.draw();
  }
    
  this.listenMouse = function(){
    self.canvas.addEventListener("click", 
                                function(){ self.bird.fly() });
  }
}

var g = new game();
g.init();