class Bird{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.r = 40;
        this.yspeed = 3;
        this.jump = false;
        this.image = loadImage("Images/bird.png");
    };

    jumping(){
        if(this.jump === false){
            this.y = this.y + this.yspeed;
        }else if(this.jump === true){
            this.y = this.y - this.yspeed;
            
        }
    }

    update(){
        this.x += 5;        
    };

    show(){
        image(this.image, this.x, this.y, 51, 36);
    };
}