const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot

function preload() {
   
}

function setup(){
    var canvas = createCanvas(1700,1000);
    engine = Engine.create();
    world = engine.world;
    
    
    ground = new Ground(600,height,1200,20);
   
    mango2 = new Mangoes(900,500,50,50);
   

    Tree = new tree(100,100);
    boy = new Boy(100,100);
    bird = new Bird(100,900);

    
    slingshot = new SlingShot(bird.body,{x:150, y:900});
}

function draw(){
    background(223);
    Engine.update(engine);
    strokeWeight(4);
    boy.display();
    ground.display();
    Tree.display();
   
    bird.display();
    mango2.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if (keyCode === 32){
        slingshot.attach(bird.body);

       
    }
}