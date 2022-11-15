
idleImgNumber =0
function idleAnimation(){
    idleImgNumber =idleImgNumber+1;
    if(idleImgNumber==9){
        idleImgNumber=1;
    }
    $('#character').attr('src','assets/img/Idle__00'+idleImgNumber+'.png');
}
setInterval(idleAnimation,100);