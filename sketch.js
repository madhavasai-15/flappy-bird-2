var bird;

const pipe = [];
var pipe_X = 300;

var ground;
var gameState = 1;
var gameFont;
var game_overImg;

localStorage["highest_score"] = 0;
var score = 0;
var highest_score = 0;

function preload(){
  gameFont = loadFont("Font.TTF");

  board = loadImage("Images/Board.png");
  game_overImg = loadImage("Images/game_over.png");
};

function setup() {
  createCanvas(400, 600);
  
  bird = new Bird(width/6, height/2); 

  ground = new Ground();

}

function draw() {
  background(112, 197, 206);
  textFont(gameFont);
  rectMode(CENTER);  
  imageMode(CENTER);
  noStroke();

  bird.show();
  ground.show();
  ground.update();  

  if(gameState === 1){
    fill(0);
    text("Click AnyWhere to start!", camera.position.x-80, camera.position.y-100);
  }else if(gameState === 2){
    Game();
    text(localStorage["highest_score"], camera.position.x-80, camera.position.y-100);
  }else if(gameState === 3){
    End();
  }

  camera.position.x = bird.x;
}

function mouseReleased(){
  if(gameState === 1){
    bird.x = -150;
    gameState = 2;
  }else if(gameState === 2){
    bird.jump = true;
  }else if(gameState === 3){
    reset();
  }
}

function spawnPipe(){
  if(frameCount % 60 === 0){
    pipe.push(new Pipe(pipe_X));
    pipe_X += 300;
  }
}