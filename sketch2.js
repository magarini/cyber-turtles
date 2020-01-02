var canvas;
let coral;
let bubbles=[];
let bubble


function preload() {
    // Load model with normalise parameter set to true
    coral = loadModel('10042_Sea_Turtle_V2_iterations-2.obj', true);
    //img = loadImage('10042_Sea_Turtle_V1_Diffuse.jpg');
    console.log('loaded')
    img = loadImage('underwaterPanorama1.jpg');
    glitter = loadImage('outerspace.jpg');

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
rotateX(frameCount * 0.1);
texture(glitter);
//textureWrap(CLAMP);

//let x=random(5);
push();
translate(-100,-200)
model(coral);
pop();


    translate(200,200)
    model(coral);

    translate(-200,-600)
model(coral);
    translate(200,200)
    model(coral);
    
    translate(-500,-100)
    model(coral);
    
    translate(200,600)
    model(coral);

    translate(-500,-100)
    model(coral);
    
    // translate(200,500)
    // model(coral);

    


    



  }


  
