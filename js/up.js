



 $(window).scroll(function(){
      if($(window).scrollTop()>390){
         $('.up').show()
      }else{
          $('.up').hide()
      }
 })

 $('.up').click(function(){
     $('html,body').scrollTop(0)
 })

 $('.b2').hide()
 $('.up').mouseenter(function(){
    $('.b2').show()
    $('.b1').hide()
 })


 $('.up').mouseleave(function(){
    $('.b1').show()
    $('.b2').hide()
 })












