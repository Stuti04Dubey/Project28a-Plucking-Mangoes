
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy, ground, backgroundImg, stoneObj, tree, m1, m2, m3, m4, m5, m6, m7, m8, sling;

function preload()
{
	boy = loadImage("boy.png");
	tree = loadImage("tree.png");
	backgroundImg = loadImage("bg.png");
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	stoneObj = new stone(320,225);
	sling = new SlingShot(stoneObj.body,{x:320 , y:225});
	m1 = new mango(850,150,8);
	m2 = new mango(900,120,10);
	m3 = new mango(950,100,7);
	m4 = new mango(1000,60,9);
	m5 = new mango(1050,60,6);
	m6 = new mango(1100,120,10);
	m7 = new mango (1100,60,8);
	m8 = new mango (1150,80,7);
	ground = Bodies.rectangle(640,385,1290,20,{isStatic:true});
	World.add(world,ground);
	
	Engine.run(engine);
	  
}
function mouseDragged(){
    Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    sling.fly();
}


function draw() {
	if (keyIsPressed === true) {
		sling.attach();
	  }

    rectMode(CENTER);
    background(backgroundImg);
    push();
    rect(width/2,400,width,20);
	sling.display();
    drawSprites();
    console.log(stone);
    imageMode(CENTER);
    image(boy,400,300,250,300);
	image(tree,1000,180,400,400);
	stoneObj.display();
	m1.display();
	m2.display();
	m3.display();
	m4.display();
	m5.display();
	m6.display();
	m7.display();
	m8.display();
	collision(stoneObj,m1);
	collision(stoneObj,m2);
	collision(stoneObj,m3);
	collision(stoneObj,m4);
	collision(stoneObj,m5);
	collision(stoneObj,m6);
	collision(stoneObj,m7);
	collision(stoneObj,m8);

	strokeWeight(5);
	stroke(0);
	fill(255);
	textSize(30);
    text("Plucking Mangoes Is A Fun", 300, 50);
	
}

function collision(a,b){
	 d = dist(a.body.position.x,a.body.position.y,b.body.position.x,b.body.position.y)
	if(d <= 50){
		Body.setStatic(b.body,false);
}


}