class Pipe{
    constructor(x,y){
        this.position={
            x:canvas.width,
            y:Math.random() * (0 - -250) + -250,
        }
        this.size={
            width:30,
            height:300,
        }
        this.velocity={
            x:-1,
            y:0,
        }
        this.bg=new Image();
        this.bg2=new Image();
        this.bg.src="./pipe-up.png";
        this.bg2.src="./pipe-down.png";

    }

    draw(){
        c.beginPath();
        c.drawImage(this.bg,this.position.x,this.position.y,this.size.width,this.size.height);
    }

    drawDownPipe(){
        c.beginPath();
        c.drawImage(this.bg2,
            this.position.x,
            this.position.y+this.size.height+150,
            this.size.width,this.size.height);
    }
    move(){
        
            if(this.position.x+this.size.width<=0){
                this.position.x=canvas.width;
                this.position.y = Math.random() * (0 - -250) + -250;
            }
            this.position.x+=this.velocity.x;

        
        
        

    }

    update(){
        this.draw();
        
        this.drawDownPipe();
        if(bird.isAlive)
        {
            this.move();
        }
        
    }
}