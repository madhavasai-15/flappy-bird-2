class Ground{
    constructor(){
        this.x = bird.x-10;
        this.y = 610;
        this.width = 400*2;
        this.height = 600/4;
        this.image = loadImage("Images/ground.png");
    };

    touch(player){
        if(player.y > this.y-this.width/8.5){
            gameState = 3;
        }
    };

    update(){
        if(this.x < camera.position.x-width/2){
            this.x = bird.x; 
        }
    };

    show(){
        image(this.image, this.x, this.y);
    };
}