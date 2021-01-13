class Bird{
    constructor(x, y){
        this.x = x;
        this.y = y;
        this.r = 40;
        this.yspeed = 3;
        this.jump = false;
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
        fill(255);
        ellipseMode(CENTER);
        ellipse(this.x, this.y, this.r, this.r);
    };
}