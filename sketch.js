var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	package_options = {
		restitution:0.4,
		isStatic:true
	}

	packageBody = Bodies.circle(width/2 , 200 , 5 , package_options);
	World.add(world, packageBody);
	
    var options = {
		isStatic:true
	}
	//Create a Ground and box(left, right and base) bodies of engine
	ground = Bodies.rectangle(width/2, 650, width, 10 , options );
 	World.add(world, ground);
 
 	boxLeftBody = Bodies.rectangle(300, 600, 20,100 , options);
 	World.add(world, boxLeftBody);

 	boxBottomBody = Bodies.rectangle(410, 625, 200,20 , options);
 	World.add(world, boxBottomBody);

 	boxRightBody = Bodies.rectangle(520, 600, 20,100 , options);
 	World.add(world, boxRightBody);

}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(0);
 
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  
  fill("red")
  rect(300, 600, 20,100);
  rect(410, 640, 200,20);
  rect(520, 600, 20,100);

  if(keyDown("LEFT_ARROW")){
	helicopterSprite.x=helicopterSprite.x-20;    
    translation={
		x:-20,
		y:0
	}
    Matter.Body.translate(packageBody, translation)
   }
   if(keyDown("RIGHT_ARROW")){
	helicopterSprite.x=helicopterSprite.x+20;    
	translation={
		x:20,
		y:0
	}
    Matter.Body.translate(packageBody, translation)
   }
   if(keyDown("DOWN_ARROW")){
	Matter.Body.setStatic(packageBody,false);
   }

  drawSprites(); 
}



