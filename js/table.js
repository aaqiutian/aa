var list=document.getElementById('list').children
var table=document.getElementById('table2').children
for(var i=0;i<list.length;i++){
    list[i].setAttribute('index',i)
    list[i].onmouseenter=function(){
        var c=this.getAttribute('index')
        for(var t=0;t<list.length;t++){
                list[t].removeAttribute('class')
                table[t].removeAttribute('class')  
        }
        table[c].setAttribute('class','current')
        this.setAttribute('class','current')
    }
}