var fixedBox, movingBox;
function setup()
 {
  createCanvas(800,400);
  fixedBox=createSprite(400, 200, 50, 50);
  fixedBox.shapeColor="green"

  movingBox = createSprite(400, 200, 30, 100);
  movingBox.shapeColor = "green";
}

function draw()
{
  background("cyan");

  movingBox.x = mouseX;
  movingBox.y = mouseY;


  console.log(movingBox.x - fixedBox.x);


  if(movingBox.x - fixedBox.x <= fixedBox.width/2 + movingBox.width/2 &&
     fixedBox.x - movingBox.x <= fixedBox.width/2 + movingBox.width/2 &&
     movingBox.y - fixedBox.y <= fixedBox.height/2 + movingBox.height/2 &&
     fixedBox.y - movingBox.y <= fixedBox.height/2 + movingBox.height/2)
  {
    fixedBox.shapeColor="red";
    movingBox.shapeColor = "red";
  }
else
{
  fixedBox.shapeColor="green";
    movingBox.shapeColor = "green";
}



  
  drawSprites();
  
}