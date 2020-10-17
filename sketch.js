var fr,mr;
function setup(){
    createCanvas(800,800);
    fr=createSprite(200,200,200,100);
    fr.shapeColor="green";
    mr= createSprite(500,200,200,100);
      fr.shapeColor="green";

      mr.velocityY = 5;
      fr.velocityY =-5;
}
function draw(){
background("red");


if(mr.x-fr.x < mr.width/2  +  fr.width/2 && fr.x-mr.x < mr.width/2  +  fr.width/2){
  mr.velocityX = -mr.velocityX 
  fr.velocityX = -fr.velocityX 
}
  if(mr.y-fr.y < mr.height/2  +  fr.height/2||fr.y-mr.y < mr.height/2  +  fr.height/2){
    mr.velocityY = -mr.velocityY 
    fr.velocityY = -fr.velocityY 
}


drawSprites();

}