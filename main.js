let canvas =document.getElementById("canvas");
let c= canvas.getContext("2d");

const bird =new Bird();




function loop(){
    c.clearRect(0,0,canvas.clientWidth,canvas.height);
    bird.update();
    requestAnimationFrame(loop);

}



document.addEventListener("keydown",()=>{
    

    bird.jump();
});
loop();