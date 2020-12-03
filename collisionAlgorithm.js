function setup() {
    createCanvas(800,400);
    gameobject1=createSprite(350,200,50,80);
    gameobject1=createSprite(100,200,80,30);
    gameobject1.shapeColor="green";
    gameobject2.shapeColor="green";
    gameobject1.debug=true;
    gameobject2.debug=true;
  }
  
  function draw() {
    background(0,255,255);
    gameobject1.x=mouseX;
    gameobject1.y=mouseY;
  
  isTouching(gameobject1,gameobject2);
    drawSprites();
  }
  