function setup()
{
  canvas= createCanvas(800, 700);
  canvas.position(575,150)
    video= createCapture(VIDEO);
    video.hide();
}
function draw()
{
  image(video, 200, 200, 400, 300);
  fill("green");
  stroke("green");
  circle(700,600,100);
  circle(110,600,100);
  circle(110,110,100);
  circle(700,110,100);
  rect(110, 110, 600, 25);
  rect(110, 590, 600, 25);
  rect(100, 100, 25, 500);
  rect(700, 100, 25, 500);
}
function take_snapshot()
{
  save("snapshot.jpg");
}
