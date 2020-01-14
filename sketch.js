let size,black;

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
  let top = (size/32);
  fill(0);
  stroke(255);
  rect(0,0,windowWidth, top);
  rect(0,0,top,windowHeight);
  rect(0,0,top,top);
  fill(255);
  stroke(0);
  textSize(size/64);
  text("NDR0N",top+(size/32),size/48);
  image(black, top+size/32, top+(size/32), size/4, size/4);
  if(mouseX>top+size/32 && mouseX<top+(size/32)+size/4 && mouseY>top+(size/32) && mouseY<top+(size/32)+size/4){
    text("Black (EP)",top+(size/32)+size/32, top+(size/32)+size/32);
  }
}

function mousePressed(){
  if(mouseX>top+(size/32) && mouseX<top+(size/32)+size/4 && mouseY>top+(size/32) && mouseY<top+(size/32)+size/4){
    window.open("https://tt-ndr0n.bandcamp.com/");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}