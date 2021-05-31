var bg,bgImg;
var boy, boyImg;
var girl, girlImg,girlJumpImg;
var obstacleImg
var ground;

function preload() {
  bgImg=loadImage("gardenBg.jpeg")
  boyImg=loadImage("bear.png")
  girlImg=loadImage("masha.png")
  obstacleImg=loadImage("strawberry.png")
  girlJumpImg=loadImage("masha jump.png")
}

function setup() {
  createCanvas(3000,800);
  bg=createSprite(1600,400)
  bg.addImage(bgImg);
  bg.scale=7;
  bg.x=bg.width/2
  
  bg.velocityX=-6
  boy=createSprite(200,500,50,50);
  boy.addImage(boyImg);
  boy.setCollider("circle",0,0,50)
  girl=createSprite(700,500,50,50);
  girl.addImage(girlImg)
  girl.scale=0.4;
  girl.debug=false;
  girl.setCollider("circle",0,0,50)
  ground=createSprite(600,600,1000,20)
  ground.visible=false;
}

function draw() {
  background(255,255,255);  
if (bg.x<0) {
  bg.x=bg.width/2
}
if (keyDown("space")) {
  girl.velocityY=-10;
}
if (keyDown("up_arrow")) {
  boy.velocityY=-10
}
girl.velocityY=girl.velocityY+1;
girl.collide(ground)
boy.velocityY=boy.velocityY+1;
boy.collide(ground)
spawnObstacles();
  drawSprites();
}

function spawnObstacles() {
  if (frameCount%250===0) {
    var obstacle=createSprite(width,height/2+150);
    obstacle.addImage(obstacleImg);
    obstacle.scale=0.2;
    obstacle.velocityX=-3;
  }
}
