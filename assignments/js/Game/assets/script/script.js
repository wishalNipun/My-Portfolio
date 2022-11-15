var idleImgNumber =0;
var idleImgAnimationId;
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
var runAnimationId;
function runAnimation(){
    runImgNumber =runImgNumber+1;
    if(runImgNumber==9){
        runImgNumber=0;
    }
    $('#character').attr('src','assets/img/Run__00'+runImgNumber+'.png');
}

function runAnimationStart(){
    runAnimationId = setInterval(runAnimation,100);
    clearInterval(idleImgAnimationId);
}
$("body").on('keydown', function (event) {
    if (event.key == "Enter") {
       runAnimationStart();
    }
});
