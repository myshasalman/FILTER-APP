function preload()
{
}
function setup()
{
    canvas=createCanvas(300,300);
    canvas.center();
    cam=createCapture(VIDEO);
    cam.size(300,300);
    cam.hide();
    model= ml5.poseNet(cam,modelloaded);
    model.on("pose",gotposes);
}
function draw()
{
    image(cam,0,0,300,300)
}
function download()
{
    save("My_pic.jpeg");
}
function modelloaded()
{
    console.log("posenet is initialized")
}
function gotposes(result)
{
    if(result.length>0)
    {
        console.log(result);
        console.log("x="+result[0].pose.nose.x);
        console.log("y="+result[0].pose.nose.y);
    }
}
