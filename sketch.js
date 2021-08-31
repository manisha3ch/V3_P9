
var btnRedColor;
var btnGreenColor;
var btnBlueColor;
var btnRandomColor;

var r=255,g=255,b=255;

function setup() {
  createCanvas(400,400);

  btnRedColor = createButton("RED");
  btnRedColor.position(10,350);
  btnRedColor.size(75);
  btnRedColor.mousePressed(red_bg);
 
  btnGreenColor = createButton("GREEN");
  btnGreenColor.position(100,350);
  btnGreenColor.size(75);
  btnGreenColor.mousePressed(green_bg);

  btnBlueColor = createButton("BLUE");
  btnBlueColor.position(200,350);
  btnBlueColor.size(75);
  btnBlueColor.mousePressed(blue_bg);


  btnRandomColor = createButton("RANDOM");
  btnRandomColor.position(300,350);
  btnRandomColor.size(75);
  btnRandomColor.mousePressed(random_bg);


}

function draw() 
{
  background(r,g,b);
}

function red_bg()
{
  console.log("red");
  r = 255;
  g = 0;
  b =0;
}

function green_bg()
{
  r = 0;
  g = 255;
  b =0;
}

function blue_bg()
{
  r = 0;
  g = 0;
  b =255;
}

function random_bg()
{
  r = random(0,255);
  g = random(0,255);
  b = random(0,255);
}




