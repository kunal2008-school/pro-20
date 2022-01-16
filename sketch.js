var bg
var mouse,mouseim1,mouseim2,mouseim3
var cat,catim1,catim2,catim3


function preload() {
    //load the images here
bg=loadImage("images/garden.png")
mouseim1=loadAnimation("images/mouse1.png")
mouseim2=loadAnimation("images/mouse2.png","images/mouse3.png")
mouseim3=loadAnimation("images/mouse4.png")

catim1=loadAnimation("images/cat1.png")
catim2=loadAnimation("images/cat2.png","images/cat3.png")
catim3=loadAnimation("images/cat4.png")
}

function setup(){
    createCanvas(1000,800);
 
    //create tom and jerry sprites here
mouse= createSprite(200,650,20,20)
mouse.addAnimation("mousehappy",mouseim1)
mouse.scale = 0.1

cat=createSprite(700,650,20,20)
 cat.addAnimation("catsitting",catim1)
cat.scale = 0.2
}

function draw() {

    background(bg);
 if(cat.x - mouse.x < (cat.width - mouse.width)/2){
mouse.addAnimation("detective",mouseim3)
 mouse.changeAnimation("detective")

cat.addAnimation("end",catim3)
cat.changeAnimation("end")
cat.velocity.x=0
}
    //Write condition here to evalute if tom and jerry collide

    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
mouse.addAnimation("mouseteasing",mouseim2)
mouse.changeAnimation("mouseteasing")

cat.addAnimation("catwalking",catim2)
cat.changeAnimation("catwalking")
cat.velocity.x=-5
}
  //For moving and changing animation write code here


}
