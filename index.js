
let robberX = 35;
let robberY = 450;
let guardX = 800;
let guardY = 450;
//characters speed
let robberSpeed = 1;

let standImage;
let laydownImage;
let walkImage; 
let stealImage;
let sleepImage;
let awakeImage;
let bg;

let isAsleep = true;

let randomGuardwaker = setInterval(function() {
  let randomNum = Math.floor(Math.random() * 10) + 1;
  if (randomNum === 3 && isAsleep === true) {
    waker();
  }
},1000)

function preload() {
  standImage = loadImage('assets/stand.png');
  laydownImage = loadImage('assets/laydown.png');
  stealImage = loadImage('assets/steal.png');
  sleepImage = loadImage('assets/sleeping.png');
  awakeImage = loadImage('assets/awake.png');
  walkImage = loadAnimation('assets/walk1.png','assets/walk2.png', 'assets/walk3.png');
  revWalkSprite = loadAnimation('assets/revwalk1.png', 'assets/revwalk2.png', 'assets/revwalk3.png');
  bg = loadImage('assets/bg.jpg');
  characterSprite = createSprite (0, 0, 40, 80);
}

function setup() {
  createCanvas(920, 640);

}

function waker() {
  isAsleep = false;
  let randomNum = Math.floor(Math.random() * 10) + 1;
  let counter = randomNum;
  setTimeout(function() {
      isAsleep = true;
  },randomNum * 1000); 
};

function draw(){
  background(bg);

  if (isAsleep === true) {
    image(sleepImage, guardX, guardY)
  } else if (isAsleep === false) {
    image(awakeImage, guardX, guardY)
  }

  if (keyIsDown(LEFT_ARROW)) {
    robberX = robberX - robberSpeed;
    let tempY = robberY + 40
    let tempX = robberX
    animation(revWalkSprite, tempX, tempY);
  } else if (keyIsDown(RIGHT_ARROW)) {
    robberX = robberX + robberSpeed;
    let tempX = robberX + 40
    let tempY = robberY + 40
    animation(walkImage, tempX, tempY);
  } else if (keyIsDown(DOWN_ARROW)) {
    image(laydownImage, robberX, robberY);
  } else if (keyIsPressed === false) {
    image(standImage, robberX, robberY);
  } else if (keyIsDown(UP_ARROW)) {
    image(stealImage, robberX, robberY);
  } else {
    image(standImage, robberX, robberY);
  }

}



/*
let guardVisionX = 1390;
let guardVisionY = 300;
let guardVisionSpeed = 2;

function setup() {
 createCanvas(1425, 400);
}
function draw(){
 background('gray');
 if (keyIsDown(LEFT_ARROW)) {
   robberX = robberX - robberSpeed;
 }
 else if (keyIsDown(RIGHT_ARROW)) {
   robberX = robberX + robberSpeed;
 }
 else if (keyIsDown(DOWN_ARROW)) {
   var i;
   for (i = 0; i < 25; i++){
     guardVisionX = guardVisionX - robberSpeed;
   }
   hiddenStatus = true;
 }
 hiddenStatus = false;
 let robber = ellipse(robberX, robberY, 50, 50);
 let guard = ellipse(guardX, guardY, 50, 50);
 let guardVision = ellipse(guardVisionX, guardVisionY, 20, 5);
}
*/