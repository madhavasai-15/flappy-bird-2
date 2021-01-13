
function reset(){
    bird.y = height/2;
    score = 0;
    gameState = 1;
    pipe_X = 300;
    pipe.splice(0, pipe.length);
}