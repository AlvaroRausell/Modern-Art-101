var points = [];
var numPoints = 5;
var rstButton;
var sliderNumPoints;
var curveSlider;
var changed = true;
function setup() {
  createCanvas(400, 400);
  reset();
  rstButton = createButton("New Drawing");
  rstButton.mousePressed(reset);
  sliderNumPoints = createSlider(2, 200, 5, 1);
  curveSlider = createSlider(0, 1, 0.5, 0.01);
  curveSlider.input(reset);
}
function reset() {
  changed = true;
  points = [];
  for (let i = 0; i < numPoints; ++i) {
    points.push(createVector(random(0, width), random(0, height)));
  }
}
function draw() {
  if (sliderNumPoints.value() != numPoints) {
    numPoints = sliderNumPoints.value();
    reset();
    changed = true;
  }

  strokeWeight(3);
  beginShape();
  fill(0);
  if (changed) {
    background(255);
    for (let pt of points) {
      if (random() >= curveSlider.value()) {
        vertex(pt.x, pt.y);
      } else {
        curveVertex(pt.x, pt.y);
      }
    }
    changed = false;
  }
  endShape();
}
