song1 = "";
song2= "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristy = 0;

function preload(){
    song1 = loadSound("TaylorSwift_Style.mp3")
    song2 = loadSound("TaylorSwift_GetawayCar.mp3")
}

function setup(){
    canvas = createCanvas(500,600);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide()
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
 
}

function draw(){
    image(video, 0, 0, 500, 600);
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
 }
 
 unction gotPoses(results)
{
   if(results.length > 0)
   {
       console.log(results);
       leftWristX = results[0].pose.leftWrist.x;
       console.log('Left Wrist X = ' + leftWristX);
       leftWristY = results[0].pose.leftWrist.y;
       console.log('Left Wrist Y = ' + leftWristY);
       rightWristX = results[0].pose.rightWrist.x;
       console.log('Right Wrist X = ' + rightWristX);
       rightWristY = results[0].pose.rightWrist.y;
       console.log('Right Wrist Y = ' + rightWristY);
   }
}
