
var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect = createSprite(600, 200, 50, 80);
  movingRect.shapeColor = "black";
  fixedRect = createSprite(400,200,80,50);
}

function draw() {
  background("lightblue");  

  movingRect.x = mouseX;
  movingRect.y = mouseY;

  drawSprites();

  if(movingRect.x - fixedRect.x <= movingRect.width/2 + fixedRect.width/2 && 
    fixedRect.x - movingRect.x <= movingRect.width/2 + fixedRect.width/2){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  else{
    movingRect.shapeColor = "black";
    fixedRect.shapeColor = "grey";
  }
}