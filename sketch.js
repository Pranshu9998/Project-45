var bg,bgImg;
var player, shooterImg, shooter_shooting;
var zombie, zombieImg;

function preload(){
  
  shooterImg = loadImage("assets/shooter_2.png")
  shooter_shooting = loadImage("assets/shooter_3.png")
  zombieImg = loadImage("assets/zombie.png")

  bgImg = loadImage("assets/bg.jpeg")

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

  //adding the background image
  bg = createSprite(displayWidth/2-20,displayHeight/2-40,20,20)
bg.addImage(bgImg)
bg.scale = 1.5
  

//creating the player sprite
player = createSprite(displayWidth-1500, displayHeight-300, 50, 50);
 player.addImage(shooterImg)
   player.scale = 0.5
   player.debug = true
   player.setCollider("rectangle",0,0,300,300)


}

function draw() {
  background(0); 


  if(keyWentDown("UP_ARROW")){
    player.y = player.y-20;
  }
  if(keyWentDown("DOWN_ARROW")){
    player.y = player.y+20;
  }

  //moving the player up and down and making the game mobile compatible using touches
if(keyDown("UP_ARROW")||touches.length>0){
  player.y = player.y-30
}
if(keyDown("DOWN_ARROW")||touches.length>0){
 player.y = player.y+30
}


//release bullets and change the image of shooter to shooting position when space is pressed
if(keyWentDown("space")){
 
  player.addImage(shooter_shooting)
 
}

//player goes back to original standing image once we stop pressing the space bar
else if(keyWentUp("space")){
  player.addImage(shooterImg)
}
enemy();

drawSprites();

}

function enemy() {
  if (frameCount % 60 === 0) {
    var zombie = createSprite(random(1600,1800), random(400,800), 50, 50);
    zombie.addImage(zombieImg)
    zombie.scale = 0.2
    zombie.velocityX = -5
    zombie.setCollider("rectangle",0,0,300,300)
    zombie.debug = true
    zombie.lifetime = 400
  }
}
//Movement to player up and down
//How to spawn zomnbies a different y position everytime
