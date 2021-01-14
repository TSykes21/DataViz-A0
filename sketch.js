var angle = 0;
var startHourX = 100;
var startHourY = 100;
var startMinX = 400;
var startMinY = 400;
var hourScalar = 80;


function setup() {
	createCanvas(800,600); // make an HTML canvas element width x height pixels
    //angleMode(DEGREES);
}

function starSeconds() {
  for(var i = 0; i < second(); i++)
    {
      
      
    }
}
let secondOrbit;

function draw() {
	background(225);
	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(0);
	text(second(), 10, 90);
    
    for (var i = 0; i < second(); i++){
      secondOrbit = p5.Vector.fromAngle(radians(i*6)-HALF_PI, 30);
      console.log(secondOrbit)
      
      circle(secondOrbit.x+200, secondOrbit.y+200, 10);
      
    }
    fill(255);  
    circle(secondOrbit.x+200, secondOrbit.y+200, 20);
  
    
}