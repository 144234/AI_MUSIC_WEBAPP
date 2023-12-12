song1 = "";
song2= "";

leftWristX = 0;
leftWristY = 0;
rightWristX = 0;
rightWristY = 0;

function preload(){
    song1 = loadSound("music.mp3")
    song2 = loadSound("music2.mp3")
    song1_status.isPlaying()
    song2_status.isPlaying()
    
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
    fill("#e61515");
   stroke("#e61515");
   
   song1_status="";

   if(scoreLeftWrist > 0.2){
        circle(leftWristX,leftWristY,20);
        song2.stop();
        if(song1_status = false){
            song1.play();
            song_name = "Disco Music"
   }
   }

   song2_status="";

   if(scoreRightWrist > 0.2){
         circle(rightWristX,rightWristY,20);
         song1.stop();
         if(song1_status = false){
             song2.play();
             song_name = "Party Music"
    }
    }
}

function modelLoaded(){
    console.log('PoseNet is Initialized');
 }
 
 function gotPoses(results)
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
