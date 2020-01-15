let page = 0;
let side, size, filt;
let black;

function preload() {
  black = loadImage("Black.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  size = (windowWidth+windowHeight)/2;
  side = (size / 32);
  background(0);
  fill(0);
  stroke(255);
  rect(0, 0, windowWidth, side);
  rect(0, 0, side, windowHeight);
  rect(0, 0, side, side);
  
  if(page==0){fill(255);stroke(255);}
  rect(size/32,0,side*4,side);
  fill(0);stroke(255);
  if(page==1){fill(255);stroke(255);}
  rect(size/32+side*4,0,side*4, side);
  fill(0);stroke(255);
  if(page==2){fill(255);stroke(255);}
  rect(size/32+side*8,0,side*4, side);
  fill(0);stroke(255);
  if(page==3){fill(255);stroke(255);}
  rect(size/32+side*12,0,side*4, side);
  fill(0);stroke(255);
  
  textSize(size / 64);
  fill(255);stroke(0);
  if(page==0){fill(0);stroke(255);}
  text("Releases", side + (size / 32), size / 48);
  fill(255);stroke(0);
  if(page==1){fill(0);stroke(255);}
  text("Events", side + side*4 + (size / 32), size / 48);
  fill(255);stroke(0);
  if(page==2){fill(0);stroke(255);}
  text("About", side + side*8 + (size / 32), size / 48);
  fill(255);stroke(0);
  if(page==3){fill(0);stroke(255);}
  text("Contact", side + side*12 + (size / 32), size / 48);
  fill(255);stroke(0);
  
  if (page == 0) {
    image(black, side + (size / 32), side + (size / 32), size / 4, size / 4);
    if (mouseX > side + size / 32 && mouseX < side + (size / 32) + size / 4 && mouseY > side + (size / 32) && mouseY < side + (size / 32) + size / 4) {
      text("Black (EP)", side + (size / 32) + size / 32, side + (size / 32) + size / 32);
    }
  }
  
  if(page == 1){
    text("Future:",side*2,side*3);
    text("- Portugal - Lisbon - Adao - Máquina Alienígena - 22:00-3:00 \n  https://www.facebook.com/events/481577472562415/",side*2,side*4);
    text("- Portugal - Lisbon - 5A - TBA - 5:00-1:00",side*2,side*6);
  }
  
  if(page == 2){
    text("ndr0n is an audiovisual project, designed by Afonso Proenca, from Lisbon, Portugal.\nThe aesthetic emerges from the mechanical routines present in modern society,\naluding to a dark reality where meaning is fabricated and behaviour is scripted.\nInspired by concepts such as TransHumanism and Technological Singularity,\nthe artist attempts to sonify the personification of self-conscious machines.",side*2,side*3); 
  }
  
  if(page == 3){
    text("Contact: ndr0n.pc@gmail.com",side*2,side*3); 
  }
  
  if (filt == 1) {filter(INVERT);}
  filt = 0;
}

function mousePressed() {
  if(mouseY < side){
    if(mouseX > size/32 && mouseX < size/32+side*4){
      page = 0;
    }
    if(mouseX > size/32+side*4 && mouseX < size/32+side*4+side*4){
      page = 1;
    }
    if(mouseX > size/32+side*8 && mouseX < size/32+side*8+side*4){
      page = 2;
    }
    if(mouseX > size/32+side*12 && mouseX < size/32+side*12+side*4){
      page = 3;
    }
  }
  
  if(page == 0){
    if (mouseX > side + size / 32 && mouseX < side + (size / 32) + size / 4 && mouseY > side + (size / 32) && mouseY < side + (size / 32) + size / 4) {
      window.open("https://tt-ndr0n.bandcamp.com/");
      filt = 1;
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}