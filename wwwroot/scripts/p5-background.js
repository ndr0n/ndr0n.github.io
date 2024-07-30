let P5Background;
let DotNet = null;

SetDotnetReference = function (pDotNetReference) {
    DotNet = pDotNetReference;
};

DisposeJs = function () {
    if (P5Background != null) P5Background.remove();
    if (P5Simulated != null) P5Simulated.remove();
}

window.SetP5Background = () => {
    DisposeJs();
    P5Background = new p5(background, window.document.getElementById('p5-sketch'));
};

let background = function (p) {

    let inc = 0.1;
    let scl = 100;
    let cols, rows;
    let zoff = 0;
    let fr;
    let particles = [];
    let flowfield;

    p.setup = function () {
        p.createCanvas(p.windowWidth * 0.99, p.windowHeight * 0.99);
        p.frameRate(60);
        p.background(0);
        p.colorMode(p.HSB, 255);
        cols = p.floor(p.width / scl);
        rows = p.floor(p.height / scl);
        flowfield = new Array(cols * rows);
        for (var i = 0; i < 500; i++) {
            particles[i] = new Particle();
        }
    }

    p.windowResized = function () {
        p.resizeCanvas(p.windowWidth * 0.99, p.windowHeight * 0.99);
    }

    p.draw = function () {
        var yoff = 0;
        for (var y = 0; y < rows; y++) {
            var xoff = 0;
            for (var x = 0; x < cols; x++) {
                var index = x + y * cols;
                var angle = p.noise(xoff, yoff, zoff) * p.TWO_PI * 4;
                var v = p5.Vector.fromAngle(angle);
                v.setMag(1);
                flowfield[index] = v;
                xoff += inc;
                p.stroke(0, 50);
            }
            yoff += inc;

            zoff += 0.0003;
        }

        for (var i = 0; i < particles.length; i++) {
            particles[i].follow(flowfield);
            particles[i].update();
            particles[i].edges();
            particles[i].show();
        }
        if (p.floor(p.random(10000)) == 0) {
            p.setup();
        }
    }

    function Particle() {
        this.pos = p.createVector(p.random(p.width), p.random(p.height));
        this.vel = p.createVector(0, 0);
        this.acc = p.createVector(0, 0);
        this.maxspeed = 4;
        this.h = 0;

        this.prevPos = this.pos.copy();

        this.update = function () {
            this.vel.add(this.acc);
            this.vel.limit(this.maxspeed);
            this.pos.add(this.vel);
            this.acc.mult(0);
        };

        this.follow = function (vectors) {
            var x = p.floor(this.pos.x / scl);
            var y = p.floor(this.pos.y / scl);
            var index = x + y * cols;
            var force = vectors[index];
            this.applyForce(force);
        };

        this.applyForce = function (force) {
            this.acc.add(force);
        };

        this.show = function () {
            p.stroke(this.h, 20);
            this.h = this.h + 1;
            if (this.h > 255) {
                this.h = 0;
            }
            p.strokeWeight(1);
            p.line(this.pos.x, this.pos.y, this.prevPos.x, this.prevPos.y);
            this.updatePrev();
        };

        this.updatePrev = function () {
            this.prevPos.x = this.pos.x;
            this.prevPos.y = this.pos.y;
        };

        this.edges = function () {
            if (this.pos.x > p.width) {
                this.pos.x = 0;
                this.updatePrev();
            }
            if (this.pos.x < 0) {
                this.pos.x = p.width;
                this.updatePrev();
            }
            if (this.pos.y > p.height) {
                this.pos.y = 0;
                this.updatePrev();
            }
            if (this.pos.y < 0) {
                this.pos.y = p.height;
                this.updatePrev();
            }
        };
    }
};