function setup()
{
  canvas= createCanvas(800, 700);
  canvas.position(575,150)
    video= createCapture(VIDEO);
    video.hide();
}
function draw()
{
  image(video, 0, 0, 800, 700);
  circle(800,700,100)
  circle(10,700,100)
  circle(10,10,100)
  circle(800,10,100)
}
function take_snapshot()
{
  save("snapshot.jpg");
}
