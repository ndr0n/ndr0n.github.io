let side,size,black;

function preload() {
  black = loadImage("Black.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  size = (windowWidth+windowHeight)/2;
  background(0);
  side = (size/32);
  fill(0);
  stroke(255);
  rect(0,0,windowWidth, side);
  rect(0,0,side,windowHeight);
  rect(0,0,side,side);
  fill(255);
  stroke(0);
  textSize(size/64);
  text("NDR0N",side+(size/32),size/48);
  image(black, side+(size/32), side+(size/32), size/4, size/4);
  if(mouseX>side+size/32 && mouseX<side+(size/32)+size/4 && mouseY>side+(size/32) && mouseY<side+(size/32)+size/4){
    text("Black (EP)",side+(size/32)+size/32, side+(size/32)+size/32);
  }
}

function mousePressed(){
  if(mouseX>side+size/32 && mouseX<side+(size/32)+size/4 && mouseY>side+(size/32) && mouseY<side+(size/32)+size/4){
    window.open("https://tt-ndr0n.bandcamp.com/");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}