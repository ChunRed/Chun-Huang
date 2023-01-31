function setup() {
    var canvas = createCanvas(windowWidth*(12/12), 500);
    canvas.parent('canvasForHTML');
}

function draw() {
    
    background(200);
    noStroke();

    let x = cos(frameCount * 0.1) * 100; 
    let y = sin(frameCount * 0.1) * 100; 
    
    circle(width/2 + x, height/2 + y, 900);
}