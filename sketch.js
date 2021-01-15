var backgroundStarsCoordinates = []
var currMinute;
var currHour;

function setup() {
  createCanvas(windowWidth,windowHeight); // make an HTML canvas element width x height pixels
  for(var i = 0; i < 400; i++) {
    var coord = [random(windowWidth), random(windowHeight)];
    backgroundStarsCoordinates.push(coord);
  }

  currMinute = minute();
  currHour = hour();
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

  let backgroundColor = color(1,11,38)
  background(backgroundColor);

	textSize(32);
	fill(180);
	text(hour(), 10, 30);
	fill(100);
	text(minute(), 10, 60);
	fill(200);
  text(second(), 10, 90);

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
  var h = map(hour(), 0, 11, 0, (TWO_PI-(TWO_PI/12)))-PI;
  
  push();
  rotate(h);
  translate(0, 275);
  noStroke();
  
  if(currHour%4==0) {
    fill(color(170, 201, 229));
  }
  else if(currHour%3==0) {
    fill(color(239,235,112));
  }
  else if(currHour%2==0) {
    fill(color(236, 168,80));
  }
  else {
    fill(color(230,102,98));
  }
  //color(230,102,98) - red
  //color(170, 201, 229) - blue
  //color(239,235,112) - yellow
  //color(236, 168,80) - orange
  //fill(color(236, 168,80));
  star(0, 0, 10, 30, 4);
  //circle(0,0, 50);
  pop();


  push();
  rotate(m);
  translate(0, 150);
  fill(color(70, 149, 216));
  circle(0, 0, 60);

  push();
  rotate(-m+ s);
  translate(0, 50);
  if (currHour >= 12) {
    fill(210);
  }
  else{
    fill(120);
  }
  
  circle(0,0,30);
  pop();
  pop();
  
}

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
