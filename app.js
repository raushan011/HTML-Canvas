const canvas = document.getElementById('canvas');
const colorElement = document.getElementById('color');
const rangeElement = document.getElementById('range');

function getCanvas(){

    if(canvas.getContext){

        const ctx = canvas.getContext('2d');

        let painting = false;

        function startDrawing(event){
            painting = true;
            draw(event);
        }

        function stopDrawing(){
            painting = false;
            ctx.beginPath();
        }

        function draw(event){
            if(!painting) return;
    
            ctx.lineWidth = rangeElement.value;
            ctx.lineCap = 'round';
            ctx.strokeStyle = colorElement.value;       

            ctx.lineTo(event.clientX, event.clientY);
            ctx.stroke();

            ctx.beginPath();
            ctx.moveTo(event.clientX, event.clientY);
        }

        window.addEventListener('mousedown', startDrawing);
        window.addEventListener('mouseup', stopDrawing);
        window.addEventListener('mousemove', draw);
    } else {
        console.log(`brower doesn't support canvas`);
    }
}

window.addEventListener('load', getCanvas);

function resizing(){
    canvas.height = window.innerHeight;
    canvas.width = window.innerWidth;
}
window.addEventListener('resize', resizing);





