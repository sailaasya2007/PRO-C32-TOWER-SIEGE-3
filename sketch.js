const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground, ground2;
var block8,block9,block10,block11,block12,block14,block15,block16;
var block1,block2,block3,block4,block5,block6,block7,block17;
var Slingshot;
var polygon, polygonImage;
var score=0;
var bg="dark.jpg";
var backgroundImg;

function preload(){
  polygonImage=loadImage("polygon.png");
  getBackgroundImage();
}

function setup() {
  createCanvas(800,400);

  engine = Engine.create();
  world = engine.world;
  
  Engine.run(engine);
  
  ground= new Ground(100,400,1500,50);
  ground1 = new Ground(400,267,300,20);

  ground2 = new Ground(650,150,220,20);
  //leave two
  block8 = new Box(330,235,30,40);
  block9 = new Box(360,235,30,40);
  block10 = new Box(390,235,30,40);
  block11 = new Box(420,235,30,40);
  block12 = new Box(450,235,30,40);

  block1 = new Box(590,120,30,40);
  block2 = new Box(680,120,30,40);
  block3 = new Box(710,120,30,40);
  block4= new Box(650,120,30,40);
  block5= new Box(620,120,30,40);
  ball = Bodies.circle(50,200,20);
  World.add(world,ball);
  polygon = new Polygon(this.ball,{x:100,y:200});

//Slingshot= new SlingShot(this.polygon,{x:100,y:200});
  //level three
  block13= new Box(360,195,30,40);
  block14 = new Box(390,195,30,40);
  block15 = new Box(420,195,30,40);

  block6= new Box(680,80,30,40);
  block7= new Box(620,80,30,40);
  block17 = new Box(650,80,30,40);


  //top block
  block16 = new Box(390,155,30,40);
  block18 = new Box(650,40,30,40);
 
  
   
}

function draw() {
  if(backgroundImg)
  background(backgroundImg);
  textSize(20);
  fill("white");
 text("Score: "+score, 600, 350);

  polygon.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
 
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block17.display();
  block18.display();
  
  block1.score();
  block2.score();
  block3.score();
  block4.score();
  block5.score();
  block6.score();
  block7.score();
  block17.score();
  block18.score();

  block8.score();
  block9.score();
  block10.score();
  block11.score();
  block12.score();
  block13.score();
  block14.score();
  block15.score();
  block16.score();

  ground1.display();
  ground2.display();
  ground.display();
  
  

  imageMode(CENTER);
  image(polygonImage, ball.position.x, ball.position.y,40,40);
  drawSprites();
}
function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x:mouseX, y:mouseY});
}
function mouseReleased(){
  polygon.fly();
}
function keyPressed(){
   if(keyCode === 32){
     polygon.attach(this.ball);
   }
}
async function getBackgroundImage(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/America/Edmonton");
  var responseJSON= await response.json();
  //console.log(responseJSON.datetime);
  var datetime= responseJSON.datetime;
  var hour= datetime.slice(11,13);
  console.log(hour);
  if(hour>=06&&hour<=19){
      bg="dark.jpg";
  }
  else{
      bg="light.jpg";
  }
  backgroundImg=loadImage(bg);
  console.log(backgroundImg);
}