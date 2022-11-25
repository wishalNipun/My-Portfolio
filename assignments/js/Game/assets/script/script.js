//$('#gameLostWindow').css('display','none');
var idleImgNumber =0;
var idleImgAnimationId=0;
function idleAnimation(){
    idleImgNumber =idleImgNumber+1;
    if(idleImgNumber==9){
        idleImgNumber=0;
    }
    $('#character').attr('src','../assets/img/Idle__00'+idleImgNumber+'.png');
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
    $('#character').attr('src','../assets/img/Run__00'+runImgNumber+'.png');
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
       if(barrirerAnimationId==0){
           barrirerAnimationId =setInterval(barriersAnimation,100);
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
        if(barrirerAnimationId==0){
            barrirerAnimationId =setInterval(barriersAnimation,100);
        }
    }

});

var backgroundImagePosition =0;
var moveBackgroundAnimationId = 0;
var score =0
function moveBackground(){
    backgroundImagePosition = backgroundImagePosition - 20;
    $("#background").css('backgroundPositionX',backgroundImagePosition+"px");
    score = score+5;
    $('#scoreNumber').text(score);

    if(score ==2000){
        clearInterval(barrirerAnimationId);
        clearInterval(runAnimationId);
        runAnimationId =-1;
        clearInterval(jumpAnimationId)
        jumpAnimationId=-1;
        clearInterval(moveBackgroundAnimationId)
        moveBackgroundAnimationId=-1;
        $('#gameWinWindow').css('display','block');

    }
   setScoreWinLossWindows();
}

var jumpImgNumber =0;
var jumpAnimationId =0
var characterMarginTop = 447;
function jumpAnimation(){
    jumpImgNumber =jumpImgNumber+1;
    if(jumpImgNumber==9){
        jumpImgNumber=0;
        clearInterval(jumpAnimationId);
        jumpAnimationId =0;
        runImgNumber =0;
        runAnimationStart();
    }
    $('#character').attr('src','../assets/img/Jump__00'+jumpImgNumber+'.png');

    if(jumpImgNumber<=4){

        characterMarginTop = characterMarginTop -30;
        $("#character").css('margin-top',characterMarginTop+"px");
        console.log(characterMarginTop)
    }
    if(jumpImgNumber>=4){


        characterMarginTop = characterMarginTop +30;
        $("#character").css('margin-top',characterMarginTop+"px");
      //  console.log(characterMarginTop)
    }

}

function jumpAnimationStart(){
    clearInterval(idleImgAnimationId);
    runImgNumber =0;
    clearInterval(runAnimationId);
    jumpAnimationId = setInterval(jumpAnimation,120);

}

var barrierMarginLeft = 1550;
function creatBarriers(){
    for (var i=0;i<=10;i++){

        $('#background').append(`<div id="barrier${i}" class="barrier" style="margin-left: ${barrierMarginLeft+"px"}"></div>`)

        if(i<5){
            barrierMarginLeft = barrierMarginLeft + 1450;
        }

        if(i>=5){
            barrierMarginLeft = barrierMarginLeft + 1000;
        }


    }
}
creatBarriers();

var barrirerAnimationId=0;

function barriersAnimation(){
    for (var i=0;i<=10;i++){


        var currentMargin =$(`#barrier${i}`).css('margin-left');

        var newMargin = parseInt(currentMargin) -35;

        $(`#barrier${i}`).css('margin-left',newMargin+"px");


        if(newMargin>=-110 & newMargin<=100){
            if(characterMarginTop>430){
                clearInterval(barrirerAnimationId);
                clearInterval(runAnimationId);
                runAnimationId =-1;
                clearInterval(jumpAnimationId)
                jumpAnimationId=-1;
                clearInterval(moveBackgroundAnimationId)
                moveBackgroundAnimationId=-1;
                console.log(true);

                deadAnimationId = setInterval(deadAnimation,100);

            }
        }
    }
}

var deadImgNumber =0;
var deadAnimationId =0;
function deadAnimation(){
    deadImgNumber =deadImgNumber+1;
    if(deadImgNumber==9){
        deadImgNumber=8;
    }
    $('#character').attr('src','../assets/img/Dead__00'+deadImgNumber+'.png');
    $('#gameLostWindow').css('display','block');
}

function setScoreWinLossWindows(){
    $('#target').text('2000');
    $('#score').text($('#scoreNumber').text());
};