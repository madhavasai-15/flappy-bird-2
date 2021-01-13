class Ground{
    constructor(){
        this.x = bird.x;
        this.y = 610;
        this.width = 400*2;
        this.height = 600/4;
    };

    touch(player){
        if(player.y > this.y-this.width/8.5){
            gameState = 3;
        }
    };

    update(){
        this.x = bird.x;  
    };

    show(){
        fill(222, 216, 149);
        rect(this.x, this.y, this.width, this.height);
    };
}