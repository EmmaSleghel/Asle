var isOnCanvas = false;
function hideOtherPages(item) {
    document.getElementById(item).style.display = "none";
}
function removeSelectedClassFromOthers(item) {
    document.getElementById(item).className = "";
}
function mainPage() {
    ["example-page", "contact-page", "another-page"].map(function (item) {
        hideOtherPages(item);
    });
    ["example-tile", "contact-tile", "another-tile"].map(function (item) {
        removeSelectedClassFromOthers(item);
    });
    document.getElementById('main-tile').className = 'selected';
    document.getElementById("main-page").style.display = "block";
    isOnCanvas = false;

}
function examplePage() {
    ["main-page", "contact-page", "another-page"].map(function (item) {
        hideOtherPages(item);
    });
    ["main-tile", "contact-tile", "another-tile"].map(function (item) {
        removeSelectedClassFromOthers(item);
    });
    document.getElementById('example-tile').className = 'selected';
    document.getElementById("example-page").style.display = "block";
    isOnCanvas = false;

}
function anotherPage() {
    ["main-page", "contact-page", "example-page"].map(function (item) {
        hideOtherPages(item);
    });
    ["main-tile", "contact-tile", "example-tile"].map(function (item) {
        removeSelectedClassFromOthers(item);
    });
    document.getElementById('another-tile').className = 'selected';
    document.getElementById("another-page").style.display = "block";
    isOnCanvas = true;
   
}
function contactPage() {
    ["main-page", "example-page", "another-page"].map(function (item) {
        hideOtherPages(item);
    });
    ["main-tile", "example-tile", "another-tile"].map(function (item) {
        removeSelectedClassFromOthers(item);
    });
    document.getElementById('contact-tile').className = 'selected';
    document.getElementById("contact-page").style.display = "block";
    isOnCanvas = false;

}
var letter='A';
var count=0;
for (i = 1; i <= 35; i++)
{
    document.getElementById("example-page").innerHTML +='<div class="letter-tile" id="'+String.fromCharCode(letter.charCodeAt() + count) +'" onclick="anotherPage()"><img class="letter-img" src="'+i+'.png" /></div>';
    count= count + 1;
}
var userParts = [];
var savedPart = [];
var letters = {}
letters['A'] = [[54, 55, 53, 101, 322, 95, 320, 50], [314, 38, 175, 37, 161, 333, 195, 332], [315, 203, 27, 457, 119, 37, 249, 296]];
letters['B'] = [[150, 100, 150, 100, 350, 100, 350, 100], [317, 101, 317, 101, 110, 358, 290, 362], [380, 175, 380, 175, 381, 234, 381, 234]];
letters['C'] = [[141, 233, 14, 20, 322, 67, 33, 111], [455, 353, 100, 234, 332, 128, 333, 222], [122, 342, 344, 333, 381, 234, 381, 234]];
letters['D'] = [[100, 222, 132, 67, 312, 144, 234, 100], [222, 111, 45, 20, 110, 358, 333, 234], [233, 111, 234, 175, 381, 213, 381, 122]];

console.log(letters['A'])
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d")
ctx.lineWidth = 16;
ctx.strokeStyle = "#333";
var fps = 20;
var percent = 0;
var direction = 1;
var pixels = [];
var curvePixels = [];
var part1Curve = [];
var part2Curve = [];
var part3Curve = [];
stopShowing = false;
var funct2Activated = false; 
var limit = (canvas.width + canvas.height)/30;
function  draw_b_c (xp0, yp0, xp1, yp1, xp2, yp2, xp3, yp3){
ctx.lineWidth = 16;
ctx.beginPath();
ctx.moveTo(xp0, yp0);
ctx.bezierCurveTo(xp1, yp1, xp2, yp2, xp3, yp3);
ctx.stroke();
};

function draw_letter(letter){
	console.log('Am intrat!');
	for (var i = 0; i < letters[letter].length; i ++){
		draw_b_c(letters[letter][i][0], letters[letter][i][1], letters[letter][i][2], letters[letter][i][3], letters[letter][i][4], letters[letter][i][5],letters[letter][i][6], letters[letter][i][7]);
	}
}

var titlediv=document.getElementById('title-div');
var scorediv=document.getElementById('score-div');
function letterDraw(selectedletter, text) {
	if (id != undefined){
	fps = 20;
	if (curvePixels.length < 100){
		clearInterval(id);
		curvePixels = [];
		curvePixels = [];
		part1Curve = [];
		part2Curve = [];
		part3Curve = [];
	}};
	ctx.clearRect(0,0,440,440);
	current_letter = selectedletter;
	draw_letter(current_letter);
	percent = 0;
	direction = 1;
	curvePixels = [];
	stopShowing = false;
	id; 
	count = 0; 
	pixels1 = [];
	userParts = [];
	pixels = [];
	path = [];
	mouse = {x: 0, y: 0};
	last_mouse = {x: 0, y: 0};
	mouse_pressed = false;
	canvas.removeEventListener('mousemove', funct1,  false);
    canvas.removeEventListener('mousemove', onPaint1, false);
    canvas.removeEventListener('mousedown', funct2, false);
    while (titlediv.firstChild) {
    titlediv.removeChild(titlediv.firstChild);
}
    var node=document.createTextNode(text);
    titlediv.appendChild(node);
};

document.getElementById('A').addEventListener('click',function(){letterDraw('A','Health'); });
document.getElementById('B').addEventListener('click',function(){letterDraw('B','Faith');});
document.getElementById('C').addEventListener('click',function(){letterDraw('C','Wisdom');});
document.getElementById('D').addEventListener('click',function(){letterDraw('D','Happiness');});

var id; 
var count = 0; 
function myFunction1(){
	if (id != undefined){
	fps = 20;
	if (curvePixels.length < 100){
		curvePixels = [];
		curvePixels = [];
		part1Curve = [];
		part2Curve = [];
		part3Curve = [];
	}
	percent = 0;
	direction = 1;
	clearInterval(id);	

	};
	
	animate(ctx);
	id = setInterval(animate, 1000/fps);
};

function getCubicBezierXYatPercent(startPt, controlPt1, controlPt2, endPt, percent){
var X = CubicN(percent, startPt.x, controlPt1.x, controlPt2.x, endPt.x);
var Y = CubicN(percent, startPt.y, controlPt1.y, 
	controlPt2.y, endPt.y);
	return ({x:X, y:Y}); 
};

function CubicN(pct, a, b, c, d){
	var t2 = pct * pct;
	var t3 = t2 * pct;
	return a + ( -a * 3 + pct *(3 * a - a* pct)) * pct + (3 * b + pct * (  -6 * b + b * 3 * pct)) * pct + (c * 3 - c * 3 * pct) * t2 +
	d * t3;
};

function animate() {
	percent += direction;
	if(percent < 0){ percent = 0; direction = 1;};
	if(percent > 100) {percent = 0; direction = 1;
		if (count == 0){
		for (var i = 0; i < part1Curve.length; i ++){
			curvePixels.push(part1Curve[i]);
		};
		for (var i = 0; i < part2Curve.length; i ++){
			curvePixels.push(part2Curve[i]);
		};
		for (var i = 0; i < part3Curve.length; i ++){
			curvePixels.push(part3Curve[i]);
		};

		};
	 count += 1; };
		

	draw(percent);

};

function draw(sliderValue){
		ctx.clearRect(0,0,440,440);
		draw_letter(current_letter);
		if (sliderValue < 34){
			var percent = sliderValue / 33;
			xy = getCubicBezierXYatPercent({x:letters[current_letter][0][0], y:letters[current_letter][0][1]},{x:letters[current_letter][0][2], y:letters[current_letter][0][3]}, {x:letters[current_letter][0][4], y:letters[current_letter][0][5]}, {x:letters[current_letter][0][6], y:letters[current_letter][0][7]}, percent);
			if (count == 0){

				part1Curve.push([xy.x, xy.y]);}

			drawDot(xy, "red", ctx);
		} else if (sliderValue < 66){
			var percent = (sliderValue - 33)/ 33;
			xy = getCubicBezierXYatPercent({x:letters[current_letter][1][0], y:letters[current_letter][1][1]},{x:letters[current_letter][1][2], y:letters[current_letter][1][3]}, {x:letters[current_letter][1][4], y:letters[current_letter][1][5]}, {x:letters[current_letter][1][6], y:letters[current_letter][1][7]}, percent);
			if (count == 0){
				part2Curve.push([xy.x, xy.y]);}
			drawDot(xy, "red", ctx);
		} else {
			var percent = (sliderValue - 67)/ 33;
			xy = getCubicBezierXYatPercent({x:letters[current_letter][2][0], y:letters[current_letter][2][1]},{x:letters[current_letter][2][2], y:letters[current_letter][2][3]}, {x:letters[current_letter][2][4], y:letters[current_letter][2][5]}, {x:letters[current_letter][2][6], y:letters[current_letter][2][7]}, percent);
			if (count == 0){
				part3Curve.push([xy.x, xy.y]);}
			drawDot(xy, "red", ctx);
		};

};
function drawDot(point, color, canvasCtx)
{
ctx.fillStyle = color;
ctx.strokeStyle = "black";
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(point.x, point.y, 8, 0, Math.PI * 2, false);
ctx.closePath();
ctx.fill();
ctx.stroke();
};

var pixels1 = [];
var path;
var mouse = {x: 0, y: 0};
var last_mouse = {x: 0, y: 0};
var mouse_pressed = false;

function funct1(e) {
	last_mouse.x = mouse.x;
        last_mouse.y = mouse.y;

        mouse.x = e.pageX - this.offsetLeft;
        mouse.y = e.pageY - this.offsetTop;
        console.log('Ma misc!');
};

function funct2(e){
	canvas.addEventListener('mousemove', onPaint1, false);
	mouse_pressed = true;
	console.log('Apas1');
};

function funct3(e){
	canvas.addEventListener('mousemove',onPaint1,false);
	mouse_pressed = false;
	console.log('Nu apas1');
	pixels1.push(userParts);
	userParts = [];

};

function myFunction2(){
	if (funct2Activated == true){
		pixels1 = [];
		userParts = [];
		pixels = [];
	}
	funct2Activated = true;
	clearInterval(id);
	ctx.clearRect(0,0,440,440);
	percent = 0;
	direction = 1;
	canvas.addEventListener('mousemove', funct1, false);

	canvas.addEventListener('mousedown', funct2, false);

	canvas.addEventListener('mouseup', funct3, false);


};

var onPaint1 = function(){
	if (mouse_pressed == false) {
		console.log('Nu pictez1');
		return;}
	ctx.beginPath();
	ctx.moveTo(last_mouse.x + 50, last_mouse.y + 50);
	ctx.lineTo(mouse.x + 50, mouse.y + 50);
	userParts.push([mouse.x + 50, mouse.y + 50]);
	pixels.push([mouse.x + 50, mouse.y + 50]);
	ctx.closePath();
	ctx.stroke();
};

function myFunction3(){
	ctx.clearRect(0,0,440,440);
	canvas.removeEventListener('mousemove', funct1,  false);
    canvas.removeEventListener('mousemove', onPaint1, false);
    canvas.removeEventListener('mousedown', funct2, false);


	sig1 = prepareSignature(pixels);
	sig2 = prepareSignature(curvePixels);
	var dtw = new DynamicTimeWarping(sig1, sig2, function (a, b) {
    var xDiff = a[0] - b[0];
    var yDiff = a[1] - b[1];
    diff = Math.sqrt(xDiff * xDiff + yDiff * yDiff);
    return diff;
	});

	var result = dtw.getDistance();
    path = dtw.getPath();
	var result = result / path.length;
	var roundedLimit = Math.round(limit * 1000) / 1000;
    var roundedResult = Math.round(result * 1000) / 1000;
		
	drawresult(path);
	if (roundedResult < roundedLimit)
	{
		console.log('Good job!!!');
		console.log(roundedResult);
	alert("Good job! Your score: "+roundedResult);
	
          
	} else {
		console.log('Try again!!!');
		console.log(roundedResult);
	alert("Not so good! Try again! Your score: "+roundedResult);
	
	};
	
  
};
function prepareSignature(data) {
    var xMean = 0;
    var yMean = 0;
    var diffData = [];
    for (var i = 0; i < data.length; i++) {
        xMean = xMean + data[i][0];
        yMean = yMean + data[i][1];
    }
    xMean = xMean / data.length;
    yMean = yMean / data.length;
    for (var i = 0; i < data.length; i++) {
        diffData[i] = [data[i][0] - xMean, data[i][1] - yMean];
    }
    return diffData;
};

function drawresult(path){
ctx.linewidth = 8;
ctx.strokeStyle = "#eb00eb";
for (var j = 0; j < pixels1.length; j++){
	for (var i = 1; i < pixels1[j].length; i++){
		ctx.beginPath();
		ctx.moveTo(pixels1[j][i - 1][0], pixels1[j][i - 1][1]);
		ctx.lineTo(pixels1[j][i][0], pixels1[j][i][1]);
		ctx.stroke();
};};



ctx.strokeStyle = "#00ebeb";

for (var i = 1; i < part1Curve.length; i ++){
	ctx.beginPath();
	ctx.moveTo(part1Curve[i - 1][0], part1Curve[i - 1][1]);
	ctx.lineTo(part1Curve[i][0], part1Curve[i][1]);
	ctx.stroke();
};

for (var i = 1; i < part2Curve.length; i ++){
	ctx.beginPath();
	ctx.moveTo(part2Curve[i - 1][0], part2Curve[i - 1][1]);
	ctx.lineTo(part2Curve[i][0], part2Curve[i][1]);
	ctx.stroke();
};

for (var i = 1; i < part3Curve.length; i ++){
	ctx.beginPath();
	ctx.moveTo(part3Curve[i - 1][0], part3Curve[i - 1][1]);
	ctx.lineTo(part3Curve[i][0], part3Curve[i][1]);
	ctx.stroke();
};

ctx.strokeStyle = "#000000";
for (var i = 0; i < path.length; i ++){
	var index1 = path[i][0];
	var index2 = path[i][1];
	ctx.beginPath();
	ctx.moveTo(pixels[index1][0], pixels[index1][1]);
	ctx.lineTo(curvePixels[index2][0], curvePixels[index2][1]);
	ctx.stroke();
};

};