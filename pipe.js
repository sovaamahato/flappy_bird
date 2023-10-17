class Pipe{
    constructor(x,y){
        this.position={
            x:x,
            y:y,
        }
        this.size={
            width:30,
            height:300,
        }
        this.velocity={
            x:-1.5,
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

    collision(){



        //upper pipe collision 
        if (this.position.x + this.size.width >=
            bird.position.x - bird.size.width / 2 &&
          this.position.x <=
            bird.position.x - bird.size.width / 2 + bird.size.width &&
          this.position.y + this.size.height >= bird.position.y &&
          this.position.y <= bird.position.y + bird.size.height){
            console.log("up collide");
            bird.isAlive=false;
          }
        if(this.position.x + this.size.width >=
            bird.position.x - bird.size.width / 2 &&
          this.position.x <=
            bird.position.x - bird.size.width / 2 + bird.size.width &&
          this.position.y + this.size.height + 150 + this.size.height >=
            bird.position.y &&
          this.position.y + this.size.height + 150 <=
            bird.position.y + bird.size.height){

                console.log("down collide");
            bird.isAlive=false;
            
        }
    }

    update(){
        this.draw();
        
        
        this.drawDownPipe();
        if(bird.isAlive)
        {
            this.move();
            this.collision();
        }
        
    }
}