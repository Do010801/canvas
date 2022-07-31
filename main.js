let myCanvas = document.getElementById("my-canvas");
let pen = myCanvas.getContext("2d");
const WIDTH = myCanvas.width;
const HEIGHT = myCanvas.height;
let switchBounce = true;
myCanvas.onclick = function () {
  switchBounce = !switchBounce;
};
let eventKB = "";
let body = document.getElementsByTagName("body")[0];
body.onkeydown = function (event) {
  console.log(event.code);
  key = event.code;
};
body.onkeyup = function (event) {
  key = "";
};
let key = "";
let imgMeme = document.createElement("img");
const FPS = 60;
let ballPosHeight = 0;
let ballPosWidth = 0;
let direction = 1;
let startFrameTime = Date.now();
function gameLoop() {

        pen.clearRect(0, 0, WIDTH, HEIGHT);
        
        pen.beginPath();
        pen.arc(WIDTH / 2 + ballPosWidth,HEIGHT / 2 + ballPosHeight,200,0,2 * Math.PI);
        pen.fillStyle = "#ecec0e";
        pen.fill();
        pen.closePath();
        pen.stroke();
      
        pen.beginPath();
        pen.arc(WIDTH / 2 + ballPosWidth,HEIGHT /2  + ballPosHeight,50,0,2 * Math.PI);
        pen.fillStyle = "red";
        pen.fill();
        pen.closePath();
        pen.stroke();
      
        pen.beginPath();
        pen.arc(WIDTH / 2 + ballPosWidth,HEIGHT /2  + ballPosHeight,150,0,1 * Math.PI);
        pen.fillStyle = "pink";
        pen.fill();
        pen.closePath();
        pen.stroke();
        
        pen.beginPath();
        pen.arc(460 + ballPosWidth,280  + ballPosHeight,50,0,1 * Math.PI);
        pen.fillStyle = "white";
        pen.fill();
        pen.closePath();
        pen.stroke();
      
        pen.beginPath();
        pen.arc(460 + ballPosWidth,300  + ballPosHeight,20,0,2 * Math.PI);
        pen.fillStyle = "black";
        pen.fill();
        pen.closePath();
        pen.stroke();
      
        pen.beginPath();
        pen.arc(625 + ballPosWidth,280  + ballPosHeight,50,0,1 * Math.PI);
        pen.fillStyle = "white";
        pen.fill();
        pen.closePath();
        pen.stroke();
      
        pen.beginPath();
        pen.arc(625 + ballPosWidth,300  + ballPosHeight,20,0,2 * Math.PI);
        pen.fillStyle = "black";
        pen.fill();
        pen.closePath();
        pen.stroke();
      
        pen.clearRect(0, 0, WIDTH, HEIGHT);
      
        pen.beginPath();
        pen.arc(WIDTH / 2 + ballPosWidth,HEIGHT / 2 + ballPosHeight,200,0,2 * Math.PI);
        pen.fillStyle = "blue";
        pen.fill();
        pen.closePath();
        pen.stroke();
      
      
        pen.beginPath();
        pen.arc(WIDTH / 2 + ballPosWidth,HEIGHT /2  + ballPosHeight,50,0,2 * Math.PI);
        pen.fillStyle = "yellow";
        pen.fill();
        pen.closePath();
        pen.stroke();
      
        pen.beginPath();
        pen.arc(WIDTH / 2 + ballPosWidth,HEIGHT /2  + ballPosHeight,150,0,1 * Math.PI);
        pen.fillStyle = "red";
        pen.fill();
        pen.closePath();
        pen.stroke();
        pen.beginPath();
        pen.arc(460 + ballPosWidth,280  + ballPosHeight,50,0,1 * Math.PI);
        pen.fillStyle = "white";
        pen.fill();
        pen.closePath();
        pen.stroke();
      
        pen.beginPath();
        pen.arc(460 + ballPosWidth,300  + ballPosHeight,20,0,2 * Math.PI);
        pen.fillStyle = "black";
        pen.fill();
        pen.closePath();
        pen.stroke();
      
        pen.beginPath();
        pen.arc(625 + ballPosWidth,280  + ballPosHeight,50,0,1 * Math.PI);
        pen.fillStyle = "white";
        pen.fill();
        pen.closePath();
        pen.stroke();
      
        pen.beginPath();
        pen.arc(625 + ballPosWidth,300  + ballPosHeight,20,0,2 * Math.PI);
        pen.fillStyle = "black";
        pen.fill();
        pen.closePath();
        pen.stroke();
        
      
      
      
        if (switchBounce) {
          if (ballPosHeight >0) {
            direction = -1;
          }
          if (ballPosHeight <-150) {
            direction = 1;
          }
          ballPosHeight += 0*direction;
        }
        switch (key) {
      
          case "KeyW":
            ballPosHeight -= 5;
            if (ballPosHeight == 0)
            {
              break;
            }
            break;
          case "KeyS":
            ballPosHeight += 5;
            break;
          case "KeyA":
            ballPosWidth -= 5;
            break;
          case "KeyD":
            ballPosWidth += 5;
            break;
        }
        
        let currentFrameTime = Date.now();
        let deltaTime = currentFrameTime - startFrameTime;
        let actualFPS = parseInt(1000 / deltaTime);
        pen.beginPath();
        pen.fillStyle = "black";
        pen.font = "10pt Arial";
        pen.fillText("FPS: " + actualFPS, 30, 30);
        startFrameTime = currentFrameTime;
    
}

setInterval(gameLoop, 1000 / FPS);