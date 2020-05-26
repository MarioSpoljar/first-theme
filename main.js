$(document).ready(function(){
    let isOpen = false;
    $('#actionBtn').click(function(){
        if(isOpen){
            $('#settings').animate({left: -200});
            isOpen = false;
        } else {
            $('#settings').animate({left: 0});
            isOpen = true;
        }
    });
});