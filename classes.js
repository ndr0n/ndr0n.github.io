class Attractor {
  constructor(x, y, mass, gmult) {
    this.location = createVector(x, y);
    this.mass = mass;
    this.G = gmult;
  }

  attract(m) {
    let force = p5.Vector.sub(this.location, m.location); //whats the force direction?
    let magnitude = force.mag();
    let distance = constrain(magnitude, 5, 25); //constraint distance
    force = force.normalize();
    let strength = (this.G*this.mass*m.mass) / (distance * distance);
    force = force.mult(strength); // whats the force magnitude?
    return force; // return force so it can be applied!
  }

  repel(m,repelmult) {
    let force = p5.Vector.sub(this.location, m.location); //whats the force direction?
    let magnitude = force.mag();
    let distance = constrain(magnitude, 5, 25); //constraint distance
    force = force.normalize();
    let strength = (this.G*this.mass*m.mass) / (distance * distance);
    force = force.mult(strength); // whats the force magnitude
    force = force.mult(-repelmult);
    return force; // return force so it can be ap`plied!
  }

  display(rot, strk0,strk1,strk2, alpha) {
    push();
    if(rot == 0){rotateX(random(0,360));}
    if(rot == 1){rotateY(random(0,360));}
    stroke(strk0,strk1,strk2,alpha);
    noFill();
    sphere(this.mass);
    pop();
  }
}

class Mover {
  constructor(m,x,y){
    this.location = createVector(x,y);
    this.velocity = createVector(0,0);
    this.accelaration = createVector(0,0);
    this.mass = m;
  }
  
  // Newton's 2nd law: F = M * A
  // or A = F / M
  applyForce(force) {
    // Divide by mass 
    let f = p5.Vector.div(force, this.mass);
    // Accumulate all forces in acceleration
    this.acceleration = this.accelaration.add(f);
  }

  update() {
    // Velocity changes according to acceleration
    this.velocity.add(this.acceleration);
    // Location changes by velocity
    this.location.add(this.velocity);
    this.velocity = this.velocity.mult(0.99);
    
    // We must clear acceleration each frame
    this.acceleration = this.accelaration.mult(0);
  }

  // Draw Mover
  display(col0,col1,col2, alpha) {
    noStroke();
    fill(col0,col1,col2,alpha);
    ellipse(this.location.x, this.location.y, this.mass, this.mass);
  }

  // Bounce off bottom of window
  checkEdges() {
    if (this.location.x > windowWidth/2 || this.location.x < -windowWidth/2) {
      this.velocity.x *= -1;
      this.velocity.y *= random(-1,1);
    }
    if (this.location.y > windowHeight/2 || this.location.y < -windowHeight/2) {
      this.velocity.y *= -1;
      this.velocity.x *= random(-1, 1);
    }
    if (this.location.x > windowWidth/2) {this.location.x = windowWidth/2;}
    if (this.location.y > windowHeight/2) {this.location.y = windowHeight/2;}
    if (this.location.x < -windowWidth/2) {this.location.x = -windowWidth/2;}
    if (this.location.y < -windowHeight/2) {this.location.y = -windowHeight/2;}
    if (this.location.x == windowWidth/2 && this.location.y == windowHeight/2){
      this.velocity.x *= random(-1,1);
      this.velocity.y *= random(-1,1);
    }
  }
}