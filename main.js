function setup()
{
    video = createCapture(VIDEO);
    video.size(550 , 500);
    video.position(65,200);
    
    canvas = createCanvas(550,500);
    canvas.position(800,200);

    poseNet = ml5.poseNet(video , modelLoaded);
    poseNet.on('pose' , gotPoses);

}

function draw()
{
    background('#5196e3');
}

function modelLoaded()
{
    console.log("PoseNet Is Initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
     {
        console.log(results);
     }
}