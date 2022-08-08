$('.more1').hide()
$('.s5').hide()
$('.more').hover(function(){
    $('.more1').show()
    $('.s6').hide()
    $('.s5').show()
    $('.more').css('background','#caa6ff')
    
},function(){
    $('.more1').hide()
    $('.more').css('background','none')
    $('.s6').show()
    $('.s5').hide()
})

$('.right').hover(function(){
    $(this).children().show()
    
},function(){
   $(this).children().hide()
})