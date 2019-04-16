
let robberX = 35;
let robberY = 450;
let guardX = 800;
let guardY = 450;
//characters speed
let robberSpeed = 1;
let isAsleep = true;
let hiddenStatus = false;

let standSprite;
let laydownSprite;
let walkSprite; 
let stealSprite;
let sleepSprite;
let awakeSprite;
let bg;



setInterval(function() {
    let randomNum = Math.floor(Math.random() * 9) + 1;
    if (isAsleep === true && randomNum === 1) {
      waker();
    }
},1000)

function waker() {
  isAsleep = false;
  let randomNum = Math.floor(Math.random() * 5) + 1;
  let counter = randomNum;
  setTimeout(function() {
    isAsleep = true;
  },randomNum * 1000);
};

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
    hiddenStatus = true;
    console.log(hiddenStatus);
    image(laydownSprite, robberX, robberY);
  } else if (keyIsPressed === false) {
    image(standSprite, robberX, robberY);
  } else if (keyIsDown(UP_ARROW)) {
    image(stealSprite, robberX, robberY);
  } else {
    image(standSprite, robberX, robberY);
  }
}