function Game(){
    bird.show();
    if(pipe_X > 300){
        bird.update();
        bird.jumping();
    }else {
        fill(0);
        text("Loading...", camera.position.x-30, camera.position.y-100);
        ground.x = bird.x - 10;
    }

    if(frameCount % 10 === 0 && bird.jump === true){
        bird.jump = false;
    }
            
    spawnPipe();
        
    for(let i = 0; i < pipe.length; i++){
        pipe[i].show();
        pipe[i].score();
        pipe[i].touching(bird);
        if(pipe[i].update()){
            pipe.splice(0, 2);
        }
    }  

    if(score > highest_score){ 
        highest_score = score;
        localStorage["highest_score"] = score;
    }

    fill(255);
    textSize(24);
    text(score, bird.x-10, camera.position.y-width/2);  

    ground.show();
    ground.touch(bird);
    
};