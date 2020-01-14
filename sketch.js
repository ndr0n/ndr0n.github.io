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
  fill(255);
  let top = (size/32);
  rect(0,0,windowWidth, top);
  fill(0);
  textSize(size/64);
  text("NDR0N",size/48,size/48);
  fill(255);
  image(black, size/32, top+(size/32), size/4, size/4);
  if(mouseX>size/32 && mouseX<(size/32)+size/4 && mouseY>top+(size/32) && mouseY<top+(size/32)+size/4){
    text("Black (EP)",(size/32)+size/32, top+(size/32)+size/32);
  }
}

function mousePressed(){
  if(mouseX>size/32 && mouseX<(size/32)+size/4 && mouseY>size/32 && mouseY<(size/32)+size/4){
    window.open("https://tt-ndr0n.bandcamp.com/");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}