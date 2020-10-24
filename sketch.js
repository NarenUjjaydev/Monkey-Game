
var monkey , monkey_running
var  bananaImage, obstacleImage;
var FoodGroup, obstacleGroup
var ground;
var survivalTime = 0;
var obstacle,food;
var score;
var gameState = 1
var END = 0;

function preload(){
 monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage   = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}

function setup() {
  
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -2;
  ground.x = ground.width/2;
  
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
  score = 0;
  
}


function draw() {

  background("green");
  
  if(gameState === 1){
    
      //monkey.velocityX = 1;
  
   if (ground.x < 200){
      ground.x = ground.width/2;
    }
 // console.log(monkey.y);
  
    monkey.velocityY = monkey.velocityY + 0.4;
    
    monkey.collide(ground);
    //monkey.debug = true;
  
   if(monkey.isTouching(bananaGroup)){
      bananaGroup.destroyEach();
      
   }
  
      if(keyDown("space") && monkey.y >= 310) {
      monkey.velocityY = -12;
    }
  

  
  obstacles();
  fruits();
   
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime = Math.ceil(frameCount/frameRate());
  text ("Survival Time :"+ survivalTime,100,50);
    
  }
  
    
    
  
 /* stroke("white");
  textSize(20);
  fill("white");
  //text("Score :", + score(500,50));*/
  
  
  
  
  drawSprites();
  
   if(monkey.isTouching(obstacleGroup)){
    gameState = 0;
   }
  
    if(gameState === 0){

  stroke("black");
  textSize(20);
  fill("black");
   text("Game Over!",300,200);
   
    monkey.collide(ground);
      text ("Survival Time :"+ survivalTime,100,50);
      ground.x = ground.width/2;
      
   //monkey.visible = false;
  //obstacleGroup.destroyEach();
  obstacleGroup.setVelocityX = 0
  obstacleGroup.setVelocityY = 0
  //bananaGroup.destroyEach();
  bananaGroup.setVelocityX = 0;
  bananaGroup.setVelocityY = 0
 // ground.destroy();
  monkey.setvelocityX = 0;
  monkey.setvelocityY = 9;
  }
  
}

 function obstacles(){
   
   if(frameCount % 200 === 0){
   obstacle = createSprite(600,305);
   obstacle.addImage("obstacles",obstacleImage);
   obstacle.scale = 0.2;
   obstacle.velocityX = -5;
   obstacle.lifetime = 120;
   
     obstacleGroup.add(obstacle);
   }
 }

 function fruits(){
   
   if(frameCount % 100 === 0){
    food = createSprite(600,305);
    food.addImage(bananaImage);
    food.y = Math.round(random(140,300));
    food.scale = 0.1;
    food.velocityX = -5;
    food.lifetime = 120;
     
     bananaGroup.add(food);
    
   }
 }


  

  
  
