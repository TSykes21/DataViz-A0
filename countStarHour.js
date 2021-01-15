var backgroundStarsCoordinates = [];
var hourStar = [];
var currMinute;
var currHour;

function setup() {
  createCanvas(windowWidth,windowHeight); // make an HTML canvas element width x height pixels
  for(var i = 0; i < 400; i++) {
    var coord = [random(windowWidth), random(windowHeight)];
    backgroundStarsCoordinates.push(coord);
  }
  
   for(var j = 1; j < 13; j++) {
    var hr = map(j, 0, 11, 0, (TWO_PI-(TWO_PI/12)))-HALF_PI;
    var radiusFactor = Math.min(windowHeight,windowWidth)*0.45;
    var cord = [radiusFactor*cos(hr), radiusFactor*sin(hr)];
    hourStar.push(cord);
  }
  
  currMinute = minute();
  if (hour() > 12){
    currHour = hour()%12;
  }
  else {
    if (hour() == 0) {
      currHour = 12;
    }
    else {
      currHour = hour();
    }
  }  
}

function draw() {
  if (minute() != currMinute) {
    if(currMinute == 59) {
        console.log(0);
    }
    else {
        console.log(currMinute+1);
    }
    currMinute=minute();
  }

  if(hour()!= currHour) {
    if (hour() > 12) {
      currHour = hour()%12;
    }
    else {
      if (hour() == 0) {
      currHour = 12;
    }
    else {
      currHour = hour();
    }
    }
  }

  let backgroundColor = color(1,11,38)
  background(backgroundColor);

  for(var i = 0; i < 400; i++) {
    noStroke();
    fill(255);
    circle(backgroundStarsCoordinates[i][0], backgroundStarsCoordinates[i][1], 2);
  }

  translate(windowWidth/2,windowHeight/2);
  fill(color(241,203,71));
  noStroke();
  circle(0,0, 150);

  var s = map(second(), 0, 59, 0, (TWO_PI-(TWO_PI/60)))-PI;
  var m = map(minute(), 0, 59, 0, (TWO_PI-(TWO_PI/60)))-PI;
  
  for(var j = 0; j < currHour; j++) {
    var place = j%12;
    push();
    translate(hourStar[place][0], hourStar[place][1]);
    noStroke();
    if(place%4==0) {
    fill(color(230,102,98));
  }
    else if(place%4==3) {
    fill(color(170, 201, 229));
  }
    else if(place%4==2) {
      fill(color(239,235,112));
  }
    else {
      fill(color(236, 168,80));
  }
    star(0, 0, 10, 30, 4);
    pop();
    
  }
  
  // Reference for Push-Pop Logic: http://learningprocessing.com/examples/chp14/example-14-16-solar-system
  push();
  rotate(m);
  translate(0, Math.min(windowHeight,windowWidth)*0.3);
  fill(color(70, 149, 216));
  circle(0, 0, 60);

  push();
  rotate(-m+ s);
  translate(0, Math.min(windowHeight,windowWidth)*0.075);
  if (hour() >= 12) {
    fill(210);
  }
  else{
    fill(120);
  }
  
  circle(0,0,30);
  pop();
  pop();
  
}

//Reference: https://p5js.org/examples/form-star.html
function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
