let animate = 0;

function End(){
    bird.y += 3;

    fill(0);
    text("Click AnyWhere to start!", camera.position.x-90, camera.position.y+100);

    image(board, camera.position.x, camera.position.y-50);

    image(game_overImg, camera.position.x, camera.position.y-200)

    fill(255, 107, 72);
    textSize(18);    
    text("Score", camera.position.x-32, camera.position.y-100);
    fill(255);
    textSize(20);
    text(score, camera.position.x-4, camera.position.y-65);
    fill(255, 107, 72);
    textSize(18);    
    text("Best", camera.position.x-24, camera.position.y-30);
    fill(255);
    textSize(20);
    text(highest_score, camera.position.x-4, camera.position.y+10);

    if(bird.y > ground.y-ground.width/8.5){
        bird.y = ground.y-ground.width/8.5;
    }
}