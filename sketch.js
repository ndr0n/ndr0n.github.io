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
  image(black, size/32, size/32, size/4, size/4);
  if(mouseX>size/32 && mouseX<(size/32)+size/4 && mouseY>size/32 && mouseY<(size/32)+size/4){
    fill(255);
    text("Black (EP)",(size/32)+size/32, (size/32)+size/32);
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