

function setup(){
  createCanvas(800, 800, WEBGL);
  camera(180, -800, 200, 200, 0 ,200)

}

function draw(){

  background(221);
  orbitControl();
  directionalLight(250, 250, 250, 20,20,1);
  specularMaterial(119,119,119);

  for (let x=0; x < 400; x +=20){
    for (let z=0; z < 400; z +=20){


      if (x == 0 | z == 0) {
        push();
        translate(x, -3.25, z);
        box(18.5, 25, 18.5);
        pop();

      }
      else if (x == 380 && z < 400) {
        push();
        translate(x, -3.25, z);
        box(18.5, 25, 18.5);
        pop();
      }
      else if (z == 380 && x < 400) {
        push();
        translate(x, -3.25, z);
        box(18.5, 25, 18.5);
        pop();
      }
      else {
        push();
      // ground plane is XZ, not XY (front plane)
        translate(x, 0, z);
        box(18.5);
        pop();
        fill(100)

      }
    }
  }

}
