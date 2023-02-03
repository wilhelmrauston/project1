

function setup(){
  createCanvas(1920, 1080, WEBGL);
  camera(180, -800, 200, 200, 0 ,200)
  ambientLight(255); // white light
}

function draw(){

  background(221);
  orbitControl();


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
      }
    }
  }

}
