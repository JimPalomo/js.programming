// Copyright 2019, Jim Palomo, All rights reserved. 
// Code created in Javascript @ Code.org
// Code that generates the movement of fishes by randomizing different elements every second. 
// Link to code: https://studio.code.org/projects/applab/mZBfrTpDQSxSD2WCpMubPMwcFJPqSCbymu4bDCofTWc

for (var i = 0; i < 100; i++) {
  setInterval(drawDesign, 250);
}


function drawDesign(){
  hide();
  penUp();
  drawBackground();
  drawAllSeagrass();
  drawAllSeaStars();
  drawAllFish();
  drawAllBubbles();
  drawAllSunbeams();
  
}

function drawAllSeagrass(){
  for (var i = 0; i < 50; i++) {
  moveTo(randomNumber(0,320),450);
  turnTo(0);
  drawSeagrass(randomNumber(5,20), (randomNumber(2,10)));
  }
}

function drawAllSeaStars(){
for (var i = 0; i < 5; i++) {
  moveTo(randomNumber(0,320), randomNumber(360,450));
  drawSeaStar(randomNumber(10,30));  
  }  
}

function drawAllFish(){
  for (var i = 0; i < 15; i++) {
  moveTo(randomNumber(0,320),randomNumber(0,300));
  drawFish(randomNumber(5,20),randomNumber(0,255),randomNumber(0,255),120);
  
  }
  
}

function drawAllBubbles(){
 for (var i = 0; i < 200; i++) {
  moveTo(randomNumber(0,320),randomNumber(0,450));
  drawBubble(randomNumber(1,5));
}
}
function drawAllSunbeams(){
  for (var i = 0; i < 100; i++) {
  moveTo(randomNumber(-50,320),0);
  turnTo(randomNumber(165,175));
  drawSunbeam(randomNumber(100,400));  
  }
}

function drawBackground(){
  penColor("DarkBlue");
  dot(1000);
}

function drawSeaStar(size){
  penRGB(255,0,255);
  penWidth(10);
  penDown();
  turnTo(0);
  for (var i = 0; i < 4; i++) {
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);  
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  moveForward(size);
  turnRight(144);
  }
  
  
  
  penUp();
}

function drawSeagrass(radius, numWaves){
  penRGB(0,randomNumber(100,200),0);
  penWidth(3);
  penDown();
  arcLeft(30,radius);
  for(var i = 0; i < numWaves; i++){
    arcRight(60,radius);
    arcLeft(60,radius);
  }
  penUp();
}

function drawFish(size, red, green, blue){
  penRGB(red,green,blue);
  penWidth(size);
  penDown();
  
  dot(size);
  turnTo(90);
  moveForward(size);
  
  turnLeft(30);
  moveForward(size);
  turnRight(120);
  moveForward(size);
  turnRight(120);
  moveForward(size);
  turnRight(120);
  
  penUp();
}

function drawBubble(size){
  penRGB(100,100,255,0.2);
  dot(size);
}

function drawSunbeam(size){
  penDown();
  penWidth(randomNumber(1,15));
  penRGB(255,255,255,0.1);
  moveForward(size);
  penUp();
}
