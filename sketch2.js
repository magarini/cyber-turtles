var canvas;
let coral;
let bubbles=[];
let bubble
let ear = document.getElementById('ear');
let j=0;

function preload() {
    // Load model with normalise parameter set to true
    coral = loadModel('10042_Sea_Turtle_V2_iterations-2.obj', true);
    console.log('loaded')
    img = loadImage('underwaterPanorama1.jpg');
    glitter = loadImage('outerspace.jpg');
    soundFormats('mp3', 'ogg');
    mySound = loadSound('xelononisos_xarmosino.mp3');
  }

function setup(){
    let canvas= createCanvas(windowWidth,windowHeight,WEBGL);
   
  }


  function draw(){
    clear();
    angleMode(DEGREES);
   ambientLight(255);
 
    pointLight(255,mouseX,mouseY);

  noStroke();
  texture(img);
  sphere(1000);
    normalMaterial();

orbitControl();
rotateX(30);
rotateX(frameCount * 0.05);
texture(glitter);

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
    translate(-200,200);
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
   

  }

  function mousePressed(){
    j=j+1;
    if (j<2){
    mySound.setVolume(0.4);
    mySound.loop();
  }
  }

  
