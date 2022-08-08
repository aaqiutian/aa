
var time
var n=0

function gox(){
    if(n==0){
        $('.lun2 ul').css({'left':`${-n*240}px`})
        n=1
       }
    $('.lun2 ul').animate({'left':`${-n*240}px`},500)
    if(n==3){
        $('.xlun2 li').eq(0).addClass('curren')
        $('.xlun2 li').eq(0).siblings().removeClass('curren')
    }else{
        $('.xlun2 li').eq(n).addClass('curren')
        $('.xlun2 li').eq(n).siblings().removeClass('curren')
    }
}

function go3(){

    $('.lun2 ul').animate({'left':`${-n*240}px`},500)
    if(n==3){
        $('.xlun2 li').eq(0).addClass('curren')
        $('.xlun2 li').eq(0).siblings().removeClass('curren')
    }else{
        $('.xlun2 li').eq(n).addClass('curren')
        $('.xlun2 li').eq(n).siblings().removeClass('curren')
    }
}
function go4(){
    time=setInterval(function(){
        n++;
    //    console.log(n)
        if(n==4)n=0
       gox()
    },2000)
}

go4()

$('.lun2').hover(function(){
      clearInterval(time)
},function(){
    go2()
})

$('.xlun2 li').mouseenter(function(){
    n=$(this).index()
    go3()
})


