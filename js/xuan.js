var li1=document.getElementById('li1')
var li2=document.getElementById('li2')
var wz=document.getElementById('wz')
var ww=document.getElementById('ww')
var fs=document.getElementById('fs')
var main2=document.getElementById('main2')
var xuan2=document.getElementById('xuan2')
var main1=document.getElementById('main1')

li1.onclick=function(){
    li1.style.borderBottom='2px solid #b388ff'
    li1.style.color='#b388ff'
    li2.style.border='none'
    li2.style.color='black'
    xuan2.style.display='none'
    wz.style.display='block'
    ww.style.display='block'
    fs.style.display='block'
    main2.style.display='block'
    main1.style.width='959px'

}


li2.onclick=function(){
    li2.style.borderBottom='2px solid #b388ff'
    li2.style.color='#b388ff'
    li1.style.border='none'
    li1.style.color='black'
    wz.style.display='none'
    ww.style.display='none'
    fs.style.display='none'
    main2.style.display='none'
    xuan2.style.display='block'
    main1.style.width='1210px'
}



