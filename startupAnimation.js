let dot = [];
let bigRadius = 175;

function setup(){
    createCanvas(640, 400);

    dot[0] = new smallCirc(PI / -2);
}

function draw(){
    background(0);
    strokeWeight(5);

    push();

    translate(width / 2, height / 2);

    for(i = 0; i < dot.length; i++){
        dot[i].display();
    }
    
    dot[0].update();

    pop();
}

class smallCirc{
    constructor(_p){
        this.size = 10;
        this.phase = _p;

        let coords = trigXY(this.phase);
        this.x = coords.x;
        this.y = coords.y;
    }

    display(){
        noStroke();
        fill(255);
        circle(this.x, this.y, this.size);
    }

    update(){
        this.phase += PI / 360;
        
        let coords = trigXY(this.phase);
        this.x = coords.x;
        this.y = coords.y;

        dot.push(new smallCirc(this.phase));
    }
}

function trigXY(_p){
    let x = bigRadius * cos(_p);
    let y = bigRadius * sin(_p);
    return {
        x,
        y
    };
}