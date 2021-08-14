

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var drops=[];
var ground;
var umbrella;

function preload()
{
	dropImage=loadImage("drop.png");
	boyImage=loadImage("walking_2.png")
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground= new Ground(400,670,800,20);
	umbrella=new Umbrella(373,445,110)
	
	//drop1=new Drop(100,500,18);
	if (frameCount%180===0) {
		for (let index = 0; index < 100; index++) {
			//const element = array[index];
			drops.push(new Drop(random(0,790),random(0,690),5))
		}
	}
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255,255,255);
text(mouseX+" "+mouseY,mouseX,mouseY)
for (let index = 0; index < drops.length; index++) {
	//const element = array[index];
	drops[index].display()
	drops[index].update()
}
  ground.display();
  imageMode(CENTER)
  
  image(boyImage,370,490,500,400);
 //umbrella.display();
  
  //drop.display();
  
  drawSprites();
  
 
}
