song1 = "";
song2 = "";

LeftWristX = 0;
LeftWristY = 0;

RightWristX = 0;
RightWristY = 0;

function preload()
{
    song1 = loadSound("ImagineDragons - Believer.mp3");
    song2 = loadSound("music.mp3");
}

function setup()
{
    canvas = createCanvas(700, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded()
{
    console.log('PoseNet Is Initialized.');
}

function draw()
{
    image(video, 0, 0, 700, 500);
}

function gotPoses(results)
{
    if(results > 0)
    {
        LeftWristX = results[0].pose.LeftWrist.x;
        LeftWristY = results[0].pose.LeftWrist.y;
        console.log("LeftWristX = " + LeftWristX + "LeftWristY = " + LeftWristY);

        RightWristX = results[0].pose.RightWrist.x;
        RightWristY = results[0].pose.RightWrist.y;
        console.log("RightWristX = " + RightWristX + "RightWristY = " + RightWristY);
    }
}