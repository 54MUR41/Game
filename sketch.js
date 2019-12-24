const{Engine, World, Bodies, Constraint, Mouse, MouseConstraint} = Matter;
var engine, world;
var gun;
var zombie, ground;
var backgroundImg;
var bullet;
var shot;
var gameState = "Start";

function preload(){
backgroundImg = loadImage("Images/BG.jpg")
}

function setup() {
  var canvas  = createCanvas(800,800);
  engine = Engine.create();
  world = engine.world;
gun = new Gun(50,0,100,50);
zombie = new Zombie(150,0,200,200);
ground = new Ground(400,790,800,10);
bullet = new Bullet(20,20);
shot = new Shot(bullet.body,{x:50,y:100});
console.log(zombie);
}

function draw() {
  background(backgroundImg);  
  Matter.Engine.update(engine);
  gun.display();
  zombie.display();
  ground.display();
  shot.display();
  bullet.display();
  if(keyIsDown(DOWN_ARROW)){
    shot.attach(bullet.body);

  }
}


function keyPressed(){
  if(keyCode === DOWN_ARROW){
    gameState = "Shoot";
    shot.shoot();
}
}