var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
var stick1, stick2, stick3;
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

	stick1=createSprite(400,650,180,15)
	stick1.shapeColor=color("crimson")	

	stick2=createSprite(317,600,15,90)
	stick2.shapeColor=color("crimson")

	stick3=createSprite(483,600,15,90)
	stick3.shapeColor=color("crimson")

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

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}

function keyPressed() 
  { if (keyCode === DOWN_ARROW) 
	{ 
		Matter.Body.setStatic(packageBody,false); 
	}
  }

  packageBody.bounceOff(stick1)
  packageBody.bounceOff(stick2)
  packageBody.bounceOff(stick3)


function draw() {
  rectMode(CENTER);

  background(0);

  
packageSprite.x=packageBody.position.x
packageSprite.y=packageBody.position.y
   

drawSprites();
 
		}
