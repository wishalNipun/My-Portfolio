var idleImgNumber =0;
var idleImgAnimationId=0;
function idleAnimation(){
    idleImgNumber =idleImgNumber+1;
    if(idleImgNumber==9){
        idleImgNumber=0;
    }
    $('#character').attr('src','assets/img/Idle__00'+idleImgNumber+'.png');
}

function idleAnimationStart(){
    idleImgAnimationId=setInterval(idleAnimation,100);
}
idleAnimationStart();

var runImgNumber =0
var runAnimationId=0;
function runAnimation(){
    runImgNumber =runImgNumber+1;
    if(runImgNumber==9){
        runImgNumber=0;
    }
    $('#character').attr('src','assets/img/Run__00'+runImgNumber+'.png');
}

function runAnimationStart(){
    clearInterval(idleImgAnimationId);
    clearInterval(runAnimationId);
    runAnimationId = setInterval(runAnimation,100);

}
$("body").on('keydown', function (event) {
    if (event.key == "Enter") {
       if (runAnimationId==0){
           runAnimationStart();
       }
        if (moveBackgroundAnimationId==0){
            clearInterval(moveBackgroundAnimationId);
            moveBackgroundAnimationId=setInterval(moveBackground,100)
        }
    }



    if (event.which==32){
        alert("spacebar")
    }

});

var backgroundImagePosition =0;
var moveBackgroundAnimationId = 0;
function moveBackground(){
    backgroundImagePosition = backgroundImagePosition - 20;
    $("#background").css('backgroundPositionX',backgroundImagePosition+"px");
}

function jumpAnimation(){

}

function jumpAnimationStart(){

}

