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


    //spaceBar
    if (event.which==32){
        if(jumpAnimationId==0){
            jumpAnimationStart();
        }
        if (moveBackgroundAnimationId==0){
            clearInterval(moveBackgroundAnimationId);
            moveBackgroundAnimationId=setInterval(moveBackground,100)
        }
    }

});

var backgroundImagePosition =0;
var moveBackgroundAnimationId = 0;

function moveBackground(){
    backgroundImagePosition = backgroundImagePosition - 20;
    $("#background").css('backgroundPositionX',backgroundImagePosition+"px");
}

var jumpImgNumber =0;
var jumpAnimationId =0
var characterMarginTop = 406;
function jumpAnimation(){
    jumpImgNumber =jumpImgNumber+1;
    if(jumpImgNumber==9){
        jumpImgNumber=0;
        clearInterval(jumpAnimationId);
        jumpAnimationId =0;
        runImgNumber =0;
        runAnimationStart();
    }
    $('#character').attr('src','assets/img/Jump__00'+jumpImgNumber+'.png');

    if(jumpImgNumber<=4){

        characterMarginTop = characterMarginTop -30;
        $("#character").css('margin-top',characterMarginTop+"px");
    }
    if(jumpImgNumber>=4){


        characterMarginTop = characterMarginTop +30;
        $("#character").css('margin-top',characterMarginTop+"px");
    }
}

function jumpAnimationStart(){
    clearInterval(idleImgAnimationId);
    runImgNumber =0;
    clearInterval(runAnimationId);
    jumpAnimationId = setInterval(jumpAnimation,100);

}

var barrierMarginLeft = 500;
function creatBarriers(){
    for (var i=0;i<=10;i++){

        $('#background').append(`<div class="barrier" style="margin-left: ${barrierMarginLeft+"px"}"></div>`)

        if(i<5){
            barrierMarginLeft = barrierMarginLeft + 700;
        }

        if(i>=5){
            barrierMarginLeft = barrierMarginLeft + 500;
        }


    }
}

creatBarriers();