var seaImg;
var shipImg1;
var shipImg2;
var sea;

function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation("ship-3.png");
shipImg2 = loadAnimation("ship-4.png");
sea.addImage(seaImg);
}

function setup(){
  createCanvas(400,400);
  seaImg = createSprite(10,10,100,100);
  shipImg1 = createSprite(10,10,50,50);
  shipImg2 = createSprite(10,10,50,50);
}

function draw() {
  background("blue");

//code to reset the background
if(sea.x < 0){
  sea.x = sea.width/2;
}
}
