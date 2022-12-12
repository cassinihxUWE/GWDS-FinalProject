let x,y,size;
let xSpeed,ySpeed,xDir,yDir;
let shapey1;
let shapeArr = [];
let circ;
let col;
let circArray = [];

function setup() {
        createCanvas(400,400)
        background(255)
        x = width/2; //middle? 
        y = height/2; //centre
        size = 10; 
        xSpeed = random(0.3,5);
        ySpeed = random(0.3,5);
        xDir = 1;
        yDir = 1;
        col = color(random(0,255), random(0,255), random(0,255));

        
       // shapey1 = new movingShape();
        for(let shapey = 0; shapey < 50; shapey++){
                shapeArr.push(new movingShape(random(0,width),random(0,height),random(1,40)));
        }
        for(let circ = 0; circ < 50; circ++){
                circArray.push(new movingCircle(random(0,width),random(0,height),random(1,40), col));
        }
}

function draw() {
        noStroke(); 
        rectMode(CORNER);
        fill(255,80);
        rect(0,0,width,height);
        // move();
        // display();
        // shapey1.move();
        // shapey1.display();
        for(let shapey = 0; shapey < 50; shapey++){
                shapeArr[shapey].move();
                shapeArr[shapey].display();
        }
        for(let circ = 0; circ < 50; circ++){
                circArray[circ].move();
                circArray[circ].display();
        }

}

 function move() {
        x = x + (xSpeed * xDir);
        y = y + (ySpeed * yDir);

        if(x > (width-size) || x < size){
                xDir = xDir * -1;
            }
    
            if(y > (height-size) || y < size){
                yDir = yDir * -1;
            }
}

function display() { 
        stroke(10);
        rectMode(CENTER);
        fill(0);
        rect(x, y,size,size);
}

class movingShape {
        constructor(startX, startY, startSize){
                // this.x = startX;
                // this.y = startY;
                // this.size = startSize;
                this.x = startX; //middle? 
                this.y = startY; //centre
                this.size = startSize; 
                this.xSpeed = random(0.3,5);
                this.ySpeed = random(0.3,5);
                this.xDir = 1;
                this.yDir = 1;
        }
        move(){
                this.x = this.x + (this.xSpeed * this.xDir);
                this.y = this.y + (this.ySpeed * this.yDir);
        
                if(this.x > (width-(this.size/2)) || this.x < (this.size/2)){
                        this.xDir = this.xDir * -1;
                        
                    }
            
                    if(this.y > (height-(this.size/2)) || this.y < (this.size/2)){
                        this.yDir = this.yDir * -1;
                    }
        }
        display(){
                stroke(10);
                rectMode(CENTER);
                fill(0);
                rect(this.x, this.y, this.size, this.size)
        }
}
class movingCircle extends movingShape {
        constructor(startX,startY,startSize,colour){
                super(startX,startY,startSize);
                this.colour = colour;
        }
        move(){
                super.move();
        }
        display(){
                noStroke();
                fill(this.colour);
                ellipse(this.x,this.y,this.size,this.size);
        }
}