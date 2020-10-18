const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1000,800);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,1200,1200,20);
    g = new Ground(600,350,100,10);
    r = new Ground(300,650,100,10);


    pig1 = new Pig(640, 340);
    pig2 = new Pig(620, 340);
    pig3 = new Pig(600, 340);
    pig4 = new Pig(580, 340);
    pig5 = new Pig(590, 320);
    pig6 = new Pig(630, 320);
    pig7 = new Pig(610, 320);
    pig8 = new Pig(620, 300);
    pig9 = new Pig(600, 300);
    pig10 = new Pig(610, 290);
    ig1 = new Pig(640, 340);
    ig2 = new Pig(620, 340);
    ig3 = new Pig(600, 340);
    ig4 = new Pig(580, 340);
    ig5 = new Pig(590, 320);
    ig6 = new Pig(630, 320);
    ig7 = new Pig(610, 320);
    ig8 = new Pig(620, 300);
    ig9 = new Pig(600, 300);
    ig10 = new Pig(610, 290);
   
    g1 = new Pig(340, 640);
    g2 = new Pig(320, 640);
    g3 = new Pig(300, 640);
    g4 = new Pig(280, 640);
    g5 = new Pig(290, 620);
    g6 = new Pig(330, 620);
    g7 = new Pig(310, 620);
    g8 = new Pig(320, 600);
    g9 = new Pig(300, 600);
    g10 = new Pig(310, 590);
    ga1 = new Pig(340, 640);
    ga2 = new Pig(320, 640);
    ga3 = new Pig(300, 640);
    ga4 = new Pig(280, 640);
    ga5 = new Pig(290, 620);
    ga6 = new Pig(330, 620);
    ga7 = new Pig(310, 620);
    ga8 = new Pig(320, 600);
    ga9 = new Pig(300, 600);
    ga10 = new Pig(310, 590);
  




    bird = new Bird(200,50);

    slingshot = new SlingShot(bird.body,{x:100, y:330});
}

function draw(){
    background(0);
    Engine.update(engine);
    //strokeWeight(4);
   
    ground.display();
    pig1.display();
    pig2.display();
    pig3 .display();
    pig4.display();
    pig5.display();
    pig6.display();
    pig7.display();
    pig8.display();
    pig9.display();
    pig10.display();
    ig1.display();
    ig2.display();
    ig3 .display();
    ig4.display();
    ig5.display();
    ig6.display();
    ig7.display();
    ig8.display();
    ig9.display();
    ig10.display();
    g1.display();
    g2.display();
    g3 .display();
    g4.display();
    g5.display();
    g6.display();
    g7.display();
    g8.display();
    g9.display();
    g10.display();
    ga1.display();
    ga2.display();
    ga3 .display();
    ga4.display();
    ga5.display();
    ga6.display();
    ga7.display();
    ga8.display();
    ga9.display();
    ga10.display();

    bird.display();
    g.display();
    r.display();
  
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}
function keyPressed(){

    if(keyCode === 32 ){
 slingshot.reset(bird.body);
 

}    }
