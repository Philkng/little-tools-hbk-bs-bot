function setup() {
 createCanvas(windowWidth,WindowHeight);
 brushColor = color(0);
}


function draw() {}

if (mouseIsPressed) {
    stroke(brushColor);
    strokeWeight(10);
    line(pmouseX, pmouseY, mouseX, mouseY);
}
function mouseDragged(){
circle(mouseX, mouseY, 10);
line(pmouseX, pmouseY, mouseX, mouseY);


for (let i = 0;i < 100; i++) {

    point( mouseX + random(-10,10),
           mouseY + random(-10,10));
    }
}
function mouseClicked() {
    brushColor = color(random(255), random(255), random(255));
  }
