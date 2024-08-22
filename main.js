noseX=0;
noseY=0;

function preload() {
    clown_nose = loadImage('hollow-knight-mask.png');
  }
  
  function setup() {
    canvas = createCanvas(300, 300);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoded);
    poseNet.on('pose', gotPoses);
  } 

  function modelLoded() {
    console.log('PoseNet está inicializado');
  }

  function gotPoses(results)
  {
    if(results.length > 0)
    {
      console.log(results);
      noseX = results[0].pose.nose.x-60;
      noseY = results[0].pose.nose.y-110;
      console.log("nose x = " + noseX);
      console.log("nose y = " + noseY);
    }
  }
  
  function draw() 
  {
    image(video, 0, 0, 300, 300);
    //fill(255, 0, 0);
    //stroke(255, 0, 0);
    //circle(noseX, noseY, 35);
    image(clown_nose, noseX, noseY, 110, 150);

  }
  function take_snapshot() {
    save('sealfy.png');
  }