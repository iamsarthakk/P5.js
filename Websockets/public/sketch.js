var socket;

function setup() {
    createCanvas(200,200);
    background(0);
    socket = io.connetct('http://localhost:3000');
    
    socket.on('mouse',newDrawing);
}

function newDrawing(data){
    noStroke();
    fill(255,255,0);
    ellipse(data.x,data.y,20,20);
}


function mouseDragged(){
    console.lo('Sneding:' + mouseX + ',' + mouseY);
    
    var data = {
        x :mouseX
        y: mouseY
    }
    socket.emit('mouse',data);
    
    fill(255,255,0);
    ellipse(mouseX,mouseY,20,20);

}
function draw() {
    
}