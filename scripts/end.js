let animate = 0;

function End(){
    bird.y += 3;

    fill(0);
    text("Click AnyWhere to start!", camera.position.x-80, camera.position.y-180);

    fill(56);
    rect(camera.position.x, camera.position.y-80, 120, 160);

    fill(255);
    textSize(18);    
    text("Score", camera.position.x-32, camera.position.y-125);
    textSize(20);
    text(score, camera.position.x-4, camera.position.y-85);
    textSize(18);    
    text("Best", camera.position.x-24, camera.position.y-50);
    textSize(20);
    text(score, camera.position.x-4, camera.position.y-10);

    if(bird.y > ground.y-ground.width/8.5){
        bird.y = ground.y-ground.width/8.5;
    }
}