
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;

var ground;
var left;
var right;
var top_wall;
var ball;
var btn;


function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;
  
  ground =new Ground(200,390,400,20);
  right = new Ground(390,200,20,400);
  left = new Ground(10,200,20,400);
  top_wall = new Ground(200,10,400,20);


btn = createImg("up.png");
btn.position(200,30);
btn.size(70,50);
btn.mouseClicked(hForce);



  var ball_options = {
    restitution:0.5
  
  }

  ball = Bodies.circle(300,300,20,ball_options);
  World.add(world,ball);


  rectMode(CENTER);
  ellipseMode(RADIUS);
}

function draw() 
{
  background(51);
  ground.show();
  top_wall.show();
  left.show();
  right.show();
  Engine.update(engine);
 ellipse(ball.position.x,ball.position.y,20) ;
}
function hForce()  {
  Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})
}
