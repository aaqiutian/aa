// var box=document.getElementById('box');
// var list1=document.getElementById('list1').children
// var lunbo=document.getElementById('lunbo');
// var num=0;
// var time;

// function go(){
//     time=setInterval(function(){
//         num++;
//         if(num==4){num=0};  
    
//         box.style.transform='translateX('+-num*707+'px)';
        
//         for(t=0;t<list1.length;t++){
//                 list1[t].removeAttribute('class')
//         }
     
//         list1[num].setAttribute('class','current')
//     },2000)
// }
// go()

// lunbo.onmouseenter=function(){
//     clearInterval(time)
// }
// lunbo.onmouseleave=function(){
//     go()
// }
// console.log(list1.length)
       
// for(var i=0;i<list1.length;i++){
//     list1[i].setAttribute('index',i)
    
//     list1[i].onmouseenter=function(){
//         console.log('n')
//         num=this.getAttribute('index')    
//         for(t=0;t<list1.length;t++){
//             list1[t].removeAttribute('class')
//         }
        
//         box.style.transform='translateX('+-num*707+'px)';
//         this.setAttribute('class','current')

//     }
// }


// right.onclick=function(){       
//     num++;
//         if(num==4){num=0};
        
//         // 移动
//         box.style.transform='translateX('+-num*707+'px)';

//         for(t=0;t<list1.length;t++){
//                 list1[t].removeAttribute('class')
//         }
//         // 圆点变色
//         list1[num].setAttribute('class','current')
// }

// left.onclick=function(){
//     num--;
//     if(num==-1){num=3};

//     // 移动
//     box.style.transform='translateX('+-num*707+'px)';
    
//     for(t=0;t<list1.length;t++){
//             list1[t].removeAttribute('class');
//     }
//     // 圆点变色
//     list1[num].setAttribute('class','current')
// }

var num=0;
var timer;
function go1(){
    if(num==0){
        $('#lunbo ul').css({'left':`${-num*707}px`})
        num=1
    }
    $('#lunbo ul').animate({'left':`${-num*707}px`},300)
    if(num==4){
        $('#list1 li').eq(0).addClass('current')
        $('#list1 li').eq(0).siblings().removeClass('current')
    }else{
        $('#list1 li').eq(num).addClass('current')
        $('#list1 li').eq(num).siblings().removeClass('current')
    } 
}


function go2(){
    $('#lunbo ul').animate({'left':`${-num*707}px`},300)
    if(num==4){
        $('#list1 li').eq(0).addClass('current')
        $('#list1 li').eq(0).siblings().removeClass('current')
    }else{
        $('#list1 li').eq(num).addClass('current')
        $('#list1 li').eq(num).siblings().removeClass('current')
    } 
}
function go(){
    timer=setInterval(function(){
        num++;
        if(num==5)num=0
       go1()
    },2000)
}
go()
// $('div').hover(function(){鼠标移入},function(){鼠标移出})
$('#lunbo').hover(function(){
    clearInterval(timer)
    $('#left').css('display','inline-block')
 
    $('#right').css('display','inline-block')
    // $('#left').slideDown()
},function(){
    go()
    $('#right').css('display','none')
   $('#left').css('display','none')
})
$('#list1 li').mouseenter(function(){
    num=$(this).index()
    $('#lunbo ul').animate({'left':`${-num*707}px`},300)
    if(num==4){
        $('#list1 li').eq(0).addClass('current')
        $('#list1 li').eq(0).siblings().removeClass('current')
    }else{
        $('#list1 li').eq(num).addClass('current')
        $('#list1 li').eq(num).siblings().removeClass('current')
    } 

})
$('#left').click(function(){
    num--;
    if(num==-1)num=3
    go2()
})
$('#right').click(function(){
    num++;
    if(num==4)num=0
    go2()
})