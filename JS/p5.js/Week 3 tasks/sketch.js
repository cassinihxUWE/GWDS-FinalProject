        // T4: let fluidWeight;
        // T4: let x = 0;
        // T4: let easing = 0.2;
        // T4: let y = 0;
let x; x>480;

function eyes(x,y,eyecolour,sizeW,sizeH){
  fill(255) 
  ellipse (x,y,45,30)
  ellipse (x+45,y,45,30)

  fill(0,222,255)
 ellipse (x,y,25,25)
 ellipse (x+45,y,25,25)
 

  fill(0)
  ellipse (x,y,10,10)
  ellipse (x+45,y,10,10)

}

function setup() {
        // T4:  createCanvas(800,800);
        // T4:background(255);
// T3 fill(20);
// T3 noStroke();
              // T5: createCanvas(480, 480);
              // T5: strokeWeight(30);
              // T5: background(204);
      createCanvas(480,480);
      x = width/2;
}

function draw() {
        // T4: let targetX = mouseX
        // T4:let targetY = mouseY
        // T4:x += (targetX - x) * easing;
        // T4:y += (targetY - y) * easing;
        // T4:ellipse(x,y,12,12);
// T3 stroke(255,0,0,50);
// T3 fluidWeight = dist(mouseX,mouseY,pmouseX,pmouseY);
// T3 strokeWeight(fluidWeight);
// T3 line (mouseX, mouseY, pmouseX, pmouseY);
        // T4:console.log(targetX + " : " + x);
              // T5: stroke(102);
              // T5: line(40,0,70,height);
      
              // T5: if (mouseIsPressed == true){
              // T5: stroke(0);
              // T5:} 
              // T5: else if (keyIsPressed == true){
              // T5: stroke(0,255,0)
              // T5:}
              // T5: else {
              // T5: stroke(255);
              // T5:}
      
              // T5: line(0,70,width,50);

      background(204);

      line(x,0,x,height);
      if (mouseX > x){
        x = (x + 1)
      }
      else {
        x = (x - 1)
      }

//       if (mouseIsPressed === true){
//         background(random(255),random(255),random(255));
//       }
//       else{
//         background(204);
//       }
      eyes(mouseX-22.5,mouseY,30,30);
}
