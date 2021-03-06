// Copyright 2019, Jim Palomo, All rights reserved. 
// Code created in Javascript @ code.org
// Use of arrays to create a slideshow pictures with the use of buttons
// Link to code: https://studio.code.org/projects/applab/B7EYtU9OHELxw9RjaBrTi_j551ASiCh4GuKw4P8i-4E

//Code refactored
var favorite = [];
appendItem(favorite, "wallpaper-3840x2160-sea-beach-evening-sun-sunset-4k-ultra-hd-hd-background.jpg"); //Appending items = add items to array
appendItem(favorite, "scenery_at_radnor_lake_by_s.ward_2014_2__full.jpg");
appendItem(favorite, "pexels-photo-490411.jpeg");
var current = 0;

//Calls update function to update UI (pages & text_area)
update();

//Event of click next button
onEvent("nextBtn", "click", function() {
  next();
});

//Event of click last button
onEvent("lastBtn", "click", function() {
  last();
});

//function for next button
function next(){
  current++;
  if(current>=favorite.length){
    current=0;
  }
  update();
}

//function for last button
function last(){
  current--;
  if(current < 0){
    current = favorite.length-1;
  }
  update();
}

//Add button
onEvent("addBtn", "click", function() {
  insertItem(favorite, current, getText("text_input"));
  setText("text_area",favorite[current] );
  setText("text_input","");
  update();
});

//Updates text_area & pages (out of 3)
function update(){
  setImageURL("image", favorite[current]);
  setText("page", (current+1)+" of "+favorite.length);
}

//Key presses
onEvent("screen1", "keypress", function(event) {
  if (event.key == "a"){
  next();
  console.log('key is: '+event.key); 
  } else if (event.key == "d") {
    last();
    console.log('key is: '+event.key); 
  } else {
    
  }
});

