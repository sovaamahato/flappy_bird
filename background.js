class BackgroundImg{
    constructor(x=0,y=0){
        this.position={
            x:x,
            y:y,
        }
        this.size={
            width:canvas.width,
            height:canvas.height,
        }
        this.velocity={
            x:-1,
            y:0,
        }
        this.bg=new Image();
        this.bg.src="./bg.png";

    }

    draw(){
        c.beginPath();
        c.drawImage(this.bg,this.position.x,this.position.y,this.size.width,this.size.height);
    }
    move(){
        if(bird.isAlive){
            if(this.position.x+this.size.width<=0){
                this.position.x=this.size.width;
            }
            this.position.x+=this.velocity.x;

        }
        
        

    }

    update(){
        this.draw();
        this.move();
    }
}