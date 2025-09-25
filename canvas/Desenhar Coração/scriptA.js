let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "#ff0000";
ctx.beginPath();
//arc (x,y,r,anguloinicial,angulofinal, sentido)
ctx.arc(75, 120, 35, 0, Math.PI, true);
ctx.moveTo(65, 65);
ctx.arc(75, 120, 35, 0, Math.PI, true);
ctx.moveTo(65, 65);
ctx.stroke();