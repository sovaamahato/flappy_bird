let canvas =document.getElementById("canvas");
let c= canvas.getContext("2d");

const bird =new Bird();
const bgPic1=new BackgroundImg(0,0);
const bgPic2=new BackgroundImg(bgPic1.size.width ,0);
const pipe=new Pipe();

let gameScore =0;





function loop(){
    c.clearRect(0,0,canvas.clientWidth,canvas.height);
    bgPic1.update();
    bgPic2.update();
    pipe.update();
    bird.update();


    //game score 
    c.beginPath();
    c.fillStyle='white';
    c.font='20px arial';
    c.fillText(gameScore, 10,40);
    if(!bird.isAlive){
        clearInterval(intervalId);
    }
    requestAnimationFrame(loop);

}

const intervalId=setInterval(() =>{
    gameScore+=1;
},1000);



document.addEventListener("keydown",()=>{
    

    bird.jump();
});
loop();