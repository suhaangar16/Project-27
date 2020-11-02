
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roofObject,rope1,rope2,rope3,rope4,rope5,bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

   roofObject = new Roof(500,30,1500,15);

   bobObject1 = new Bob(500,230,15);

   bobObject2 = new Bob(700,230,15);

   bobObject3 = new Bob(300,230,15);

   bobObject4 = new Bob(100,230,15);

   bobObject5 = new Bob(900,230,15)

  rope1 = new Rope(bobObject1.body,roofObject.body);

  rope2 = new Rope(bobObject2.body,roofObject.body);

  rope3 = new Rope(bobObject3.body,roofObject.body);

  rope4 = new Rope(bobObject4.body,roofObject.body);

  rope5 = new Rope(bobObject5.body,roofObject.body);

  	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");

  roofObject.display();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display(); 
  rope5.display();

  drawSprites();
 
}

function keyPressed(){
  if(keyCode === LEFT_ARROW){
		Matter.Body.applyForce(bobObject4.body,bobObject4.body.position,{x:-100,y:0});
	}
}




