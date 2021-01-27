
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObject,groundObject, launcherObject;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var world,boy;
var stoneObject;

function preload(){
	boy=loadImage("boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	stoneObject = new Stone(200,700,10,10);

	mango1 = new Mango(1080,50,44);
	mango2 = new Mango(1000,100,44);
	mango3 = new Mango(1150,110,44);
	mango4 = new Mango(1200,170,44);
	mango5 = new Mango(1080,150,44);
	mango6 = new Mango(900,200,44);
	mango7 = new Mango(1000,200,44);
	mango8 = new Mango(1140,200,44);
	mango9 = new Mango(1250,230,44);
  mango10 = new Mango(1070,250,44);
  
  treeObject=new tree(1050,580);

	groundObject=new ground(width/2,600,width,20);
	
  launcherObject = new Launcher(stoneObject.body,{x:240,y:410});

	Engine.run(engine);

}

function draw() {

  background(230);

  textSize(25);
  text("Press 'Space key' to get a second Chance to Play",50 ,50);

  image(boy ,200,340,200,300);
  
  treeObject.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  mango10.display();

  stoneObject.display();

  groundObject.display();

  launcherObject.display();

  detectollision(stoneObject,mango1);
  detectollision(stoneObject,mango2);
  detectollision(stoneObject,mango3);
  detectollision(stoneObject,mango4);
  detectollision(stoneObject,mango5);
  detectollision(stoneObject,mango6);
  detectollision(stoneObject,mango7);
  detectollision(stoneObject,mango8);
  detectollision(stoneObject,mango9);
  detectollision(stoneObject,mango10);
}

function mouseDragged()
{
Matter.Body.setPosition(stoneObject.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
launcherObject.fly();
}

function detectollision(lstone,lmango){
mangoBodyPosition=lmango.body.position
stoneBodyPosition=lstone.body.position
var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
if(distance<=50)
{
Matter.Body.setStatic(lmango.body,false);
}
}

function keyPressed(){
if(keyCode === 32){
	Matter.Body.setPosition(stoneObject.body,{x:235,y:420})
	launcherObject.attach(stoneObject.body);
}	
}
