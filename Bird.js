class Bird{
    constructor(){
        this.position={
            x:canvas.width/2,
            y:0
        };
        this.size={
            width:50,
            height:50,
        };
        this.velocity={
            x:0,
            y:1
        };
        this.accleration=0.2;

        this.isAlive=true;

        this.birdImg=new  Image();
        this.birdImg.src="./PNG/frame-1.png";


    }
    draw(){
        c.beginPath();
        c.fillStyle="red";
        c.drawImage(this.birdImg,this.position.x-this.size.width/2,this.position.y,this.size.width,this.size.height);
        
    }

    move(){
        this.velocity.y +=this.accleration;
        this.position.y+=this.velocity.y;

    }

    
    borderCollision(){
        if(this.position.y+this.size.height>=canvas.height){
            this.position.y= canvas.height-this.size.height;
            this.isAlive=false;
        }
    }
 
    jump(){
        this.velocity.y=-2.5;
    }

    update(){
        this.draw();
        if(this.isAlive){
            this.move();
        this.borderCollision();

        }
        
    }


}