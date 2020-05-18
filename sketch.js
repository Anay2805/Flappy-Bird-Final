var bird;
var pipes = [];
var score = -3;
var gameState = 1;
var backgroundImg;

localStorage["HighestScore"] = 0;


function preload(){
  backgroundImg = loadImage("background.png")
}

function setup() {
  createCanvas(displayWidth - 10, displayHeight - 160);
  pipes.push(new Pipe());
  bird = new Bird();
  reset = new Reset();
 
}

function draw() {
  background(backgroundImg);


 
    for (var i = pipes.length - 1; i >= 0; i--) {
      pipes[i].show();
    }
  


  bird.show();

 if(gameState == 1){
  for (var i = pipes.length - 1; i >= 0; i--) {
    pipes[i].update();



    if (pipes[i].hits(bird)) {
      console.log('HIT');
      gameState = 0;
      bird.y = windowHeight;
    }

    if (pipes[i].offscreen()) {
      pipes.splice(i, 1);
    }
  }

  bird.update();
  

  if (frameCount % 200 * (displayWidth-20)/400 == 0) {
    pipes.push(new Pipe());
  }

  if (frameCount % 200  == 70) {
    score++;
  }


  if(bird.y > windowHeight- 60){
    gameState = 0;
    bird.y = windowHeight- 60;
  }
}



if(score < 0){
fill(255, 255, 255);
textFont('Monaco');
textSize(20);
text("Score: 0", 1200, 50);
}

if(score > -1){
fill(255, 255, 255);
textFont('Consolas');
textSize(20);
text("Score: " + score, 1200, 50);
}


if(gameState == 0 || gameState == 1){
 fill(255);
 textFont('Consolas');
 textSize(20);
 text("High Score: " + localStorage["HighestScore"], 950, 50);
}

  if(gameState == 0){
    reset.show();

    if(score < 1){
      score = 0
    }

    if(localStorage["HighestScore"]<score){
      localStorage["HighestScore"] = score;
    }

    if (mouseIsPressed || touches.length > 0) {
      gameState = 1;
      bird = new Bird();
      pipes = [];
      score = -3;
      touches = [];
    }
  }

}

function keyPressed() {
  if (keyCode != undefined|| touches.length > 0 || mousePressed()) {
    bird.up();
    //console.log("SPACE");
    touches = [];
  }
}

function Reset() {
  this.y = height / 2;
  this.x = width/2;

  this.image = loadImage("reset.png")

  this.show = function() {
    
    fill(255);
    image(this.image, this.x, this.y, 130, 50);
 
  };

}