let P5Simulated;

window.SetP5Simulated = () => {
    DisposeJs();
    P5Simulated = new p5(simulated, window.document.getElementById('p5-sketch'));
};

let simulated = function (p) {

    let button;
    let startTime = 0;
    let rate = 1;
    let loopLength;
    let duration;
    let panning = 0;
    let playing = false;
    let delay = new p5.Delay();
    let sample = p.loadSound("audio/nambien02.wav");

    p.setup = function () {
        p.createCanvas(p.windowWidth * 0.99, p.windowHeight * 0.99);
        p.frameRate(60);
        p.background(0);
        duration = sample.duration();
    }

    p.windowResized = function () {
        p.createCanvas(p.windowWidth * 0.99, p.windowHeight * 0.99);
        p.background(0);
    }

    p.draw = function () {
        startTime = p.constrain(p.map(p.mouseX, 0, p.width, 0, duration), 0, duration - 0.5);
        if (playing) {
            sample.jump(startTime, 0.1);
            delay.process(sample, 0.12, 0.7, 2300);
            console.log("playing...");
        }
    }

    p.mousePressed = function () {
        if (sample.isPlaying()) {
            sample.stop();
            p.background(255, 0, 0);
            playing = false;
        } else {
            sample.play();
            p.background(0, 255, 0);
            playing = true;
            startTime = p.random(0, duration);
            rate = p.random(0.1, 5);
            sample.rate(rate);
        }
    }
};