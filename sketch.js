let bubbles=[];


function setup() { // built-in P5.JS function -=- this runs once 
	createCanvas(600, 400); 
	for (let i = 0; i < 60; i++){
		bubbles[i] = new Bubble(200,200, 40);
	}
}


class Bubble{
	constructor(x,y,r){
		this.x = x;
		this.y =y;
		this.r=r;
	}
	
	move(){
		this.x= this.x + random(-5, 5);
		this.y= this.y + random(-5, 5);
 	}
	show(){
		stroke(255);
		strokeWeight(4);
		noFill();
		ellipse(this.x, this.y, this.r*2,this.r*2);
	}
}
function draw() { // built-in P5.JS function -=-  automatic loop that repeats forever
	background(0); // give the canvas a black background
	for (let i = 0; i < 60; i++){
	bubbles[i].move();
	bubbles[i].show();
	}
}

function show() {
	stroke(255); // white outline
	strokeWeight(4); // line width
	noFill();
	ellipse(bubble.x, bubble.y, 24, 24); // draw an ellipse/circle
}

function move() {
	bubble.x = bubble.x + random(-5,5);
	bubble.y = bubble.y + random(-5,5);
}