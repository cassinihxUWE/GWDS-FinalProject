let x,y,size;
let xSpeed,ySpeed,xDir,yDir;
let shapey1;
let shapeArr = [];
let circ;
let col;
let circArray = [];

function setup() {
	createCanvas(500, 500);
  	background(0);
}

function draw() {
        fill(100,100,100);
        textSize(18);
        text('Press numbers 1 through 4 to scroll',30 ,200);
        text('through various art or 5 to reset canvas',30 ,220);
        switch(key){
                case"1":
                        for (let x = 25; x < width; x = x+50){
                                for (let y = 25; y < height; y = y+50){
                                        frameRate(5)
                                        // fill(random(0,255), random(0,255), random(0,255));
                                        // ellipse(x,y,50,50);
                                        skyScape(x,y,25);
                                        skyScape(x,y+25,0);
                        }
                }
                break;
                case"2":
                for (let x = 25; x < width; x = x+50){
                        for (let y = 25; y < height; y = y+50){
                                frameRate(5)
                                // fill(random(0,255), random(0,255), random(0,255));
                                // ellipse(x,y,50,50);
                                herringBone(x,y,25);
                        }
                }
                break;
                case"3":
                        eyes(mouseX-22.5,mouseY,30,30);
                break;
                case"4":
                        background(204);
                        text('Press numbers 1 through 4 to scroll',30 ,30);
                        text('through various art or 5 to reset canvas',30 ,50);
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
                break;
                case"5":
                        clear();
                        background(0);
                        fill(100,100,100);
                        textSize(18);
                        text('Press numbers 1 through 4 to scroll',30 ,200);
                        text('through various art or 5 to reset canvas',30 ,220);
        break;
        }
}

function skyScape (xVal, yVal, unit){
        let hozlineX1 = 0
        let hozlineY1 = 25
        let hozlineX2 = 25
        let hozlineY2 = 25
        stroke(random(140,255), random(30,211), random(25,255));
        strokeWeight(random(0.5,2));
	line(xVal-25, yVal, xVal+50, yVal);
	line(xVal, yVal - unit, xVal, yVal + unit);
	line(xVal + unit, yVal - unit, xVal + unit, yVal + unit);
}

function herringBone(xVal, yVal, unit) {
	stroke(255);
	strokeWeight(1);
	line(xVal, yVal, xVal - unit, yVal + unit);
	line(xVal, yVal, xVal + unit, yVal + unit);
	line(xVal, yVal - unit, xVal - unit, yVal);
	line(xVal, yVal - unit, xVal + unit, yVal);
	line(xVal, yVal - unit, xVal, yVal + unit);
	line(xVal + unit, yVal - unit, xVal + unit, yVal + unit);
} 

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