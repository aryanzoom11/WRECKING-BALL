const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;
 var engine,world,ground
var boxes=[]
function setup(){
createCanvas(2000,500)
 engine=Engine.create()
 world=engine.world;
 ground= new Ground(1000,490,2000,40)
 for(var i=1;i<=8;i++){
box[i]=new Box(700,500-50*i,50,50)
 }
}

function draw(){
background("blue")
Engine.update(engine)
ground.display();
for(var i=1;i<=10;i++){
  box[i].display()
   }
}