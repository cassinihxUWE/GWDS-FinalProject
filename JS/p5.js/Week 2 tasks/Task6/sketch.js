function setup() {
  createCanvas(480,480);
  }

function eyes(x,y,sizeW,sizeH){
  strokeWeight(1.5)
  stroke(141,108,85)
  fill(255);
  ellipse (x,y,45,27);
  ellipse (x+45,y,45,27);

  // This fill is the eye colour
  noStroke()
  fill(198,125,0);
  ellipse (x,y,25,26);
  ellipse (x+45,y,25,26);
      
  fill(0);
  ellipse (x,y,10,10);
  ellipse (x+45,y,10,10);
}

function draw() {
background(204);
//Main body of the head
fill(255,205,148)
stroke(141,108,85)
strokeWeight(2)
ellipse (240,230,100,140);

//Eyes obvs lol 
noStroke()
eyes(217.5,217,30,30);

// Left-Side Hair
strokeWeight(13);
stroke(111,78,55);
noFill()
beginShape();
vertex(180,300)
bezierVertex(182,205,200,140,240,160)
endShape()
beginShape();
vertex(175,290)
bezierVertex(182,205,200,140,240,160)
endShape()
beginShape();
vertex(185,280)
bezierVertex(182,205,200,140,240,160)
endShape()

// Right-Side Hair
beginShape();
vertex(300,300)
bezierVertex(300,200,270,140,240,160)
endShape()
beginShape();
vertex(310,295)
bezierVertex(300,200,270,140,240,160)
endShape()
beginShape();
vertex(293,290)
bezierVertex(300,200,270,140,240,160)
endShape()

//Smirk
strokeWeight(3)
stroke(91,58,45);
fill(200,0,0)
beginShape();
vertex(220,267)
bezierVertex(225,300,270,263,260,267)
endShape(CLOSE)

//Nose
noFill()
strokeWeight(2)
beginShape();
vertex(240,232)
bezierVertex(225,245,225,255,240,252)
endShape()

//signature
stroke(230,230,250)
strokeWeight(2)
fill(0)
textSize(16);
text('Portrait of Stephen, by Stephen.', 250, 470);
}