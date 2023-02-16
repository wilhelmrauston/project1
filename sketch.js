function setup(){
  createCanvas(800, 800, WEBGL);
  camera(180, -800, 200, 200, 0 ,200)

}

function draw(){

  background(221);
  orbitControl();
  directionalLight(250, 250, 250, 20,20,1);
  specularMaterial(119,119,119);
  let boxes = [];
  let numBoxes = 10;

  for (let x = 0; x < numBoxes; x++) {
    for (let y = 0; y < numBoxes; y++) {

      let box = new Node()
      /*
      let boxID = x * numBoxes * numBoxes + y * numBoxes + z;
      let boxSize = 10;
      let boxX = x * boxSize;
      let boxY = y * boxSize;
      let boxZ = 0;
      boxes[boxID] = { x: boxX, y: boxY, z: boxZ, size: boxSize, color: [170, 40, 40] };
      */
    }
  }

  for (let box in boxes) {
    push();
    box(box.size);
    translate(box.x, box.y, box.z);
    fill(box.color);
    pop();
  }
}
