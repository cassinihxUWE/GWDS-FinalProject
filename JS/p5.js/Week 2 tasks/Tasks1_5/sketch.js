let STEVEYG = 100;
let rectHeight = 100;

function setup() {
  angleMode(DEGREES);
  createCanvas(1024,768);
  background(11,11,69);
  noLoop();
}

function draw() {
  //Challenge 1: 
  fill(255,0,0);
  ellipse(400,400,800,800);
  fill(0);
  text("Hello World... :'(", 370,400);

  //Challenge 2:
  fill(230,120,0);
  triangle (30, 75, 58, 25, 86, 75);
  fill(100,100,0);
  quad (500, 100, 500, 300, 240, 300, 240, 100);
  fill (255,255,0);
  line (800, 800, 0, 0);
  arc(600, 600, 80, 80, 20, 330, PIE);

  //Challenge 3 & 4:
  fill(255,255,255) ;
  rect(100, 100, rectHeight + 10, STEVEYG);
  fill(255,255,255) ;
  rect(100, 250, rectHeight, STEVEYG);
  fill(255,255,255) ;
  rect(100, 400, rectHeight * 2, STEVEYG);
  fill(255,255,255) ;
  rect(100, 600, rectHeight, STEVEYG / 2);

  //challenge 5: 
  drawShape(STEVEYG,rectHeight)
}

function drawShape(rectangleWidth,rectangleHeight) {
  let xPos = random(0, width);
  let yPos = random(0, height);
  rect (xPos,yPos,STEVEYG,rectHeight);
}

