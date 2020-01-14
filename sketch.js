let size,black;

function preload() {
  black = loadImage("Black.jpg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  size = (windowWidth + windowHeight) / 2;
  background(0);
  image(black, windowWidth / 32, windowHeight / 32, size / 4, size / 4);
  if(mouseX>windowWidth/32 && mouseX<(windowWidth/32)+size/4 && mouseY>windowHeight/32 && mouseY<(windowHeight/32)+size/4){
    fill(255);
    text("Black (EP)",windowWidth/16,windowHeight/16);
  }
}

function mousePressed(){
  if(mouseX>windowWidth/32 && mouseX<(windowWidth/32)+size/4 && mouseY>windowHeight/32 && mouseY<(windowHeight/32)+size/4){
    window.open("https://tt-ndr0n.bandcamp.com/");
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}