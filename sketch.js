//this is the sketch
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var arm,ball,ground;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ground_options={
    isStatic : true
  }


  var arm_options={
    isStatic: true
  }

  ground = Bodies.rectangle(200,330,400,20,ground_options)
  World.add(world,ground);

arm = Bodies.rectangle(200,100,200,20,arm_options);
World.add(world,arm);

var ball_options = {
  restitution : 1.0,
    density : 1.0
}

ball  = Bodies.circle(200,200,40,ball_options);
World.add(world,ball);


var options = {
  bodyA : ball,
  bodyB : arm,
  stiffness: 0.01,
  length : 75
}
var string = Constraint.create(options);
World.add(world,string);

fill("white");
}


function draw() {
  background(0); 
  Engine.update(engine);
 
  text("Press Space for holding the pendulum ", 100,20);
  text("Press Enter for releasing",150,40);

fill ("black");
rectMode(CENTER);
rect(arm.position.x,arm.position.y,200,20);

fill(0);
rectMode(CENTER);
rect(ground.position.x,ground.position.y,400,20);


fill("green");
ellipseMode(RADIUS);
ellipse(ball.position.x,ball.position.y,40);

strokeWeight(4);
stroke("white");
line(ball.position.x,ball.position.y,arm.position.x,arm.position.y);
if(keyCode===32){
    ball.position.y = mouseY;
    ball.position.x = mouseX;
    }
    
}
