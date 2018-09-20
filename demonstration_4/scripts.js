$( document ).ready(function() {
    
//7
setTimeout(function(){   
$('#oval').css('background-color', 'black');
 }, 5000);

//8
$('#triangle').click(function() {
    $('#triangle').css('border-bottom', '0vw solid tan');
    $('#triangle').css('border-top', '20vw solid tan');
});
    
//9
$("#cross").mouseenter(function() {
      $('#cross').css('transform', 'rotate(180deg)');
    });

 $("#cross").mouseleave(function() {
      $('#cross').css('transform', 'rotate(0deg)');
    });

//10
$("#mouseY").mousemove(function(e){
    var parentOffset = $("#lineX").parent().offset(); 
    var relY = e.pageY - parentOffset.top + 1;
    $('#lineX').css('top', relY);
});
    
//11
    $("#mouseX").mousemove(function(e){
    var parentOffset = $("#lineY").parent().offset(); 
    var relX = e.pageX - parentOffset.left + 1;
    $('#lineY').css('left', relX);
});

//12
$(document).mousemove(function(e){
    $('#dot').css('left', e.pageX - 10);
    $('#dot').css('top', e.pageY - 10);
});
    
});   

    
    
    
    
    
    


