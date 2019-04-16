
let robberX = 35;
let robberY = 450;
let guardX = 800;
let guardY = 450;
//characters speed
let robberSpeed = 1;

let standSprite;
let laydownSprite;
let walkSprite; 
let stealSprite;
let sleepSprite;
let awakeSprite;
let bg;

let isAsleep = true;

setInterval(function() {
  let randomNum = Math.floor(Math.random() * 17) + 1;
  console.log(randomNum)
  if (randomNum === 13 && isAsleep === true) {
    console.log('test');
    waker();
  }
},1000)

function preload() {
  standSprite = loadImage('assets/stand.png');
  laydownSprite = loadImage('assets/laydown.png');
  stealSprite = loadImage('assets/steal.png');
  sleepSprite = loadImage('assets/sleeping.png');
  awakeSprite = loadImage('assets/awake.png');
  walkSprite = loadAnimation('assets/walk1.png','assets/walk2.png', 'assets/walk3.png');
  revWalkSprite = loadAnimation('assets/revwalk1.png', 'assets/revwalk2.png', 'assets/revwalk3.png');
  bg = loadImage('assets/bg.jpg');
}

function setup() {
  createCanvas(920, 640);

}

function waker() {
  isAsleep = false;
  let randomNum = Math.floor(Math.random() * 5) + 1;
  let counter = randomNum;
  let timer = setInterval(function() {
    if (counter != 0) {
    counter -= 1;
    }
    if (counter === 0 ) {
      isAsleep = true;
    }
  },1000); 
};

function draw(){
  background(bg);

  if (isAsleep === true) {
    image(sleepSprite, guardX, guardY)
  } else if (isAsleep === false) {
    image(awakeSprite, guardX, guardY)
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
    animation(walkSprite, tempX, tempY);
  } else if (keyIsDown(DOWN_ARROW)) {
    image(laydownSprite, robberX, robberY);
  } else if (keyIsPressed === false) {
    image(standSprite, robberX, robberY);
  } else if (keyIsDown(UP_ARROW)) {
    image(stealSprite, robberX, robberY);
  } else {
    image(standSprite, robberX, robberY);
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