// declaring globally
let BackColorTop, BackColorBottom, colorRatio; // declaring variables for the colours used for the background gradient 
let synthTrack; // declaring my audio
let myFont; // declaring my font

// Synthwave audio track credit: https://snapmuse.com/track/dark-dancer-1903559
// credit for Font: https://youssef-habchi.com

function preload() { // Preload function to ensure resources avaliable for setup and draw
  soundFormats("mp3"); //defining format of the audio
  synthTrack = loadSound("/JS/p5.js/project/assets/darkdancer.mp3"); //loading the sound from my assets directory
  myFont = loadFont("/JS/p5.js/project/assets/Streamster.otf"); //loading the font from my assets directory
} // closing my preload

function setup() { // opening setup function
  createCanvas(1024, 768); //Defines the size of my overall canvas. I chose a typical screen res.
  background(43, 3, 143); //Background color (pre-gradient)
  BackColorTop = color(43, 3, 143); //assigning colour to variable for gradient
  BackColorBottom = color(235, 0, 94); //assigning colour to variable for gradient

  //for loop for each line of canvas where y starts @ 0 to a max of 800 in increments
  for (let y = 0; y < 768; y++) { //opening for loop for gradient, incrementing each instance of line up to the max of the canvas size 
    colorRatio = map(y, 0, 768, 0, 1); //mapping y to a 0-1 ratio
    let mixedcolor = lerpColor(BackColorTop, BackColorBottom, colorRatio); //Declares mixedcolour and applies lerp mathematics to create gradient
    stroke(mixedcolor); //Set brush colour for each line
    line(0, y, 1024, y); //Draws the final gradient 
  } // closing my for loop for gradient 

  //Synthwave Sun no1
  noStroke(); // No outline for the main sun image 
  fill(255, 102, 0, 150); //orange color of the sun
} // closing setup function

function draw() { // opening draw
  fill(random(140, 255), random(30, 211), random(25, 255));  // create random colour within a certain range that fits the theme for the text
  strokeWeight(0); // Defining no outline on the text
  textFont(myFont); // Calling in my custom front from assets declared globally and preloaded in the preload function
  textSize(50); // Sizes the text 
  text("Press no1 to start the audio track or no2 to end the track", 65, 70); // This is the text and it's positioning.
  text("Press 3 to pause track, and 1 to resume.", 155, 130); // This is the 2nd line of text and it's positioning.
  textSize(40); // Sizes the text 

  //Line to seperate the colour grid
  strokeWeight(10); // Nice thick line to seperate the North/South of the centrepoint of the artwork. 
  line(0, height / 2, 1024, height / 2); // actual line itself. 

  // Draws grid pattern using a certain colour range
  for (let x = 25; x < width; x = x + 25) { // starting my nested loop defining variables for locations of each section of the grid pattern. 
    for (let y = 25; y < height; y = y + 25) { // 2nd part of nested loop this defines the virticle individual lines
      frameRate(15); //Sets a framerate for the colour change. 
      skyScape(x, y + height / 2, 25); // Calls my custom function for the colour grid and defines its parameters inc unit
      skyScape(x, y + height / 2 + 25, 0); // Calls my custom function for the colour grid and defines its parameters inc unit
    }// closing the internal nested loop
  } // closing the entire nested loop 

  // drawing arc's around the sun with certain colour scheme
  strokeWeight(5); // setting thickness of the random colour lines around the sun
  fill(255, 102, 0, 100); // fills the stroke
  arc( //start of my arc 
    1024 / 2, // setting location based on width / 2
    700 / 2, // setting location based on height / 2
    random(300, 400), // Creates a random movement effect
    random(300, 400), // Creates a random movement effect
    radians(170), // angle of my arc (sun) start
    radians(370), // angle of my arc (sun) end 
    OPEN // Opens my arc (creates semi-circle)
  ); //closing my arc 

  //Switch to enable/disable song
  switch (key) { // opens key switch feature
    case "1": // pressing 1 will call in my synthtrack. 
      if (!synthTrack.isPlaying()) synthTrack.play(); //if loop to check if already playing so it doesn't play thousands of times over itself
      break; // ends my 'press1' key
    case "2": // 2nd case for the stop music function
      synthTrack.stop(); // Stops the synthTrack function from running on keypress of 2. 
      break; // breaks the action from pressing 2.
    case "3": // 3rd case for the pause & play music function
      synthTrack.pause(); // Stops the synthTrack function from running on keypress of 2. 
      break; // breaks the action from pressing 2.
  } // Closing my switch
} // closing draw
//Colour grid function. 
function skyScape(xVal, yVal, unit) { //Creating my function for the colour grid
  stroke(random(140, 255), random(30, 211), random(25, 255)); // Setting the random colour for each line drawn
  strokeWeight(random(2)); // Setting the weight of my lines. 
  line(xVal - 25, yVal, xVal + 25, yVal); // calculations for the line drawing 
  line(xVal, yVal - unit, xVal, yVal + unit); // calculations for the line drawing 
  line(xVal + unit, yVal - unit, xVal + unit, yVal + unit); // calculations for the line drawing 
} // Closing my function
