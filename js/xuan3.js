var b

$('.center1-top p a').mouseenter(function(){
    b=$(this).index()
    $(this).addClass('jiashen')
    $(this).siblings().removeClass('jiashen')

    console.log(b)
    $('.u ul').eq(b).show()
    $('.u ul').eq(b).siblings().hide()
})





