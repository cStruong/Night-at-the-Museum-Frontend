let x = 35;
let y = 365;
//characters speed
let speed = 5;

function setup() {
  createCanvas(1425, 400);
}
function draw(){
  if (keyIsDown(LEFT_ARROW)) {
    x = x - speed;
  }
  else if (keyIsDown(RIGHT_ARROW)) {
    x = x + speed;
  }
  clear();
  ellipse(x, y, 50, 50);
}