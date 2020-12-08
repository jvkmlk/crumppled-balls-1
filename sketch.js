
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var box1;
var box2;
var box3;
var paper;
var ground;
var dustbinImage;

function preload()
{
	dustbinImage=loadImage('dustbingreen.png');
}

function setup() {
	createCanvas(2000, 700);


	engine = Engine.create();
	world = engine.world;

rectMode(CENTER);
box1 = new Box(500,685,160,20., {isStatic:true} );
	box2 = new Box(575,680,20,300);
	box3 = new Box(428,680,20,300);
paper = new Paper(50,510,50);
ground = new Ground(600,height,1500,20);





	//Create the Bodies Here.


  
}


function draw() {
	Engine.update(engine);


   
	rectMode(CENTER);
  background("white");
  drawSprites();
  paper.display();

  box1.display();
  box2.display();
  box3.display();
  ground.display();
  image(dustbinImage,400,525,200,175);





}

function keyPressed()  {
   if (keyCode === UP_ARROW){
Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
   }
}

