function sketch(parent) {
  return function (p) {
    var canvas;
    let page = 0;
    let oldPage = 0;
    let panHeight = 0;
    let panShow = false;
    let panGrow = false;
    let panShrink = false;

    p.setup = function () {
      resizeWindow();
      page = 0;
    };

    p.draw = function () {
      p.background(0, 10);
      
      //Background Animation
      p.stroke(255);
      p.strokeWeight(1);
      let r = p.floor(p.random(10));
      if (r < 2) {
        if (r == 0) {
          let rh = p.random(p.height * 0.95) + (p.height * 0.05);
          p.line(0, rh, p.width, rh);
        } else if (r == 1) {
          let rw = p.random(p.width);
          p.line(rw, p.height * 0.05, rw, p.height);
        }
      }

      //NavBarBoxes
      p.stroke(255);
      p.strokeWeight(1);
      p.rectMode(p.CORNER);
      p.fill((page == 1) * 255);
      p.rect(0, 0, p.width * 0.25, p.height * 0.05);
      p.fill((page == 2) * 255);
      p.rect(p.width * 0.25, 0, p.width * 0.25, p.height * 0.05);
      p.fill((page == 3) * 255);
      p.rect(p.width * 0.5, 0, p.width * 0.25, p.height * 0.05);
      p.fill((page == 4) * 255);
      p.rect(p.width * 0.75, 0, p.width * 0.25, p.height * 0.05);
      //NavBarText
      p.noStroke();
      p.textSize(p.width * 0.025);
      if (page == 1) { p.fill(0); }
      else { p.fill(255); }
      p.text("Audio", p.width * 0.01, p.height * 0.04);
      if (page == 2) { p.fill(0); }
      else { p.fill(255); }
      p.text("Video", p.width * 0.26, p.height * 0.04);
      if (page == 3) { p.fill(0); }
      else { p.fill(255); }
      p.text("Live", p.width * 0.51, p.height * 0.04);
      if (page == 4) { p.fill(0); }
      else { p.fill(255); }
      p.text("Contact", p.width * 0.76, p.height * 0.04);

      //Open Panel Animations
      if(page!=0&&oldPage==0){
        panGrow = true;
        panShrink = false;
      } else if(page==0&&oldPage!=0){
        panGrow = false;
        panShrink = true;
        panShow = false;
      }
      if(panGrow){
        if(panHeight<p.height*0.45){
          panHeight+=10;
        } else {
          panHeight = p.height*0.45;
          panGrow = false;
          panShow = true;
        }
      }
      if(panShrink){
        if(panHeight>0){
          panHeight-=10;
        } else {
          panHeight = 0;
          panShrink = false;
        }
      }
      //Draw Tab Panel
      p.fill(0);
      p.stroke(255);
      p.strokeWeight(1);
      p.rect(0,p.height*0.05,p.width,panHeight);

      if(panShow){
        p.fill(255);
        p.noStroke();
        if(page==1){
          p.text("Releases:",p.width*0.01,p.height*0.1);
        }
      }

      oldPage = page;
    };

    p.mouseClicked = function () {
      if (p.mouseX > 0 && p.mouseX < p.width * 0.25 && p.mouseY > 0 && p.mouseY < p.height * 0.05) {
        if (page == 1) { page = 0; }
        else { page = 1; }
      }
      else if (p.mouseX > p.width * 0.25 && p.mouseX < p.width * 0.5 && p.mouseY > 0 && p.mouseY < p.height * 0.05) {
        if (page == 2) { page = 0; }
        else { page = 2; }
      }
      else if (p.mouseX > p.width * 0.5 && p.mouseX < p.width * 0.75 && p.mouseY > 0 && p.mouseY < p.height * 0.05) {
        if (page == 3) { page = 0; }
        else { page = 3; }
      }
      else if (p.mouseX > p.width * 0.75 && p.mouseX < p.width && p.mouseY > 0 && p.mouseY < p.height * 0.05) {
        if (page == 4) { page = 0; }
        else { page = 4; }
      }
      // parent.$emit('update:x', p.round(p.mouseX));
      // parent.$emit('update:y', p.round(p.mouseY));
    };

    p.windowResized = function () {
      resizeWindow();
    };

    resizeWindow = function () {
      canvas = p.createCanvas(p.windowWidth * 0.95, p.windowHeight * 0.95);
      canvas.parent(parent.$el);
      p.rectMode(p.CENTER);
    }
  };
}
