let canvas =document.getElementById("canvas");
let c= canvas.getContext("2d");

const bird =new Bird();
const bgPic1=new BackgroundImg(0,0);
const bgPic2=new BackgroundImg(bgPic1.size.width ,0);
const pipe1=new Pipe(canvas.width,Math.random() * (0 - -250) + -250,);
const pipe2=new Pipe(canvas.width+150,Math.random() * (0 - -250) + -250,);

let gameScore =0;

function loop(){
    c.clearRect(0,0,canvas.clientWidth,canvas.height);
    bgPic1.update();
    bgPic2.update();
    pipe1.update();
    pipe2.update();
    bird.update();


    //game score 
    c.beginPath();
    c.fillStyle='white';
    c.font='20px';
    c.fillText(gameScore, 10,40);

    
    if(!bird.isAlive){
        clearInterval(intervalId);


        //to print game over text
        c.fillStyle='Red';
         c.font='30px black cencery';
        c.fillText("Game over ", 90,250);
        c.fillText("Your Score: "+gameScore, 80,280);

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