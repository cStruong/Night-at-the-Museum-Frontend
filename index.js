robberX = 35;
robberY = 514;
let guardX = 800;
let guardY = 466;
//characters speed
let robberSpeed = 5;
let isAsleep = true;
let hiddenStatus = false;
let stealing = false;
let stealCounter = 0;
let totalScore = 0;
let columnStatus1 = true;
let columnStatus2 = true;
let columnStatus3 = true;
let columnStatus4 = true;
let columnStatus5 = true;

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
  column = loadImage('assets/column.png')
  einsteinItemImage = loadImage('assets/einstein-item.png');
  minecraftItemImage = loadImage('assets/minecraft-item.png');
  monalisaItemImage = loadImage('assets/monalisa-item.png');
  screamItemImage = loadImage('assets/scream-item.png');
  artisticItemImage = loadImage('assets/artisticscream-item.png');

  standSprite = createSprite(robberX, robberY, 35, 60);
  standSprite.addImage(standImage);

  laydownSprite = createSprite(robberX, robberY, 60, 35);
  laydownSprite.addImage(laydownImage);

  walkSprite = createSprite(robberX, robberY, 35, 60);
  walkSprite.addAnimation('walk', walkImage)

  revWalkSprite = createSprite(robberX, robberY, 35, 60);
  revWalkSprite.addAnimation('revWalk', revWalkImage)


  stealSprite = createSprite(robberX - 20, robberY, 35, 60);
  stealSprite.addAnimation('steal', stealImage)

  floorSprite = createSprite(800, 597, 1600, 100);
  bulletSprite = createSprite(450, 500, 775 ,2);
  bulletSprite.shapeColor = color(51);
  columnSprite1 = createSprite(200, 507, 45, 60);
  // columnSprite1.addImage(column);
  columnSprite2 = createSprite(325, 507, 45, 60);
  // columnSprite2.addImage(column);
  columnSprite3 = createSprite(450, 507, 45, 60);
  // columnSprite3.addImage(column);
  columnSprite4 = createSprite(575, 507, 45, 60);
  // columnSprite4.addImage(column);
  columnSprite5= createSprite(700, 507, 45, 60);
  // columnSprite5.addImage(column);

  einsteinItemSprite = createSprite(200, 426, 25, 25);
  einsteinItemSprite.addImage(einsteinItemImage);

  minecraftItemSprite = createSprite(325, 426, 25, 25);
  minecraftItemSprite.addImage(minecraftItemImage);

  monalisaItemSprite = createSprite(450, 426, 25, 25);
  monalisaItemSprite.addImage(monalisaItemImage);

  screamItemSprite = createSprite(575, 426, 25, 25);
  screamItemSprite.addImage(screamItemImage);

  artisticItemSprite = createSprite(701, 426, 25, 25);
  artisticItemSprite.addImage(artisticItemImage);
}

function setup() {
  createCanvas(920, 640);
}

function createTimer(counter) {
  const interval = setInterval(function(){
    console.log(counter)
    if (counter > 0){
      counter -= 1;
    } else {
      clearInterval(interval)
    }
  }, 1000);
}

function draw(){
  background(bg);

  drawSprite(floorSprite);
  drawSprite(einsteinItemSprite);
  drawSprite(minecraftItemSprite);
  drawSprite(monalisaItemSprite);
  drawSprite(screamItemSprite);
  drawSprite(artisticItemSprite);
  // drawSprite(columnSprite1)
  image(column, 160, 467);
  // drawSprite(columnSprite2);
  image(column, 285, 467);
  // drawSprite(columnSprite3);
  image(column, 410, 467);
  // drawSprite(columnSprite4);
  image(column, 535, 467);
  // drawSprite(columnSprite5);
  image(column, 660, 467);
  

  if (isAsleep === true) {
    image(sleepImage, guardX, guardY+10)
  } else if (isAsleep === false) {
    bulletSprite.visible = false;
    image(awakeImage, guardX, guardY)
  }

  if (keyIsDown(LEFT_ARROW)) {
    stealing = false;
    walkSprite.position.x -= robberSpeed
    robberX -= robberSpeed
    // robberX = robberX - robberSpeed;
    let tempY = robberY
    let tempX = robberX - 40
    animation(revWalkImage, tempX, tempY);
  } else if (keyIsDown(RIGHT_ARROW)) {
    stealing = false;
    walkSprite.position.x += robberSpeed
    robberX += robberSpeed
    drawSprite(walkSprite)
    // robberX = robberX + robberSpeed;
    // let tempX = robberX + 40
    // let tempY = robberY + 40
    // animation(walkImage, tempX, tempY);
  } else if (keyIsDown(DOWN_ARROW)) {
    stealing = false;
    hiddenStatus = true;
    laydownSprite.remove();
    laydownSprite = createSprite(robberX, robberY, 60, 35);
    laydownSprite.addImage(laydownImage);
    drawSprite(laydownSprite)
  } else if (keyIsPressed === false) {
    stealCounter = 0;
    stealing = false;
    hiddenStatus = false;
    standSprite.remove();
    standSprite = createSprite(robberX, robberY, 35, 60);
    standSprite.addImage(standImage);
    drawSprite(standSprite);
    // image(standImage, robberX, robberY);
  } else if (keyIsDown(UP_ARROW)) {
    stealCounter += 1;
    console.log(stealCounter);
    stealing = true;
    stealSprite.remove();
    stealTempX = robberX - 20
    stealSprite = createSprite(stealTempX, robberY, 25, 60);
    // stealSprite.addImage(stealImage)
    // drawSprite(stealSprite);
    image(stealImage, robberX - 40, robberY - 40);
  }

  if (bulletSprite.overlap(standSprite) && isAsleep === false) {
    if (hiddenStatus === false) {
      // console.log('HIT')
    } else {
      // console.log('MISS')
    }
  }
  if (stealSprite.overlap(columnSprite1) && stealing === true && columnStatus1 === true) {
    if (stealCounter === 170) {
        console.log('works')
        stealCounter = 0;
        totalScore += 100;
        console.log(totalScore)
        columnStatus1 = false;
        console.log(columnStatus1);
      }
  }
  if (stealSprite.overlap(columnSprite2) && stealing === true && columnStatus2 === true) {
    if (stealCounter === 170) {
        console.log('works')
        stealCounter = 0;
        totalScore += 100;
        console.log(totalScore)
        columnStatus2 = false;
        console.log(columnStatus2);
      }
  }
  if (stealSprite.overlap(columnSprite3) && stealing === true && columnStatus3 === true) {
    if (stealCounter === 170) {
        console.log('works')
        stealCounter = 0;
        totalScore += 100;
        console.log(totalScore)
        columnStatus3 = false;
        console.log(columnStatus3);
      }
  }
  if (stealSprite.overlap(columnSprite4) && stealing === true && columnStatus4 === true) {
    if (stealCounter === 170) {
        console.log('works')
        stealCounter = 0;
        totalScore += 100;
        console.log(totalScore)
        columnStatus4 = false;
        console.log(columnStatus4);
      }
  }
  if (stealSprite.overlap(columnSprite5) && stealing === true && columnStatus5 === true) {
    if (stealCounter === 170) {
        console.log('works')
        stealCounter = 0;
        totalScore += 100;
        console.log(totalScore)
        columnStatus5 = false;
        console.log(columnStatus5);
      }
  }
}