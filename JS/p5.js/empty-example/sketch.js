let angle = 0;

function setup() {
  createCanvas(1400,1000);
  background(1,1,1);
  noStroke();
  fill(0, 102);
}

function draw() {
  if (mouseIsPressed === true) {
   angle += 5;
    let val = cos(radians(angle)) * 25.0;
    for (let a = 0; a < 360; a += 75) {
      let xoff = cos(radians(a)) * val;
      let yoff = sin(radians(a)) * val;
      fill(200,0,0);
      ellipse(mouseX + xoff, mouseY + yoff, val, val);
    }
    fill(0,150,0);
    ellipse(mouseX, mouseY, 20, 20);
      if (mouseButton === RIGHT){
      console.log('Value of Angle Variable: ' + angle);
      console.log('Value of Val Variable: ' + val);
      }
 }
else {
  background(25,25,1);
  }
}
