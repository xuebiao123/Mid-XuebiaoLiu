var strArr = ["The shadow of the dome of pleasure"];
var x = 0;
var y = 0;
var h = 0;
var textsize = 0;

let particles = []
let colors = []

var num = 1000
var noiseScale = 0.001

function setup() {
	createCanvas(windowWidth, windowHeight);
}

function draw() {
	randomSeed(mouseX);
	push();
	background(0,5);
    back()
		for (var i = 0; i < num; i++) {
		particles.push(createVector(width / 2, height / 2))
		colors.push(255, 164, 4);
	}
	pop();

    push();
	for (let i = 1; i < 30; i++) {
		noFill();
		stroke(255, 164, 4, 100);
		strokeWeight(1);
		let y2 = i*random(height/4*0.04);
		bezier(0, y2, width/4, 4, 3*width/4, height*0.75, width, i*random(height/2));

		stroke(255, 164, 4, 10);
		strokeWeight(5);
		let y3 = i*random(height/4*0.04);
		bezier(0, y3, width/4, 4, 3*width/4, height*0.75, width, i*random(height/2));
	}
	pop();

	push();
	for(var i = 0; i < 50; i++){
		  var rand = int (random(2));
		  var str = strArr[rand];                 
		  x = int(random(0,width));
		  y = int(random(0,height));
		  textsize = int(random(6,30));
		  h = int(random(0,width));
	
		  fill(205, 187, 127,100);
		  textSize(textsize);
		  text(str,x,y);
		}
	pop();
}

function back() {
	
	colorMode(HSB,360,100,100,1)
	rID4 =25 
	rID4_2 =25
	//數量  
	rID7= 400  
	////大顆大小
	rID8=random(100,400)
	////小顆大小
	rID9=rID8/10
	//back顏色
	rID10=25  
	rID11=25   
	
	//數量
	for(var b=1;b<rID7;b++){   
	push()
	///大小
	rID5=map(b,0,rID7,rID8,10) 
	//随机形状
	rID6=random(0,100)   
	translate(random(width),random(height))

		var clr1 = color(rID4, 62,30,0.01)
		var clr2 = color(rID4_2, 60, 40,0.1)
		
		let ratio = map(b, 0, rID7, 0, 0.99)  
        var clr3 = lerpColor(clr1, clr2, ratio)

	for(var c=0;c<5;c++){
	
		beginShape()
		for (var a = 0; a < TWO_PI; a+=0.1) {	
	let xoff=cos(a)+1
	let yoff=sin(a)+1
	let r=map(noise(xoff,yoff,rID6),0,1,10,rID5-c*10)
			let x=r*cos(a)
			let y=r*sin(a)
			
			noStroke()
			fill(clr3)
			vertex(x,y)
	}
	endShape(CLOSE)
	}
pop()
	}
}