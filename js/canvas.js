const canvas = document.querySelector('#draw');

const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.strokeStyle = '#BADA55';
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = 10;

let isDrwawing = false;     //checks if down is currently down for writting or not 
let lastX = 0;              //checks for x coordinates
let lastY = 0;              //checks for y coordinates

let hue = 0;        //using hsl here

function draw(e) {
    if(!isDrwawing) 
        return;        // stops event when mouse is up

    console.log(e);

    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;     //using hsl property here hsl starts from 0 and goes upto 360, each colors

    ctx.beginPath();
    ctx.moveTo(lastX, lastY);         //starts from
    ctx.lineTo(e.offsetX, e.offsetY);    //go to
    ctx.stroke();

    lastX = e.offsetX;
    lastY = e.offsetY

    hue++;

    if (hue >= 360) hue = 0; 
    
}


canvas.addEventListener('mousedown', (e) => {
    isDrwawing = true;

    lastX = e.offsetX;
    lastY = e.offsetY;      // updating mouse pointer after user stops one draw
});

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mouseup', () => isDrwawing = false);
canvas.addEventListener('mouseout', () => isDrwawing = false);      //checks if the mouse pointer leaved the writing space or not