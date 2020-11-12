
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	roof = new Roof(400, 50, 800, 20);

	bobObject1 = new Bob(400, 250);

	rope1 = new Rope(bobObject1.body, roof.body)


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  drawSprites();

  roof.display();
  bobObject1.display();

  rope.display();
 
}



