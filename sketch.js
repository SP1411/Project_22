const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here

var con;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;

var rope1;
var rope2;
var rope3;
var rope4;
var rope5;



function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	var bob_options = {

        isStatic:false,
		restitution : 0.4
	}

	bob1 = Bodies.circle(320,400,50,bob_options);
	World.add(world,bob1);

	bob2 = Bodies.circle(360,400,50,bob_options);
	World.add(world,bob2);

	bob3 = Bodies.circle(400,400,50,bob_options);
	World.add(world,bob3);

	bob4 = Bodies.circle(440,400,50,bob_options);
	World.add(world,bob4);

	bob5 = Bodies.circle(480,400,50,bob_options);
	World.add(world,bob5);

	rope1 = new rope(bob1,roof,-80,0);
	rope2 = new rope(bob2,roof,-40,0);
	rope3 = new rope(bob3,roof,0,0);
	rope4 = new rope(bob4,roof,40,0);
	rope5 = new rope(bob5,roof,80,0);
	

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	

	Engine.run(engine);
	
  
}

function draw() {
  
  background("#99004d");

  Engine.update(engine);

  rectMode(CENTER);
  ellipseMode(RADIUS);

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  ellipse(bob1.position.x, bob1.position.y, 20);
  ellipse(bob2.position.x, bob2.position.y, 20);
  ellipse(bob3.position.x, bob3.position.y, 20);
  ellipse(bob4.position.x, bob4.position.y, 20);
  ellipse(bob5.position.x, bob5.position.y, 20);

  
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
