let X;
let Y;
let Z;
let centerX;
let centerY;
let centerZ;
let h = 20;

function setup(){
  createCanvas(800, 800, WEBGL);
  camera(Z, Y, Z, centerX, centerY, centerZ, 0, 100, 0);
}

function draw(){

  background(220);

  orbitControl();
  rotateY(0.5);
  for (let x=0; x < width; x +=20){
    for (let z=0; z < height; z +=20){
      push();
      // ground plane is XZ, not XY (front plane)
      translate(x, 0, z);
      box(20);
      pop();
    }
  }

}
