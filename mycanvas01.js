
var canvas;
var divWidth = document.querySelector("#mycanvas01");
var divHeight = document.getElementById("mycanvas01");

function setup() {
    
    canvas = createCanvas(windowWidth*(RWD()/12), 500);
    canvas.parent('mycanvas01');
}

function draw() {
    
    background(255);

    let x = cos(frameCount * 0.1) * 100; 
    let y = sin(frameCount * 0.1) * 100; 
    
    circle(width/2 + x, height/2 + y, 200);
}


function windowResized(){
    resizeCanvas(windowWidth*(RWD()/12), 500);
}

function RWD(){
    let output = 12;
    let W = windowWidth;
    let xs = 576;
    let sm = 765;
    let md = 992;
    let lg = 1200;
    let xl = 1400;

    if( W >= xs ) output = 12;
    if( W >= sm ) output = 4;
    if( W >= md ) output = 4;
    if( W >= lg ) output = 4;
    if( W >= xl ) output = 4;

    return output;
}