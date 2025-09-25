let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "#ff0000";
ctx.beginPath();
//arc (x,y,r,anguloinicial,angulofinal, sentido)
ctx.arc(95, 50, 40, 0, 2 * Math.PI);
ctx.lineWidth = "5";
ctx.stroke();