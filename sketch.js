
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var object1,object2,object3,object4,object5,object6,object7,object8,object9,object10,object11,object12,object13,object14;
function setup(){
  var canvas = createCanvas(1600,750);
  engine = Engine.create();
  world = engine.world;
  object1=Bodies.rectangle(100,100,50,50);
  World.add(world,object1);
  console.log(object1);
  object2=Bodies.rectangle(200,200,50,50);
  World.add(world,object2);
  object3=Bodies.circle(300,300,50);
  World.add(world,object3);
  object4=Bodies.rectangle(600,100,50,50);
  World.add(world,object4);
  object5=Bodies.rectangle(500,200,50,50);
  World.add(world,object5);
  object6=Bodies.circle(400,300,50);
  World.add(world,object6);
  object7=Bodies.rectangle(700,100,50,50);
  World.add(world,object7);
  object8=Bodies.rectangle(800,200,50,50);
  World.add(world,object8);
  object9=Bodies.circle(900,300,50);
  World.add(world,object9);
  object10=Bodies.rectangle(1000,100,50,50);
  World.add(world,object10);
  object11=Bodies.rectangle(1100,200,50,50);
  World.add(world,object11);
  object12=Bodies.circle(1200,300,50);
  World.add(world,object12);
  object13=Bodies.rectangle(1300,200,50,50);
  World.add(world,object13);
  object14=Bodies.rectangle(1400,100,50,50);
  World.add(world,object14);

}
function draw()
{Engine.update(engine);
  background(0);
  rectMode(CENTER);
    fill("red");
    rect(object1.position.x,object1.position.y,50,50);
    fill("blue");
    rect(object2.position.x,object2.position.y,50,50);
    fill("green");
    circle(object3.position.x,object3.position.y,50);
    fill("red");
    rect(object4.position.x,object4.position.y,50,50);
    fill("blue");
    rect(object5.position.x,object5.position.y,50,50);
    fill("green");
    circle(object6.position.x,object6.position.y,50);
    fill("red");
    rect(object7.position.x,object7.position.y,50,50);
    fill("blue");
    rect(object8.position.x,object8.position.y,50,50);
    fill("green");
    circle(object9.position.x,object9.position.y,50);
    fill("red");
    rect(object10.position.x,object10.position.y,50,50);
    fill("blue");
    rect(object11.position.x,object11.position.y,50,50);
    fill("green");
    circle(object12.position.x,object12.position.y,50);
    fill("red");
    rect(object13.position.x,object13.position.y,50,50);
    fill("blue");
    rect(object14.position.x,object14.position.y,50,50);
}
