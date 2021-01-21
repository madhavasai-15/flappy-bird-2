class Pipe{
    constructor(x){
        this.x1 = x;
        this.y1 = Math.round(random(485, 565));
        this.x2 = this.x1;
        this.y2 = Math.round(random(75, 115));
        this.width = 80;
        this.height = 300;
        this.up_Pipe = loadImage("Images/pipe1.png");
        this.Down_Pipe = loadImage("Images/pipe2.png"); 
    };

    touching(player){
        if(player.x > this.x1-this.width/2 && player.x < this.x1+this.width/2 && player.y > this.y1-this.height/2 && player.y < this.y1+this.height/2){
            gameState = 3;
        }
        if(player.x > this.x1-this.width/2 && player.x < this.x1+this.width/2 && player.y > this.y2-this.height/2 && player.y < this.y2+this.height/2){
            gameState = 3;
        }
    }

    score(){
        if(bird.x > this.x1-3 && bird.x < this.x1+3){
            score++;
        }
    }

    update(){
        if(this.x1 < camera.position.x-width*2-this.width){
            return true;
        }        
    };

    show(){
        imageMode(CENTER);
        image(this.up_Pipe, this.x1, this.y1);
        image(this.Down_Pipe, this.x2, this.y2);

        //fill(0, 255, 0);
        //rect(this.x1, this.y1, this.width, this.height);
        //rect(this.x2, this.y2, this.width, this.height);
    };
}