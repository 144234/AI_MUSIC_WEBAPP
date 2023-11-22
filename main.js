song1 = "";
song2= "";

function preload(){
    song1 = loadSound("Taylor Swift - Style .mp3")
    song2 = loadSound("Taylor Swift - Getaway Car .mp3")
}

function setup(){
    canvas = createCanvas(500,600);
    canvas.Center();
    video=createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 500, 600);
}