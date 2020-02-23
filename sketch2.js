var canvas;
let coral;
let bubbles=[];
let bubble
let ear = document.getElementById('ear');


function preload() {
    // Load model with normalise parameter set to true
    coral = loadModel('10042_Sea_Turtle_V2_iterations-2.obj', true);
    //img = loadImage('10042_Sea_Turtle_V1_Diffuse.jpg');
    console.log('loaded')
    img = loadImage('underwaterPanorama1.jpg');
    glitter = loadImage('outerspace.jpg');
    soundFormats('mp3', 'ogg');
    mySound = loadSound('xelononisos_xarmosino.mp3');
  }

function setup(){
    let canvas= createCanvas(windowWidth,windowHeight,WEBGL);
    //textureMode(IMAGE);
    //textureWrap(MIRROR);
   
   //ortho(-width, width, height, -height/2, 0.1, 100);
  }


  function draw(){
    clear();
    //background(0);
    angleMode(DEGREES);
   ambientLight(255);
 
    pointLight(255,mouseX,mouseY);
  //directionalLight(255,600,200,0);
  // rotateX(200);
  noStroke();
  texture(img);
  sphere(1000);
    normalMaterial();
   //specularMaterial(255, 10, 50);
//    texture(img);
//shininess(10);
orbitControl();
rotateX(30);
rotateX(frameCount * 0.05);
texture(glitter);
//textureWrap(CLAMP);

//let x=random(5);
push();
translate(0,0);
rotateY(frameCount * -0.01);
model(coral);
pop();

push();
    translate(200,-300);
    rotateZ(frameCount * -0.03);
    model(coral);
    pop();

    push();
    translate(-200,100);
    rotateX(frameCount * -0.02);
model(coral);
pop();
push();
    translate(300,200);
    rotateY(frameCount * 0.02);
    model(coral);
    pop();
    push();
    translate(-500,-100);
    rotateZ(frameCount * 0.01);
    model(coral);
    pop();
    push();
    translate(-100,-400);
    rotateX(frameCount * 0.02);
    model(coral);
    pop();
    push();
    translate(450,-100);
    rotateY(frameCount *-0.02);
    model(coral);
    pop();
   

    // translate(200,500)
    // model(coral);
// ear.mousePressed();
  }

  function mousePressed(){
    mySound.setVolume(0.4);
    mySound.play();
    
  }

  
