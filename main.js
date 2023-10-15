let canvas =document.getElementById("canvas");
let c= canvas.getContext("2d");

const bird =new Bird();
const bgPic1=new BackgroundImg(0,0);
const bgPic2=new BackgroundImg(bgPic1.size.width ,0);




function loop(){
    c.clearRect(0,0,canvas.clientWidth,canvas.height);
    bgPic1.update();
    bgPic2.update();
    bird.update();
    requestAnimationFrame(loop);

}



document.addEventListener("keydown",()=>{
    

    bird.jump();
});
loop();