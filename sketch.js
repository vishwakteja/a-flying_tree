var tree, treeImage, ground, man, manImage, manImage2 ;
var  hint="please press UP_ARROW to give water to the plant";
var shock="oh my god a flying tree";
function preload(){
treeImage=loadImage("tree.png")
manImage=loadImage("gardener-1.png")
manImage2=loadImage("gardener.png")
}

function setup() {
 createCanvas(1300, 600)
 
 tree=createSprite(790, 500, 30, 50)
 tree.addImage("tree", treeImage)
 tree.scale=0.2

 ground=createSprite(800, 575, 1700, 45)
 ground.shapeColor="brown"

 man=createSprite(700, 480, 20, 70)
 man.addImage("man", manImage)
 man.scale=0.3

 
}

function draw() {
 background("green")
 if(keyIsDown(UP_ARROW)){
tree.scale=tree.scale+0.005
man.addImage("man", manImage2)
tree.y=tree.y-3

 }

 if(keyIsDown(DOWN_ARROW)){
    tree.scale=tree.scale-0.005
    tree.y=tree.y+2
 
     }
 
fill("white")
textSize(20)
text(hint, 200, 100)

   if(tree.y<300){
    textSize(20)
    text("man"+":"+shock, 630, 400)

   }


 drawSprites();
}