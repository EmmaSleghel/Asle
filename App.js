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
    canvasFunct();
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
for (i = 1; i <= 35; i++)
{
    document.getElementById("example-page").innerHTML +='<div class="letter-tile" onclick="anotherPage()"><img class="letter-img" src="'+i+'.png" /></div>';
}
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var W = canvas.width;
var H = canvas.height;
ctx.fillStyle = "#DCDCDC"

ctx.fillRect(0, 0, W, H);
var backgroundClean = ctx.getImageData(0, 0, W, H);
function canvasFunct() {
    if (Modernizr.canvas) {
        var x1 = 10,
            y1 = 40,
            x2 = 49,
            y2 = 10,
            w = 4,
            h = 4;

        var startPoint1 = { X: 10, Y: 40 };
        var destinationPoint1 = { X: 97, Y: 47 };
        var startPoint2 = { X: 49, Y: 10 }
        var destinationPoint2 = { X: 78, Y: 90 }

        var startPoint3 = { X: 24, Y: 60 }
        var destinationPoint3 = { X: 49, Y: 90 }

        var Angle1 = Math.atan2(destinationPoint1.Y - startPoint1.Y, destinationPoint1.X - startPoint1.X);
        var Angle2 = Math.atan2(destinationPoint2.Y - startPoint2.Y, destinationPoint2.X - startPoint2.X);
        ctx.beginPath();
        ctx.moveTo(startPoint1.X, startPoint1.Y);
        ctx.lineWidth = 10;
        ctx.strokeStyle = '#00FFFF';
        ctx.lineTo(destinationPoint1.X, destinationPoint1.Y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(startPoint2.X, startPoint2.Y);
        ctx.lineTo(destinationPoint2.X, destinationPoint2.Y);
        ctx.stroke();
        ctx.beginPath();
        ctx.moveTo(startPoint3.X, startPoint3.Y);
        ctx.lineTo(destinationPoint3.X, destinationPoint3.Y);
        ctx.stroke();
        background = ctx.getImageData(0, 0, W, H);
        var vx = 2;
        var vy = 2;

        var frames = 2;
        var sin1 = Math.sin(Angle1) * frames;
        var cos1 = Math.cos(Angle1) * frames;
        var sin2 = Math.sin(Angle2) * frames;
        var cos2 = Math.cos(Angle2) * frames;
        var shown = 0;
        var flag = 1;
        function draw1() {
            if (x1 < destinationPoint1.X && shown <= 2 && flag == 1) {
                ctx.putImageData(background, 0, 0);
                x1 += cos1;
                y1 += sin1;
                ctx.fillStyle = "#2F4F4F"
                ctx.fillRect(x1, y1, w, h);
            }

            else if (flag == 1) {
                x1 = startPoint1.X;
                y1 = startPoint1.Y;
                shown += 1;
            }

            if (shown == 3 && flag == 1) {
                shown = 0;
                flag = 2;
            }

            if (x2 < destinationPoint2.X && shown <= 2 && flag == 2) {
                ctx.putImageData(background, 0, 0);
                x2 += cos2;
                y2 += sin2;

                ctx.fillRect(x2, y2, w, h);
            }

            else if (flag == 2) {
                x2 = startPoint2.X;
                y2 = startPoint2.Y;
                shown += 1;
            }

            if (shown == 3 & flag == 2) {
                ctx.putImageData(background, 0, 0);
            }


        }

        function draw2() {
            if (x2 < destinationPoint2.X && shown <= 2) {
                ctx.putImageData(background, 0, 0);
                x2 += cos2;
                y2 += sin2;

                ctx.fillRect(x2, y2, w, h);
            }

            else {
                x2 = startPoint2.X;
                y2 = startPoint2.Y;
                shown += 1;
            }


        }


        setInterval(draw1, 1000 / 40);

        //setInterval(draw2, 1000/40);
        var mouse = { x: 0, y: 0 };
        var last_mouse = { x: 0, y: 0 };
        var mouse_pressed = false;
     

        canvas.addEventListener('mousemove', function (e) {
            last_mouse.x = mouse.x;
            last_mouse.y = mouse.y;

            mouse.x = e.pageX - this.offsetLeft;
            mouse.y = e.pageY - this.offsetTop;
        }, false);

        canvas.addEventListener('mousedown', function (e) {
            canvas.addEventListener('mousemove', onPaint, false);
            mouse_pressed = true;
            console.log('Apas');
        }, false);


        canvas.addEventListener('mouseup', function (e) {
            canvas.addEventListener('mousemove', onPaint, false);
            mouse_pressed = false;
            console.log('Nu apas')
        }, false);

        var onPaint = function () {
            if (mouse_pressed == false) {
                console.log('Nu pictez')
                return;
            }
            ctx.beginPath();
            ctx.moveTo(last_mouse.x, last_mouse.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.closePath();
            ctx.stroke();
        };

        function canvasSimilarities(image1, image2) {
            return 0;

            return ctx;
        };

    } else {
        console.log('Ei na!');
    }
}
function myFunction() {
    ctx.putImageData(backgroundClean, 0, 0);
    ctx.strokeStyle = '#7FFF00';
    ctx.lineWidth = 2;
}