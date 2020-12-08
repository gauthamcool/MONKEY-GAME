
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage, ground, groundImage, invisibleGround;
var foodGroup, obstacleGroup;
var score;

function preload(){
  groundImage = loadImage("ground.png");
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstalceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(500, 400);
 
  ground = createSprite(250, 360, 500, 50);
  ground.addImage(groundImage);
  ground.x = ground.width/2;
  ground.velocityX = -6;
  
  invisibleGround = createSprite(250, 380, 500, 50);
  invisibleGround.visible = false;
  
  monkey = createSprite(40, 320, 10, 10);
  monkey.addAnimation("running", monkey_running);
  monkey.scale = 0.1;
  monkey.velocityY = 3;
  

  foodGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");

  monkey.collide(invisibleGround);
  
  if (keyDown("space") && monkey.y >=  310){
    monkey.velocityY = -12;
  }
  
  monkey.velocityY = monkey.velocityY +0.5;
  
  if (ground.x < 250){
    ground.x = ground.width/2;
  }
  
  banana();
  obstacles();
  drawSprites();
}

function banana(){
  if (frameCount % 80 === 0){
    var banana = createSprite(500, 150, 10, 10);
    banana.y = Math.round(random(150 , 220));
    banana.addImage(bananaImage);
    banana.velocityX = -4;
    banana.scale = 0.1;
    banana.lifetime = 130;
     
    foodGroup.add(banana);
  }
}

function obstacles(){
  if (frameCount % 300 === 0){
    var obstacle = createSprite(500, 320, 10, 10);
    obstacle.addImage(obstacleImage);
  }
}