var canvas;
let teapot;


function preload() {
    // Load model with normalise parameter set to true
    teapot = loadModel('091_W_Aya_10K.obj', true);
    // img = loadImage('data/DB2X2_L01.png');
  }

function setup(){
    let canvas= createCanvas(500,500,WEBGL);
    textureMode(NORMAL);

   //ortho(-width, width, height, -height/2, 0.1, 100);
  }


  function draw(){
    //background(0);
    clear();
    angleMode(DEGREES);
    //ambientLight(255);
    push();
    pointLight(255,mouseX,mouseY);
  rotateZ(frameCount * 0.1);
  // rotateX(200);
  noStroke();
  
    
   specularMaterial(255, 255, 255);
//    texture(img);
//shininess(10);

    model(teapot);
   pop();


  }