let attractor = [];
let movers = [];
var gmult = 0.25;
var forceMult = 0.9;
var repelmult = 8;
var state = 0;
var count = 0;
var countMax = 100;
var stateVar = 0;
var force;
let bgcol = [];

function setup() {
  frameRate(60);
  createCanvas(windowWidth, windowHeight, WEBGL);
  for(var k=0;k<3;k++){bgcol[i]=0;}
  for (var i = 0; i < 5000; i++) {
    movers[i] = new Mover(2, random(-windowWidth/2,windowWidth/2), random(-windowHeight/2,windowHeight/2));
  }
  for (var j = 0; j < 1; j++) {
    attractor[j] = new Attractor(0, 0, 200, gmult);
  }
  background(bgcol[0],bgcol[1],bgcol[2]);
}

function update() {
  if (count == 0) {
    attractor[0].mass = random(windowHeight/30, windowHeight/3);
    stateVar = round(random(0, 3));
    state = 0;
    if (stateVar == 3) {
      state = 1;
    }
    bgcol[0] = round(random(0,255));
    bgcol[1] = round(random(0,255));
    bgcol[2] = round(random(0,255));
    countMax = round(random(1, 100));
  }
  for (var j = 0; j < attractor.length; j++) {
    for (var i = 0; i < movers.length; i++) {
      force = attractor[j].attract(movers[i]);
      if (state == 1) {
        force = attractor[j].repel(movers[i], repelmult);
      }
      force = force.mult(forceMult);
      movers[i].applyForce(force);
    }
  }
  count++;
  count %= countMax;
}

function draw() {
  update();
  // blendMode(ADD);
  // background(bgcol,255);
  noStroke();
  fill(bgcol[0],bgcol[1],bgcol[2],10);
  rect(-windowWidth,-windowHeight,windowWidth*2,windowHeight*2);  
  for (var i = 0; i < 5000; i++) {
    movers[i].checkEdges();
    movers[i].update();
    movers[i].display(bgcol[0],bgcol[1],bgcol[2],255);
  }
  attractor[0].display(state, 255-bgcol[0],255-bgcol[1],255-bgcol[2], 1);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}