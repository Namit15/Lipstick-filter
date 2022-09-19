lipstick_x = 0;
lipstick_y = 0;

function preload()
{
    lipstick = loadImage("https://i.pinimg.com/originals/5b/13/58/5b135831a2c9179fd8d44131a4dd7e28.png")
}

function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    camera=createCapture(VIDEO);
    camera.size(300,300);
    camera.hide();
    poseNet = ml5.poseNet(camera,modelLodded);
    poseNet.on("pose",gotPoses)
}

function modelLodded()
{
    console.log("YOUR MODEL IS LODDED");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        lipstick_x=results[0].pose.nose.x-15;
        lipstick_y=results[0].pose.nose.y+30;
    }
}

function draw()
{
    image(camera,0,0,300,300);
    image(lipstick,lipstick_x,lipstick_y,45,30);
}

function take_snapshot()
{
    save("lipstick.png")
}