robberX = 35;
robberY = 514;
let guardX = 800;
let guardY = 466;
//characters speed
let robberSpeed = 5;
let isAsleep = true;
let hiddenStatus = false;

let standImage;
let laydownImage;
let walkImage; 
let stealImage;
let sleepImage;
let awakeImage;
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
  //IMAGES
  standImage = loadImage('assets/stand.png');
  laydownImage = loadImage('assets/laydown.png');
  stealImage = loadImage('assets/steal.png');
  sleepImage = loadImage('assets/sleeping.png');
  awakeImage = loadImage('assets/awake.png');
  walkImage = loadAnimation('assets/walk1.png','assets/walk2.png', 'assets/walk3.png');
  revWalkImage = loadAnimation('assets/revwalk1.png', 'assets/revwalk2.png', 'assets/revwalk3.png');
  bg = loadImage('assets/bg.jpg');

  standSprite = createSprite(robberX, robberY, 35, 60);
  standSprite.addImage(standImage);

  laydownSprite = createSprite(robberX, robberY, 60, 35);
  laydownSprite.addImage(laydownImage);

  walkSprite = createSprite(robberX, robberY, 35, 60);
  walkSprite.addAnimation('walk', walkImage)

  revWalkSprite = createSprite(robberX, robberY, 35, 60);
  revWalkSprite.addAnimation('revWalk', revWalkImage)

  floorSprite = createSprite(800, 597, 1600, 100);
  bulletSprite = createSprite(780, 500, 100 ,2);
  bulletSprite.shapeColor = color(400);
}

function setup() {
  createCanvas(920, 640);
}



function draw(){
  background(bg);

  drawSprite(floorSprite);
  drawSprite(bulletSprite);

  if (isAsleep === true) {
    image(sleepImage, guardX, guardY+10)
  } else if (isAsleep === false) {
    image(awakeImage, guardX, guardY)
  }

  if (keyIsDown(LEFT_ARROW)) {
    walkSprite.position.x -= robberSpeed
    robberX -= robberSpeed
    // robberX = robberX - robberSpeed;
    let tempY = robberY
    let tempX = robberX - 40
    animation(revWalkImage, tempX, tempY);
  } else if (keyIsDown(RIGHT_ARROW)) {
    walkSprite.position.x += robberSpeed
    robberX += robberSpeed
    drawSprite(walkSprite)
    // robberX = robberX + robberSpeed;
    // let tempX = robberX + 40
    // let tempY = robberY + 40
    // animation(walkImage, tempX, tempY);
  } else if (keyIsDown(DOWN_ARROW)) {
    laydownSprite.remove();
    laydownSprite = createSprite(robberX, robberY, 60, 35);
    laydownSprite.addImage(laydownImage);
    drawSprite(laydownSprite)
  } else if (keyIsPressed === false) {
    standSprite.remove();
    standSprite = createSprite(robberX, robberY, 35, 60);
    standSprite.addImage(standImage);
    drawSprite(standSprite);
    // image(standImage, robberX, robberY);
  } else if (keyIsDown(UP_ARROW)) {
    // image(stealImage, robberX, robberY);
  }
}